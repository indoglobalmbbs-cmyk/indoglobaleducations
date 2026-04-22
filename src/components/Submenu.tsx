import { Link } from 'react-router-dom';

interface SubmenuItem {
  label: string;
  path: string;
}

interface SubmenuProps {
  items: SubmenuItem[];
  isOpen: boolean;
  onItemClick?: () => void;
  className?: string;
}

const Submenu = ({
  items,
  isOpen,
  onItemClick,
  className = '',
}: SubmenuProps) => {
  return (
    <ul
      className={`md:absolute left-full top-0 mt-0 w-max bg-primary-light text-primary 
      rounded-lg shadow-lg transition-all duration-200 max-h-[35vh] overflow-y-auto custom-scrollbar
      ${
        isOpen
          ? 'block opacity-100'
          : 'hidden md:block md:opacity-0 md:invisible'
      } ${className}`}
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            onClick={onItemClick}
            className={`relative block px-4 py-2 transition-colors
              hover:bg-primary hover:text-accent
              ${index === 0 ? 'rounded-t-lg' : ''}
              ${index === items.length - 1 ? 'rounded-b-lg' : ''}
              group/item`}
          >
            <span className="relative z-10">{item.label}</span>
            <span className="absolute left-4 bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
