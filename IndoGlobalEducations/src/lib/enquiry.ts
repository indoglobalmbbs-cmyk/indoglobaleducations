export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  countryPreference?: string;
  course?: string;
  country: string;
  state: string;
  message: string;
}

export const initialEnquiryForm: EnquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  countryPreference: "",
  course: "",
  country: "",
  state: "",
  message: "",
};

export const validateEnquiryForm = (form: EnquiryFormData) => {
  if (form.fullName.trim().length < 2) return "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return "Please enter a valid email address.";
  }
  if (form.phone.replace(/\D/g, "").length < 7) {
    return "Please enter a valid phone number.";
  }
  return null;
};

export const validateDetailedEnquiryForm = (form: EnquiryFormData) => {
  const baseError = validateEnquiryForm(form);
  if (baseError) return baseError;
  if (!form.countryPreference) return "Please select a country preference.";
  if (!form.course) return "Please select a course.";
  return null;
};

export const getCurrentPagePath = () =>
  typeof window === "undefined" ? "/" : window.location.pathname;

export const getSubmissionErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) return error.message;
  return "Unable to submit your enquiry. Please try again.";
};
