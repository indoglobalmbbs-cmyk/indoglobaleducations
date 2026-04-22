import React from 'react';

interface ContactReasonProps {
  icon: React.ComponentType;
  title: string;
  desc: string;
  step: string | number;
}

const ContactReason = ({
  icon: Icon,
  title,
  desc,
  step,
}: ContactReasonProps) => {
  return (
    <div className="group relative flex gap-6 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-primary/10">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon />
        <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-surface flex items-center justify-center text-xs font-bold">
          {step}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-muted leading-relaxed text-sm md:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ContactReason;
