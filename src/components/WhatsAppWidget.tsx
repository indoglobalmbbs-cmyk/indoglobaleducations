import { FaWhatsapp } from 'react-icons/fa';

const isTestSpriteE2E = import.meta.env.VITE_TESTSPRITE_E2E === 'true';

const WhatsAppWidget = () => {
  const phoneNumber = '91709000502';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={isTestSpriteE2E ? (event) => event.preventDefault() : undefined}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-90 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <FaWhatsapp size={28} />
        <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all origin-right bg-gray-800 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;
