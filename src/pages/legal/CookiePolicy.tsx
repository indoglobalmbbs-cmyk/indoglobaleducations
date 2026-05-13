import LegalPageLayout from './LegalPageLayout';

const CookiePolicy = () => {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      description="This Cookie Policy explains how Indo Global Education uses cookies and similar technologies on the website and how you can control optional analytics and advertising storage."
    >
      <h2>What cookies and similar technologies are</h2>
      <p>
        Cookies are small files or browser-based storage entries used to keep a
        website working, remember choices, measure usage, and support
        advertising or remarketing tools. Similar technologies may include
        pixels, tags, scripts, and device identifiers.
      </p>

      <h2>Categories we use</h2>
      <h3>Necessary</h3>
      <p>
        Necessary storage supports core site functions such as security,
        routing, basic interface behavior, and saving your consent choices.
        These are always active.
      </p>

      <h3>Analytics</h3>
      <p>
        Analytics storage may be used to understand how visitors interact with
        the website, which pages perform well, and how to improve user
        journeys, page quality, and enquiry flows.
      </p>

      <h3>Advertising</h3>
      <p>
        Advertising storage may be used for future Meta ads, Google ads,
        remarketing, conversion tracking, and audience measurement. These
        technologies should remain disabled until consent is granted where
        required.
      </p>

      <h2>How to control cookies</h2>
      <ul>
        <li>
          Use the cookie banner when you first visit the website to accept all,
          allow necessary storage only, or customize preferences.
        </li>
        <li>
          Reopen your choices any time through the Cookie Preferences link in
          the footer.
        </li>
        <li>
          You can also adjust browser settings to manage cookies, though some
          site features may be affected.
        </li>
      </ul>

      <h2>Third-party technologies</h2>
      <p>
        If analytics or advertising technologies are enabled, third parties
        such as Google or Meta may receive signals about visits, pages viewed,
        and related website activity in accordance with your selected
        preferences and applicable law.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this Cookie Policy when website tools, platform
        integrations, or legal requirements change. The current version on the
        site will apply from the date it is published.
      </p>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
