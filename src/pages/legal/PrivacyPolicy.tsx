import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { privacypolicy } from '../../assets/images';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('who-we-are');

  const sections = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'info-collected', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Information' },
    { id: 'ads-cookies', label: 'Cookies & Advertising' },
    { id: 'whatsapp-chat', label: 'WhatsApp Communication' },
    { id: 'data-sharing', label: 'How We Share Data' },
    { id: 'your-choices', label: 'Your Choices & Retention' },
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
          alt="Privacy Policy - Indo Global Education"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-white">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary-light rounded-full backdrop-blur-sm border border-white/10">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-slate-300 leading-relaxed font-light">
            This policy outlines how Indo Global Education collects, processes,
            and protects your personal information when you use our admissions
            and counselling framework.
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
            <div id="who-we-are" className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Who we are
              </h2>
              <p className="text-base text-slate-600">
                Indo Global Education provides comprehensive professional
                counselling and structured admission guidance for students
                exploring MBBS paths abroad and related global medical education
                opportunities.
              </p>
            </div>
            <div
              id="info-collected"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Information we collect
              </h2>
              <p className="mb-4">
                We securely process data provided directly by you, encompassing:
              </p>
              <ul className="space-y-3">
                {[
                  'Personal Identifiers: Full name, primary contact number, email configurations, and permanent city or country.',
                  'Academic & Counselling Artifacts: Previous academic data sheets, background details submitted via enquiry portals, or notes from detailed diagnostics sessions.',
                  'Communication Footprints: Logs and transcripts of text iterations generated across email configurations, telephonic endpoints, and integrated WhatsApp shortcuts.',
                  'Analytics Metrics: Contextual parameters including screen dimensions, browser engines, and interface metrics handled via authorized operational cookies.',
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
              id="how-we-use"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                How we use your information
              </h2>
              <p className="mb-4">
                Your processing endpoints are governed exclusively by these core
                intents:
              </p>
              <ul className="space-y-3">
                {[
                  'Processing and responding to ongoing admission tracks and direct structural requests.',
                  'Transmitting structural documentation regarding international universities, regulatory compliance, fees, and visa steps.',
                  'Enhancing internal user workflows and refining custom user interactions across our online landing zones.',
                  'Auditing baseline digital tracking loops to accurately weigh promotional attribution metrics.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              id="ads-cookies"
              className="scroll-mt-40 border-t border-slate-100 pt-8 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Advertising, cookies, and similar technologies
                </h2>
                <p>
                  We leverage technical integration nodes from third-party
                  vendors (such as Google and Meta) to evaluate marketing
                  efficiency, perform target-group mapping, and execute
                  remarketing configurations. These integrations make use of
                  local cookies or browser tokens to safely process your
                  interactions, strictly anchored to your opt-in status.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Google Ads Disclosures
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Google profiles display our targeted updates. They utilize
                    custom cookies to match your historical patterns here. You
                    can update your profiles directly via the Google Ads
                    Dashboard.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Meta Ads Framework
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Where dynamic pixel loops or data tracking elements are
                    deployed, they evaluate click performance metrics and
                    generate custom matching profiles adhering to global
                    security standards.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="whatsapp-chat"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                WhatsApp communications
              </h2>
              <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-100 text-slate-700">
                <p className="mb-3">
                  When you initiate contact using our explicit WhatsApp
                  shortcuts, your conversation drops directly under the
                  protective bounds of the standard WhatsApp Business Privacy
                  Infrastructure.
                </p>
                <p className="text-sm text-slate-600">
                  The on-screen CTA functions purely as an external entry window
                  and does not execute structural cookie processing in
                  isolation. Subsequent lead metrics fall inside our explicit
                  tracking groups only if analytical trackers are
                  pre-authorized.
                </p>
              </div>
            </div>
            <div
              id="data-sharing"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                How we share information
              </h2>
              <p className="mb-4">
                We maintain strict data classification boundaries, releasing
                profiles only to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Technical Processing Hubs',
                    desc: 'Form managers, reliable cloud infrastructure providers, and transactional messaging engines.',
                  },
                  {
                    title: 'Affiliated Global Institutes',
                    desc: 'Only target universities explicitly selected by you during formal application steps.',
                  },
                  {
                    title: 'Attribution Platforms',
                    desc: 'Consent-mapped analytical configurations determining overall system performance.',
                  },
                  {
                    title: 'Statutory Bodies',
                    desc: 'Enforcement bodies or regulatory offices when legally protected disclosures apply.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors"
                  >
                    <h4 className="text-sm font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="your-choices"
              className="scroll-mt-40 border-t border-slate-100 pt-8 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Your choices
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>
                    You maintain absolute command over tracking variables via
                    our active Cookie Control framework.
                  </li>
                  <li>
                    You can selectively withhold requested information (note:
                    some features may break).
                  </li>
                  <li>
                    Data deletion or active profile adjustments can be requested
                    explicitly via mail channels.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Data retention
                </h3>
                <p className="text-sm">
                  Profiles remain stored inside our structured environments for
                  the duration necessary to satisfy processing milestones,
                  fulfill educational evaluation pipelines, resolve compliance
                  obligations, or close legal verification actions.
                </p>
              </div>
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

export default PrivacyPolicy;
