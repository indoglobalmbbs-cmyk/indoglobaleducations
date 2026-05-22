import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { privacypolicy } from '../../assets/images';  

const Disclaimer = () => {
  const [activeSection, setActiveSection] = useState('regulatory');

  const sections = [
    { id: 'regulatory', label: 'No Regulatory Endorsement' },
    { id: 'guarantee', label: 'No Admission / Visa Guarantee' },
    { id: 'verification', label: 'Independent Verification' },
    { id: 'external-content', label: 'External Content Changes' },
    { id: 'platforms', label: 'Platforms & Advertising' },
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
          alt="Disclaimer - Indo Global Education"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-white">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary-light rounded-full backdrop-blur-sm border border-white/10">
            Legal & Framework
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Disclaimer
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-slate-300 leading-relaxed font-light">
            This website is intended to provide practical education guidance and
            lead-generation information for students exploring MBBS abroad. It
            should not be treated as legal, immigration, medical, or regulatory
            advice.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">
              Legal Framework
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
            <div id="regulatory" className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                No regulatory endorsement
              </h2>
              <p className="text-base text-slate-600">
                References to MBBS abroad, medical universities, eligibility
                guidance, recognition, or study pathways are informational. They
                should not be interpreted as a claim that any foreign university
                is endorsed by the National Medical Commission or any other
                authority unless expressly confirmed by that authority.
              </p>
            </div>
            <div
              id="guarantee"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                No admission or visa guarantee
              </h2>
              <p className="text-base text-slate-600">
                Indo Global Education does not guarantee admissions,
                scholarships, visas, licensing outcomes, or future professional
                eligibility in India or any other country.
              </p>
            </div>
            <div
              id="verification"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Independent verification required
              </h2>
              <p className="mb-4">
                Users must independently confirm critical milestones directly
                with the relevant university, embassy, or official authority
                before committing funds or making travel decisions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Financial Logistics',
                    desc: 'Tuition structures, living expenses, hidden overheads, and currency fluctuations.',
                  },
                  {
                    title: 'Academic Metrics',
                    desc: 'Curriculum blueprints, language of instruction, and required internship hours.',
                  },
                  {
                    title: 'Regulatory Compliance',
                    desc: 'Licensing requirements, local ministry declarations, and eligibility benchmarks.',
                  },
                  {
                    title: 'Embassy Directives',
                    desc: 'Visa application windows, dynamic immigration documentation, and travel mandates.',
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
              </ul>
            </div>
            <div
              id="external-content"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                External content and policy changes
              </h2>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <p className="text-sm text-slate-600">
                  Universities, ministries, embassies, and regulators may change
                  rules, documents, fee structures, or deadlines without notice.
                  We are not responsible for architectural modifications made by
                  third parties after informational content is published.
                </p>
              </div>
            </div>
            <div
              id="platforms"
              className="scroll-mt-40 border-t border-slate-100 pt-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Advertising and communication platforms
              </h2>
              <p className="mb-4">
                Future use of Meta ads, Google ads, WhatsApp, or other
                third-party tools may support outreach, measurement, and
                communications. Those services remain subject to their own
                policies, technologies, and availability.
              </p>
            </div>
            <div className="border-t-2 border-dashed border-slate-100 pt-8 bg-slate-50/50 -mx-6 md:-mx-10 px-6 md:px-10 pb-2 rounded-b-2xl">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Legal Assistance
              </h2>
              <p className="text-sm text-slate-550 mb-4">
                Have specific concerns regarding regulatory transparency,
                advisory limitations, or structural parameters? Reach our
                monitoring team directly:
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

export default Disclaimer;
