import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
  href?: string;
}

const ContactCard = ({
  icon,
  title,
  detail,
  subDetail,
  href,
}: ContactCardProps) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-primary/5 hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md group">
      <div className="p-3 bg-primary-light rounded-xl text-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-primary text-lg leading-tight mb-1">
          {title}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text font-semibold text-base hover:text-accent transition-colors"
          >
            {detail}
          </a>
        ) : (
          <p className="text-text font-semibold text-base">{detail}</p>
        )}
        <p className="text-text-muted text-sm mt-0.5">{subDetail}</p>
      </div>
    </div>
  );
};

export default ContactCard;
