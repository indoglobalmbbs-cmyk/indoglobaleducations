import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { privacypolicy } from '../../assets/images';

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState('what-are-cookies');

  const sections = [
    { id: 'what-are-cookies', label: 'What Are Cookies' },
    { id: 'cookie-categories', label: 'Categories We Use' },
    { id: 'controlling-cookies', label: 'How to Control Cookies' },
    { id: 'third-party-tech', label: 'Third-Party Technologies' },
    { id: 'policy-updates', label: 'Policy Updates' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased selection:bg-primary/10">
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src={privacypolicy}
          alt="Cookie Policy - Indo Global Education"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-white">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary-light rounded-full backdrop-blur-sm border border-white/10">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Cookie Policy
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-slate-300 leading-relaxed font-light">
            This Cookie Policy explains how Indo Global Education uses cookies
            and similar technologies on the website and how you can control
            optional analytics and advertising storage.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">
              Table of Contents
            </h4>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-primary/5 text-primary border-l-4 border-primary pl-4 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 pl-3'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>
          <div className="col-span-1 lg:col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10 space-y-8 text-slate-600 leading-relaxed">
            <div id="what-are-cookies" className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                What cookies and similar technologies are
              </h2>
              <p className="text-base text-slate-600">
                Cookies are small files or browser-based storage entries used to
                keep a website working, remember choices, measure usage, and
                support advertising or remarketing tools. Similar technologies
                may include pixels, tags, scripts, and device identifiers.
              </p>
            </div>
            <div
              id="cookie-categories"
              className="scroll-mt-40 border-t border-slate-100 pt-8 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Categories we use
                </h2>
                <p>
                  We categorize the technical storage and data endpoints we
                  leverage into distinct operational buckets based on
                  functionality and your tracking authorization:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Necessary
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Necessary storage supports core site functions such as
                    security, routing, basic interface behavior, and saving your
                    consent choices. These are always active.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Analytics
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Analytics storage may be used to understand how visitors
                    interact with the website, which pages perform well, and how
                    to improve user journeys, page quality, and enquiry flows.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Advertising
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Advertising storage may be used for future Meta ads, Google
                    ads, remarketing, conversion tracking, and audience
                    measurement. These technologies should remain disabled until
                    consent is granted.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="controlling-cookies"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                How to control cookies
              </h2>
              <p className="mb-4">
                You maintain absolute command over your technical and tracking
                data. You can exercise your preferences through the following
                steps:
              </p>
              <ul className="space-y-3">
                {[
                  'Use the cookie banner when you first visit the website to accept all, allow necessary storage only, or customize preferences.',
                  'Reopen your choices any time through the Cookie Preferences link in the footer.',
                  'Adjust browser configurations to drop or block tracking elements natively, though some system features may break.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              id="third-party-tech"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Third-party technologies
              </h2>
              <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-100 text-slate-700">
                <p className="mb-3">
                  If analytics or advertising technologies are enabled, third
                  parties such as Google or Meta may receive signals about
                  visits, pages viewed, and related website activity.
                </p>
                <p className="text-sm text-slate-600">
                  All automated metrics and contextual transfers operate in
                  strict compliance with your selected preferences,
                  authorization parameters, and applicable privacy laws.
                </p>
              </div>
            </div>
            <div
              id="policy-updates"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Policy updates
              </h2>
              <p className="text-sm text-slate-600">
                We may update this Cookie Policy when website tools, platform
                integrations, or legal requirements change. The current version
                on the site will apply immediately from the date it is
                officially published.
              </p>
            </div>
            <div className="border-t-2 border-dashed border-slate-100 pt-8 bg-slate-50/50 -mx-6 md:-mx-10 px-6 md:px-10 pb-2 rounded-b-2xl">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Privacy Assistance
              </h2>
              <p className="text-sm text-slate-550 mb-4">
                Have specific concerns regarding your structural data processing
                records? Reach our monitoring team directly:
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href="mailto:Indoglobaledu.official@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-primary hover:text-primary-dark hover:border-primary/30 transition-all"
                >
                  <FiMail className="w-4 h-4 text-slate-500" />
                  Indoglobaledu.official@gmail.com
                </a>
                <a
                  href="tel:+917090000502"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-primary hover:text-primary-dark hover:border-primary/30 transition-all"
                >
                  <FiPhone className="w-4 h-4 text-slate-500" />
                  +91 7090000502
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
