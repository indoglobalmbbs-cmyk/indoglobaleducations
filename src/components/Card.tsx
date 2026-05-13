import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Card = ({ icon, title, desc }: CardProps) => {
  return (
    <div className="rounded-xl bg-surface p-8 shadow-md transition-shadow hover:shadow-xl">
      <div className="mb-4 flex justify-center text-primary text-4xl">
        {icon}
      </div>
      <h1 className="mb-2 text-xl font-bold text-primary text-center">
        {title}
      </h1>
      <p className="text-text-muted text-center">{desc}</p>
    </div>
  );
};

export default Card;
