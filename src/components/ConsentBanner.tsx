import { useEffect, useState } from 'react';
import {
  acceptAllConsent,
  CONSENT_CHANGED_EVENT,
  CONSENT_OPEN_EVENT,
  denyOptionalConsent,
  getStoredConsent,
  hasStoredConsent,
  saveConsent,
  type ConsentState,
} from '../lib/consent';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(() => !hasStoredConsent());
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(() =>
    getStoredConsent(),
  );

  useEffect(() => {
    const handleOpen = () => {
      setConsent(getStoredConsent());
      setShowPreferences(true);
      setIsVisible(true);
    };

    const handleChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState>).detail;
      if (detail) setConsent(detail);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    window.addEventListener(CONSENT_CHANGED_EVENT, handleChange);

    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
      window.removeEventListener(CONSENT_CHANGED_EVENT, handleChange);
    };
  }, []);

  if (!isVisible) return null;

  const updateCategory = (
    category: Exclude<keyof ConsentState, 'necessary'>,
    value: ConsentState[typeof category],
  ) => {
    setConsent((current) => ({
      ...current,
      [category]: value,
    }));
  };

  const savePreferences = () => {
    saveConsent(consent);
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] px-4 pb-4">
      <div className="mx-auto max-w-6xl rounded-3xl border border-primary/15 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]">
        <div className="grid gap-6 p-6 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="space-y-3">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Privacy & Cookies
            </div>
            <h3 className="text-xl font-bold text-text">
              Manage analytics and advertising cookies before we enable them.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Indo Global Education uses necessary site storage to keep the site
              secure and functional. Optional analytics and advertising cookies
              may be used for Meta ads, Google ads, measurement, remarketing,
              and improving lead journeys only after your consent where
              required.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              You can review the details in our Privacy Policy and Cookie Policy
              or reopen these choices later from the footer.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                type="button"
                onClick={() => setShowPreferences((current) => !current)}
                className="rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                {showPreferences ? 'Hide Preferences' : 'Customize'}
              </button>
              <button
                type="button"
                onClick={() => {
                  denyOptionalConsent();
                  setIsVisible(false);
                  setShowPreferences(false);
                }}
                className="rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-slate-100"
              >
                Necessary Only
              </button>
              <button
                type="button"
                onClick={() => {
                  acceptAllConsent();
                  setIsVisible(false);
                  setShowPreferences(false);
                }}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
        {showPreferences ? (
          <div className="border-t border-primary/10 px-6 pb-6 pt-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-text">Necessary</p>
                <p className="mt-2 text-sm text-text-muted">
                  Required for security, routing, form state, and your saved
                  privacy preferences.
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-success">
                  Always Active
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-text">
                      Analytics
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      For performance insights, traffic reporting, and measuring
                      landing page quality.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-primary"
                    checked={consent.analytics === 'granted'}
                    onChange={(event) =>
                      updateCategory(
                        'analytics',
                        event.target.checked ? 'granted' : 'denied',
                      )
                    }
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-text">
                      Advertising
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      Reserved for future Meta Pixel, Google Ads, remarketing,
                      and conversion tracking tags.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-primary"
                    checked={consent.advertising === 'granted'}
                    onChange={(event) =>
                      updateCategory(
                        'advertising',
                        event.target.checked ? 'granted' : 'denied',
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ConsentBanner;
