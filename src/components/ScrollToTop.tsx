import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-surface shadow-2xl group transition-transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="transparent"
            className="text-primary-light"
          />
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={138.23}
            strokeDashoffset={138.23 - (progress / 100) * 138.23}
            strokeLinecap="round"
            className="text-accent group-hover:text-primary transition-all duration-150 ease-out"
          />
        </svg>
        <FaArrowUp
          className="text-accent group-hover:text-primary transition-colors duration-300 z-10"
          size={18}
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
