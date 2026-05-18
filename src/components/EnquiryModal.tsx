import { useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { FaTimes, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
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
      const { error: supabaseError } = await supabase.from('indoglobal').insert([
        {
          fullname: form.fullName.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim().replace(/[^\d+]/g, ''),
          address: form.address.trim(),
          course: form.course,
          collegename: form.collegeName.trim(),
          howheard: form.howHeard,
          preferences: form.preferences.trim(),
          source: 'modal',
          pagepath: getCurrentPagePath() || '/',
          status: 'new',
        },
      ]);

      if (supabaseError) throw supabaseError;

      setForm(initialEnquiryForm);
      setStatus('success');
    } catch (submissionError) {
      console.error('Submission error:', submissionError);
      setError(getSubmissionErrorMessage(submissionError));
      setStatus('idle');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
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
        <form className="p-4 space-y-4 max-h-[80vh] overflow-y-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.fullName}
            onChange={updateField('fullName')}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="email"
            value={form.email}
            onChange={updateField('email')}
            required
            placeholder="Enter your email Id"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="tel"
            value={form.phone}
            onChange={updateField('phone')}
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="text"
            value={form.address}
            onChange={updateField('address')}
            required
            placeholder="Enter your Address"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
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
          <input
            type="text"
            value={form.collegeName}
            onChange={updateField('collegeName')}
            required
            placeholder="Enter your College Name"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <div className="relative">
            <select
              value={form.howHeard}
              onChange={updateField('howHeard')}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                How did you hear about us?
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Youtube">Youtube</option>
              <option value="Friends & Family">Friends & Family</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <FaChevronDown className="text-gray-400 text-sm" />
            </div>
          </div>
          <input
            type="text"
            required
            placeholder="Enter your MBBS Country preference, College, Budget, Facility..."
            value={form.preferences}
            onChange={updateField('preferences')}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
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
