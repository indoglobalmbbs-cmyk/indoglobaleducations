import { supabase } from "./supabase";

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  course: string;
  collegeName: string;
  howHeard: string;
  preferences: string;
}

export const initialEnquiryForm: EnquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  course: "",
  collegeName: "",
  howHeard: "",
  preferences: "",
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
  return null;
};

export const checkDuplicateEnquiry = async (email: string, phone: string) => {
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedPhone = phone.trim().replace(/[^\d+]/g, "");

  try {
    const { data, error } = await supabase
      .from("indoglobal")
      .select("id")
      .or(`email.eq.${sanitizedEmail},phone.eq.${sanitizedPhone}`)
      .maybeSingle();

    if (error) throw error;
    return !!data;
  } catch (error) {
    console.error("Error checking duplicate enquiry:", error);
    return false;
  }
};

export const getCurrentPagePath = () =>
  typeof window === "undefined" ? "/" : window.location.pathname;

export const getSubmissionErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message) return error.message;
  return "Unable to submit your enquiry. Please try again.";
};
