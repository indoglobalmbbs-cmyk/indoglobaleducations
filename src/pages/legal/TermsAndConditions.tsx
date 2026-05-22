import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { termsandconditions } from '../../assets/images';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'eligibility', label: 'Use & Eligibility' },
    { id: 'restricted-uses', label: 'Restricted Uses' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'analytics-ads', label: 'Tracking & Analytics' },
    { id: 'limitation-liability', label: 'Limitation of Liability' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'indemnity-severability', label: 'Indemnity & Severability' },
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
          src={termsandconditions}
          alt="Terms and Conditions - Indo Global Education"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-white">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary-light rounded-full backdrop-blur-sm border border-white/10">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Terms & Conditions
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-slate-300 leading-relaxed font-light">
            These Terms & Conditions govern your access to the platform and your
            use of our counselling, enquiry, and structural informational
            content.
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
            <div id="intro" className="scroll-mt-40">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section I
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Introduction & Acceptance of Terms
              </h2>
              <p className="mb-4">
                Please read these terms and conditions carefully before using
                this platform. Using services through this platform signifies
                your explicit acceptance of these terms and conditions and your
                unconditional consent and agreement to be legally bound by them
                under applicable laws and regulations.
              </p>
              <p>
                This Agreement constitutes a legally binding contract between
                you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and
                the website operator (&quot;Operator&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;). Even though this agreement
                is electronic and not physically signed, it governs your
                transactional and navigational footprint across the platform. If
                you do not agree to these terms, you are not authorized to
                access or use our services.
              </p>
            </div>
            <div
              id="eligibility"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section II
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Use of Website & Eligibility Guidance
              </h2>
              <p className="mb-4">
                You may use this website to review information about MBBS
                abroad, enquire about professional medical counselling, and
                contact our team for lawful educational guidance purposes. When
                you submit a form or initiate direct communication, you agree to
                provide accurate, true, and verifiable information.
              </p>
              <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-100 text-slate-700">
                <strong className="text-amber-950 block mb-1.5 text-sm uppercase tracking-wider font-bold">
                  Verification Disclaimer
                </strong>
                <p className="text-sm leading-relaxed text-slate-600">
                  The website provides general information regarding
                  international university structures, tuition fees, eligibility
                  rules, and licensing pathways. This data is subject to change
                  without notice. Users must verify current admissions status,
                  visa requirements, and regulatory obligations directly with
                  the respective university or competent authority before
                  rendering final decisions.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div
              id="restricted-uses"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section III
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Restricted Uses
              </h2>
              <p className="mb-4">
                In addition to other prohibitions set forth in the Agreement,
                you are strictly prohibited from using the website, its content,
                or its associated services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Unlawful Activities',
                    desc: 'To execute or solicit others to participate in any unlawful or unauthorized acts.',
                  },
                  {
                    title: 'Regulatory Violations',
                    desc: 'To breach local, state, provincial, federal, or international laws and ordinances.',
                  },
                  {
                    title: 'Property Infringement',
                    desc: 'To violate our explicit intellectual property rights or the rights of third parties.',
                  },
                  {
                    title: 'Malicious Software',
                    desc: 'To inject viruses, malware, or destructive code affecting system functionality.',
                  },
                  {
                    title: 'Scraping & Phishing',
                    desc: 'To crawl, scrape, spider, phish, or pretext our underlying data structures.',
                  },
                  {
                    title: 'Security Interference',
                    desc: 'To circumvent, bypass, or test the baseline security architecture of the platform.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors"
                  >
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide mb-1">
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="intellectual-property"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section IV
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Protection of Intellectual Property Rights
              </h2>
              <p>
                This Agreement does not transfer any intellectual property owned
                by the Operator or affiliated third parties to you. All branding
                elements, codebases, custom graphics, trademarks, logos, and
                original textual architectures remain exclusively ours or our
                licensors&apos;. Your interaction with the platform grants you
                no license or right to reproduce, redistribute, or reuse our
                intellectual assets for commercial gain without clear, explicit
                written authorization.
              </p>
            </div>
            <div
              id="analytics-ads"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section V
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Tracking, Advertising & Microsoft Clarity Disclosures
              </h2>
              <p className="mb-4">
                We actively monitor system health, optimize user workflows, and
                run target-group tracking. The website interfaces with external
                data metrics platforms to evaluate interface performance:
              </p>
              <div className="p-5 rounded-xl bg-indigo-50/40 border border-indigo-100 text-slate-700 space-y-3">
                <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">
                  Microsoft Clarity & Advertising Integration
                </h4>
                <p className="text-sm leading-relaxed">
                  We partner directly with Microsoft Clarity and Microsoft
                  Advertising to capture real-time behavioral metrics, scroll
                  maps, heatmaps, and session replays. This safe processing
                  enables product evaluation, security tracking, and customized
                  market optimizations.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Data points are aggregated using first- and third-party
                  tracking tokens and cookies. By interacting with our digital
                  interfaces, you acknowledge and consent that these analytical
                  loops may log interaction flows in full alignment with global
                  compliance standards.
                </p>
              </div>
            </div>
            <div
              id="limitation-liability"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section VI
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                Our teams provide comprehensive, professional counselling
                inputs, but we do not guarantee unconditional admission
                clearances, specific visa issuing times, absolute university
                seat availabilities, or subsequent licensing test outcomes
                within any sovereign jurisdiction.
              </p>
              <div className="p-5 rounded-xl bg-slate-50 border border-l-4 border-l-slate-400 border-slate-100">
                <p className="text-sm italic text-slate-600 leading-relaxed">
                  &quot;To the fullest extent permitted by applicable law, the
                  Operator, its directors, employees, or affiliates shall not be
                  held liable for any indirect, incidental, special,
                  consequential, or punitive damages (including loss of profits,
                  savings, or business opportunities) arising out of or related
                  to your reliance on information provided here.&quot;
                </p>
              </div>
            </div>
            <div
              id="governing-law"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Section VII
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Governing Law & Dispute Resolution
              </h2>
              <p>
                The setup, interpretation, execution, and validity of this
                Agreement, along with any legal friction or disputes arising out
                of your usage footprints, are governed exclusively by the
                substantive and procedural laws of{' '}
                <strong className="text-slate-900 font-semibold">
                  Maharashtra, India
                </strong>
                . Any formal legal proceedings or actions concerning this
                framework must be filed strictly inside the competent courts of
                Maharashtra, India. You hereby waive any right to alternate
                jurisdictions or jury trials in any action arising under or
                related to this contract.
              </p>
            </div>
            <div
              id="indemnity-severability"
              className="scroll-mt-40 border-t border-slate-100 pt-8 space-y-6"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                  Section VIII
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Indemnification & Severability
                </h2>
                <p>
                  You agree to defend, indemnify, and hold harmless the
                  Operator, its officers, and employees from any liabilities,
                  financial losses, claims, or legal fees arising from your
                  misuse of the platform, submission of fraudulent information,
                  or your absolute infringement of third-party terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Severability Clause
                </h3>
                <p className="text-sm">
                  If any provision or paragraph of these terms is deemed
                  unlawful, void, or unenforceable by a court of competent
                  jurisdiction, that item will be limited or separated only to
                  the minimum extent required, leaving the balance of the
                  remaining provisions fully active, valid, and legally
                  enforceable.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-slate-100 pt-8 bg-slate-50/50 -mx-6 md:-mx-10 px-6 md:px-10 pb-2 rounded-b-2xl">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Amendments & Contact Updates
              </h2>
              <p className="text-sm text-slate-550 mb-4 leading-relaxed">
                We reserve the right to revise this legal contract or modify
                platform workflows at any given time by uploading the latest
                revisions directly to this viewport. Ongoing visits following
                updates establish your clear binding consensus.
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

export default TermsAndConditions;
