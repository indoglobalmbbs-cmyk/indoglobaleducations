import { FaTimes, FaPaperPlane, FaChevronDown } from 'react-icons/fa';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Enquire Now</h3>
            <p className="text-blue-100 text-sm">
              Get a free counseling session today
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-primary">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-primary">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-primary">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email Id"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            />
          </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-primary mb-1">
                                  Country Preference
                                </label>
                                <div className="relative">
                                  <select
                                    defaultValue=""
                                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                  >
                                    <option value="" disabled>
                                      Select Country
                                    </option>
                                    <option value="russia">Russia</option>
                                    <option value="armenia">Armenia</option>
                                    <option value="georgia">Georgia</option>
                                  </select>
                                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-primary mb-1">
                                  Select Course
                                </label>
                                <div className="relative">
                                  <select
                                    defaultValue=""
                                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                  >
                                    <option value="" disabled>
                                      Select Course
                                    </option>
                                    <option value="mbbs">MBBS</option>
                                    <option value="ms">MS</option>
                                    <option value="bds">BDS</option>
                                    <option value="mds">MDS</option>
                                    <option value="md-ms">MD-MS</option>
                                  </select>
                                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                  </div>
                                </div>
                              </div>
                            </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-primary">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter your Country"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-primary">
                State
              </label>
              <input
                type="text"
                placeholder="Enter your State"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-primary">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="How can we help you?"
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 rounded-md shadow-lg shadow-accent/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <FaPaperPlane size={14} /> Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
