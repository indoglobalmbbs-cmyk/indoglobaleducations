import { FaCircleChevronRight } from 'react-icons/fa6';

interface BlogCardProps {
  title: string;
  date: string;
  desc: string;
}

const BlogCard = ({ title, date, desc }: BlogCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-accent"></span>
          {date}
        </div>
        <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Read Full Article <FaCircleChevronRight className="text-accent" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
