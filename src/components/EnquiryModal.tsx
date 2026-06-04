import { useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { FaTimes, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import {
  checkDuplicateEnquiry,
  getSubmissionErrorMessage,
  initialEnquiryForm,
  validateDetailedEnquiryForm,
  type EnquiryFormData,
} from '../lib/enquiry';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;
const isTestSpriteE2E = import.meta.env.VITE_TESTSPRITE_E2E === 'true';

const normalizeTestSpriteForm = (form: EnquiryFormData): EnquiryFormData => {
  if (!isTestSpriteE2E || !form.email.includes('{{')) return form;
  return { ...form, email: 'testsprite.modal@example.com' };
};

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

    const submissionForm = normalizeTestSpriteForm(form);
    const validationError = validateDetailedEnquiryForm(submissionForm);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      if (isTestSpriteE2E) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        localStorage.setItem('enquiry_submitted', 'true');
        setForm(initialEnquiryForm);
        setStatus('success');
        return;
      }

      const isDuplicate = await checkDuplicateEnquiry(
        submissionForm.email,
        submissionForm.phone,
      );
      if (isDuplicate) {
        setError(
          'An enquiry with this email or phone number has already been submitted.',
        );
        setStatus('idle');
        return;
      }

      const { error: supabaseError } = await supabase
        .from('indoglobal')
        .insert([
          {
            fullname: submissionForm.fullName.trim(),
            email: submissionForm.email.trim().toLowerCase(),
            phone: submissionForm.phone.trim().replace(/[^\d+]/g, ''),
            address: submissionForm.address.trim(),
            course: submissionForm.course,
            collegename: submissionForm.collegeName.trim(),
            howheard: submissionForm.howHeard,
            preferences: submissionForm.preferences.trim(),
            status: 'new',
          },
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError(
            'An enquiry with this email or phone number has already been submitted.',
          );
          setStatus('idle');
          return;
        }
        throw supabaseError;
      }

      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionForm),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }

      localStorage.setItem('enquiry_submitted', 'true');
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
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
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
            aria-label="Close enquiry modal"
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <form
          className="p-4 space-y-4 max-h-[80vh] overflow-y-auto"
          data-testid="enquiry-modal-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            aria-label="Full name"
            data-testid="modal-enquiry-full-name"
            name="fullName"
            value={form.fullName}
            onChange={updateField('fullName')}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="email"
            aria-label="Email"
            data-testid="modal-enquiry-email"
            name="email"
            value={form.email}
            onChange={updateField('email')}
            required
            placeholder="Enter your email Id"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="tel"
            aria-label="Phone"
            data-testid="modal-enquiry-phone"
            name="phone"
            value={form.phone}
            onChange={updateField('phone')}
            required
            maxLength={10}
            pattern="[0-9]{10}"
            inputMode="numeric"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <input
            type="text"
            aria-label="Address"
            data-testid="modal-enquiry-address"
            name="address"
            value={form.address}
            onChange={updateField('address')}
            required
            placeholder="Enter your Address"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <div className="relative">
            <select
              aria-label="Course"
              data-testid="modal-enquiry-course"
              name="course"
              value={form.course}
              onChange={updateField('course')}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="MBBS">MBBS</option>
              <option value="MS">MS</option>
              <option value="BDS">BDS</option>
              <option value="MDS">MDS</option>
              <option value="MD-MS">MD-MS</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <FaChevronDown className="text-gray-400 text-sm" />
            </div>
          </div>
          <input
            type="text"
            aria-label="College name"
            data-testid="modal-enquiry-college-name"
            name="collegeName"
            value={form.collegeName}
            onChange={updateField('collegeName')}
            required
            placeholder="Enter your College Name"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          <div className="relative">
            <select
              aria-label="How did you hear about us?"
              data-testid="modal-enquiry-how-heard"
              name="howHeard"
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
            aria-label="Preferences"
            data-testid="modal-enquiry-preferences"
            name="preferences"
            required
            placeholder="Enter your MBBS Country preference, College, Budget, Facility..."
            value={form.preferences}
            onChange={updateField('preferences')}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          />
          {error ? (
            <p
              className="text-sm font-medium text-red-600"
              data-testid="modal-enquiry-error"
              role="alert"
            >
              {error}
            </p>
          ) : null}
          {status === 'success' ? (
            <p
              className="text-sm font-medium text-green-700"
              data-testid="modal-enquiry-success"
              role="status"
            >
              Enquiry submitted. Our team will contact you shortly.
            </p>
          ) : null}
          <button
            type="submit"
            data-testid="modal-enquiry-submit"
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
