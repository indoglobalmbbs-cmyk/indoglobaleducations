export type ConsentValue = 'granted' | 'denied';

export interface ConsentState {
  necessary: 'granted';
  analytics: ConsentValue;
  advertising: ConsentValue;
}

export const CONSENT_STORAGE_KEY = 'indo-global-consent';
export const CONSENT_CHANGED_EVENT = 'indo-global:consent-changed';
export const CONSENT_OPEN_EVENT = 'indo-global:consent-open';

export const defaultConsentState: ConsentState = {
  necessary: 'granted',
  analytics: 'denied',
  advertising: 'denied',
};

const canUseWindow = () => typeof window !== 'undefined';

const dispatchConsentEvent = (state: ConsentState) => {
  if (!canUseWindow()) return;

  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, {
      detail: state,
    }),
  );
};

export const getStoredConsent = (): ConsentState => {
  if (!canUseWindow()) return defaultConsentState;

  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (!stored) return defaultConsentState;

  try {
    const parsed = JSON.parse(stored) as Partial<ConsentState>;

    return {
      necessary: 'granted',
      analytics: parsed.analytics === 'granted' ? 'granted' : 'denied',
      advertising: parsed.advertising === 'granted' ? 'granted' : 'denied',
    };
  } catch {
    return defaultConsentState;
  }
};

export const hasStoredConsent = () => {
  if (!canUseWindow()) return false;
  return window.localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
};

export const saveConsent = (state: ConsentState) => {
  if (!canUseWindow()) return;

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  dispatchConsentEvent(state);
};

export const acceptAllConsent = () =>
  saveConsent({
    necessary: 'granted',
    analytics: 'granted',
    advertising: 'granted',
  });

export const denyOptionalConsent = () => saveConsent(defaultConsentState);

export const openConsentPreferences = () => {
  if (!canUseWindow()) return;
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
};
