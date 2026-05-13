import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import {
  getCurrentPagePath,
  getSubmissionErrorMessage,
  initialEnquiryForm,
  validateEnquiryForm,
  type EnquiryFormData,
} from '../lib/enquiry';

interface CompactEnquiryFormProps {
  source: string;
}

const CompactEnquiryForm = ({ source }: CompactEnquiryFormProps) => {
  const [form, setForm] = useState<EnquiryFormData>(initialEnquiryForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );
  const [error, setError] = useState<string | null>(null);
  const submitContact = useMutation(api.indoglobal.submitContact);

  const updateField =
    (field: keyof EnquiryFormData) =>
    (event: ChangeEvent<HTMLInputElement>) => {
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
      await submitContact({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        source,
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
    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
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
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
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
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
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
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
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
