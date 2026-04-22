import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

const TestimonialCard = ({ name, location, text }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 flex flex-col h-full hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-1 text-accent mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={16} />
        ))}
      </div>
      <p className="text-text-muted italic leading-relaxed mb-6 flex-grow">
        "{text}"
      </p>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-text">{name}</h4>
          <p className="text-sm text-primary font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
