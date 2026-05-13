import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { faqData, type FAQItem } from '../../components/FaqData';

const Faqs = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <section className="bg-primary py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-accent rounded-full text-sm font-bold uppercase mb-6">
            Help Center
          </div>
          <div className="text-3xl font-bold text-white mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about pursuing your medical dream
            abroad. Can't find what you're looking for? Our experts are just a
            call away.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq: FAQItem, index: number) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className="group border border-primary/10 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                        <Icon size={24} />
                      </span>
                      <span
                        className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-text'}`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <FaChevronDown
                      className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 ml-14 text-text-muted leading-relaxed border-t border-gray-50 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary-light">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/10 max-w-3xl mx-auto">
            <div className="text-2xl font-bold text-text mb-4">
              Still have questions?
            </div>
            <p className="text-text-muted mb-8">
              Our expert counselors are available 24/7 to help you navigate the
              2026 admission cycle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-lg"
              >
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary-light transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
