import { useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import {
  checkDuplicateEnquiry,
  getSubmissionErrorMessage,
  initialEnquiryForm,
  validateEnquiryForm,
  type EnquiryFormData,
} from '../lib/enquiry';
import { FaChevronDown } from 'react-icons/fa';

const CompactEnquiryForm = () => {
  const [form, setForm] = useState<EnquiryFormData>(initialEnquiryForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );
  const [error, setError] = useState<string | null>(null);

  const updateField =
    (field: keyof EnquiryFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setError(null);
      if (status === 'success') setStatus('idle');
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateEnquiryForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      const isDuplicate = await checkDuplicateEnquiry(form.email, form.phone);
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
            fullname: form.fullName.trim(),
            email: form.email.trim().toLowerCase(),
            phone: form.phone.trim().replace(/[^\d+]/g, ''),
            address: form.address.trim(),
            course: form.course,
            collegename: form.collegeName.trim(),
            howheard: form.howHeard,
            preferences: form.preferences.trim(),
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

      setForm(initialEnquiryForm);
      setStatus('success');
    } catch (submissionError) {
      console.error('Submission error:', submissionError);
      setError(getSubmissionErrorMessage(submissionError));
      setStatus('idle');
    }
  };

  return (
    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={form.fullName}
        onChange={updateField('fullName')}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
      />
      <input
        type="email"
        placeholder="Enter your email Id"
        value={form.email}
        onChange={updateField('email')}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
      />
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={updateField('phone')}
        required
        maxLength={10}
        pattern="[0-9]{10}"
        inputMode="numeric"
        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
      />
      <input
        type="text"
        placeholder="Enter your Address"
        value={form.address}
        onChange={updateField('address')}
        required
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
        placeholder="Enter your College Name"
        value={form.collegeName}
        onChange={updateField('collegeName')}
        required
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
        className="w-full bg-accent text-white font-bold py-2 rounded-md shadow-lg shadow-accent/30 transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Submitting...' : 'Apply Now'}
      </button>
    </form>
  );
};

export default CompactEnquiryForm;
