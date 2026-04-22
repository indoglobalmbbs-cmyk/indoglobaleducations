import React from 'react';

interface MythCardProps {
  myth: string;
  reality: string;
  icon: React.ElementType;
}

const MythCard = ({ myth, reality, icon: Icon }: MythCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-error/10 text-error flex items-center justify-center group-hover:bg-error group-hover:text-white transition-all duration-500">
          <Icon size={28} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-error font-bold text-xs uppercase tracking-tighter">
              Myth:
            </span>
            <h3 className="text-xl font-bold text-text">{myth}</h3>
          </div>
          <div className="relative pl-4 border-l-2 border-success/30">
            <span className="text-success font-bold text-xs uppercase tracking-tighter block mb-1">
              The Reality:
            </span>
            <p className="text-text-muted text-sm leading-relaxed">{reality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythCard;
