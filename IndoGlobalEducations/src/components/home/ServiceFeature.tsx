import { FaCheckCircle } from 'react-icons/fa';

interface ServiceFeatureProps {
  title: string;
  desc: string;
}
const ServiceFeature = ({ title, desc }: ServiceFeatureProps) => {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success mt-1 group-hover:bg-success group-hover:text-white transition-all">
        <FaCheckCircle size={14} />
      </div>
      <div>
        <h4 className="font-bold text-text text-lg mb-1">{title}</h4>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceFeature;
