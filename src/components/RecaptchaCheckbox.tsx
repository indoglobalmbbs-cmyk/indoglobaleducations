import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

const RECAPTCHA_SCRIPT_ID = 'google-recaptcha-v2-script';
const RECAPTCHA_SCRIPT_SRC =
  'https://www.google.com/recaptcha/api.js?render=explicit';

type Grecaptcha = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export type RecaptchaCheckboxHandle = {
  reset: () => void;
};

interface RecaptchaCheckboxProps {
  siteKey?: string;
  onChange: (token: string | null) => void;
  onError: (message: string) => void;
  testId: string;
}

const loadRecaptchaScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }

    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = RECAPTCHA_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });

const RecaptchaCheckbox = forwardRef<
  RecaptchaCheckboxHandle,
  RecaptchaCheckboxProps
>(({ siteKey, onChange, onError, testId }, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [hasLoadError, setHasLoadError] = useState(false);
  const isUnavailable = !siteKey || hasLoadError;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      onChange(null);
    },
  }));

  useEffect(() => {
    let isMounted = true;

    if (!siteKey) {
      return;
    }

    loadRecaptchaScript()
      .then(() => {
        if (!isMounted || !containerRef.current || !window.grecaptcha) return;
        if (widgetIdRef.current !== null) return;

        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            onChange(token);
          },
          'expired-callback': () => {
            onChange(null);
            onError('reCAPTCHA expired. Please verify again.');
          },
          'error-callback': () => {
            onChange(null);
            onError('reCAPTCHA could not verify you. Please try again.');
          },
        });
      })
      .catch(() => {
        if (!isMounted) return;
        setHasLoadError(true);
        onChange(null);
        onError('Unable to load reCAPTCHA. Please check your connection.');
      });

    return () => {
      isMounted = false;
    };
  }, [onChange, onError, siteKey]);

  return (
    <div data-testid={testId}>
      <div ref={containerRef} />
      {isUnavailable ? (
        <p className="mt-2 text-sm font-medium text-red-600" role="alert">
          reCAPTCHA is unavailable right now.
        </p>
      ) : null}
    </div>
  );
});

RecaptchaCheckbox.displayName = 'RecaptchaCheckbox';

export default RecaptchaCheckbox;
