import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import ScrollToTop from '../components/ScrollToTop';
import EnquiryModal from '../components/EnquiryModal';
import WhatsAppWidget from '../components/WhatsAppWidget';

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openEnquiry = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <button
        onClick={openEnquiry}
        className="fixed right-0 top-1/2 z-[90] bg-accent text-white px-3 py-2 rounded-l-2xl shadow-2xl flex flex-col items-center gap-4 group transition-all duration-300"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="font-bold tracking-widest text-md">ENQUIRE NOW</span>
      </button>
      <main className="flex-grow">
        <Outlet context={{ openEnquiry }} />
      </main>
      <Footer />
      <WhatsAppWidget />
      <ScrollToTop />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MainLayout;
