import { useState } from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            isOpen ? 'text-primary' : 'text-text group-hover:text-primary'
          }`}
        >
          {question}
        </span>
        <div
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-primary border-primary text-white rotate-180'
              : 'border-primary/20 text-primary rotate-0'
          }`}
        >
          <FaCircleChevronRight size={14} className="rotate-90" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-text-muted leading-relaxed pl-2 border-l-4 border-accent/30">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
