import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const FaqItem = ({
  question,
  answer,
  defaultOpen = false,
  className = '',
  icon,
}: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-accent">{icon}</span>}

          <span className="font-bold text-primary">{question}</span>
        </div>
        <span
          className={`text-accent transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
