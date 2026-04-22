import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  value: string | number;
  label: string;
  subtext: string;
}

const StatCard = ({ icon: Icon, value, label, subtext }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 text-center group">
      <div className="mb-4 p-4 rounded-2xl bg-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
        <Icon size={35} />
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">
        {value}
      </h3>
      <p className="text-primary-light font-semibold uppercase tracking-wider text-sm mb-2">
        {label}
      </p>
      <p className="text-white/60 text-xs italic">{subtext}</p>
    </div>
  );
};

export default StatCard;
