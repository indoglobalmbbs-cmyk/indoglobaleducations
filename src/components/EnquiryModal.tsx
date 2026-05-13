import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useMutation } from 'convex/react';
import { FaTimes, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import { api } from '../../convex/_generated/api';
import {
  getCurrentPagePath,
  getSubmissionErrorMessage,
  initialEnquiryForm,
  validateDetailedEnquiryForm,
  type EnquiryFormData,
} from '../lib/enquiry';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [form, setForm] = useState<EnquiryFormData>(initialEnquiryForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );
  const [error, setError] = useState<string | null>(null);
  const submitContact = useMutation(api.indoglobal.submitContact);

  if (!isOpen) return null;

  const updateField =
    (field: keyof EnquiryFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setError(null);
      if (status === 'success') setStatus('idle');
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateDetailedEnquiryForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      await submitContact({
        ...form,
        source: 'modal',
        pagePath: getCurrentPagePath(),
      });
      setForm(initialEnquiryForm);
      setStatus('success');
    } catch (submissionError) {
      setError(getSubmissionErrorMessage(submissionError));
      setStatus('idle');
    }
  };

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
        <form className="p-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-primary">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.fullName}
                onChange={updateField('fullName')}
                required
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
                value={form.phone}
                onChange={updateField('phone')}
                required
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
              value={form.email}
              onChange={updateField('email')}
              required
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
                                    value={form.countryPreference}
                                    onChange={updateField('countryPreference')}
                                    required
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
                                    value={form.course}
                                    onChange={updateField('course')}
                                    required
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
                value={form.country}
                onChange={updateField('country')}
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
                value={form.state}
                onChange={updateField('state')}
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
              value={form.message}
              onChange={updateField('message')}
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          {error ? (
            <p className="text-sm font-medium text-red-600">{error}</p>
          ) : null}
          {status === 'success' ? (
            <p className="text-sm font-medium text-green-700">
              Enquiry submitted. Our team will contact you shortly.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent text-white font-bold py-3 rounded-md shadow-lg shadow-accent/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <FaPaperPlane size={14} />
            {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
