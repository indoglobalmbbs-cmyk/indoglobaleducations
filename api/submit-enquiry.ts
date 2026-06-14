import { createClient } from '@supabase/supabase-js';
import WebSocket from 'ws';
import {
  rollbackHubSpotSync,
  syncEnquiryToHubSpot,
  type HubSpotSyncResult,
} from './lib/hubspot';

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  course: string;
  preferredCountry: string;
  collegeName: string;
  howHeard: string;
  preferences: string;
}

interface SubmitEnquiryBody {
  form?: Partial<EnquiryFormData>;
  recaptchaToken?: string;
  formSource?: string;
  pagePath?: string;
}

interface VercelRequest {
  method?: string;
  body?: SubmitEnquiryBody | string;
}

interface VercelResponse {
  status: (statusCode: number) => VercelResponse;
  json: (body: { ok?: boolean; error?: string }) => void;
  setHeader: (name: string, value: string) => void;
}

const DUPLICATE_MESSAGE =
  'An enquiry with this email or phone number has already been submitted.';
const SUBMISSION_ERROR = 'Unable to submit your enquiry. Please try again.';
const ALLOWED_COUNTRIES = new Set([
  'Russia',
  'Armenia',
  'Georgia',
  'India',
  'Undecided',
]);

type RecaptchaResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

const normalizePhone = (phone: string) => phone.trim().replace(/[^\d+]/g, '');

const validateEnquiryForm = (form: Partial<EnquiryFormData> | undefined) => {
  if (!form) return 'Missing enquiry details.';
  if (!form.fullName || form.fullName.trim().length < 2) {
    return 'Please enter your full name.';
  }
  if (
    !form.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  ) {
    return 'Please enter a valid email address.';
  }
  if (!form.phone || form.phone.replace(/\D/g, '').length < 7) {
    return 'Please enter a valid phone number.';
  }
  if (!form.address || form.address.trim().length < 5) {
    return 'Please enter your full address.';
  }
  if (!form.course) return 'Please select a course.';
  if (!form.preferredCountry || !ALLOWED_COUNTRIES.has(form.preferredCountry)) {
    return 'Please select a preferred country.';
  }
  if (!form.collegeName || form.collegeName.trim().length < 2) {
    return 'Please enter your college name.';
  }
  if (!form.howHeard) return 'Please tell us how you heard about us.';
  if (!form.preferences || form.preferences.trim().length < 5) {
    return 'Please enter your preferences (e.g., country, budget).';
  }
  return null;
};

const parseBody = (body: VercelRequest['body']): SubmitEnquiryBody => {
  if (typeof body === 'string') return JSON.parse(body) as SubmitEnquiryBody;
  return body || {};
};

const verifyRecaptcha = async (token: string): Promise<RecaptchaResult> => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return {
      ok: false,
      status: 400,
      error: 'reCAPTCHA is not configured. Please try again later.',
    };
  }

  const params = new URLSearchParams({
    secret: secretKey,
    response: token,
  });
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    },
  );
  const result = (await response.json()) as { success?: boolean };

  return result.success
    ? { ok: true }
    : {
        ok: false,
        status: 403,
        error: 'reCAPTCHA verification failed. Please try again.',
      };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Allow', 'POST');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  let enquiryId: string | undefined;
  let hubspotResult: HubSpotSyncResult | undefined;

  try {
    const { form, recaptchaToken, formSource, pagePath } = parseBody(req.body);
    const validationError = validateEnquiryForm(form);
    if (validationError) {
      res.status(400).json({ error: validationError });
      return;
    }
    const validForm = form as EnquiryFormData;

    if (!recaptchaToken) {
      res.status(400).json({ error: 'Please confirm that you are not a robot.' });
      return;
    }
    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.ok) {
      res.status(recaptcha.status).json({ error: recaptcha.error });
      return;
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      res.status(500).json({ error: 'Enquiry submission is not configured.' });
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      realtime: { transport: WebSocket as never },
    });
    const email = validForm.email.trim().toLowerCase();
    const phone = normalizePhone(validForm.phone);
    const source = (formSource || 'website').slice(0, 80);
    const path = (pagePath || '/').slice(0, 500);

    const { data: duplicate, error: duplicateError } = await supabase
      .from('indoglobal')
      .select('id')
      .or(`email.eq.${email},phone.eq.${phone}`)
      .maybeSingle();
    if (duplicateError) throw duplicateError;
    if (duplicate) {
      res.status(409).json({ error: DUPLICATE_MESSAGE });
      return;
    }

    const { data: pending, error: insertError } = await supabase
      .from('indoglobal')
      .insert({
        fullname: validForm.fullName.trim(),
        email,
        phone,
        address: validForm.address.trim(),
        course: validForm.course,
        preferredcountry: validForm.preferredCountry,
        collegename: validForm.collegeName.trim(),
        howheard: validForm.howHeard,
        preferences: validForm.preferences.trim(),
        source,
        pagepath: path,
        status: 'new',
        hubspot_sync_status: 'pending',
      })
      .select('id')
      .single();

    if (insertError) {
      if (insertError.code === '23505') {
        res.status(409).json({ error: DUPLICATE_MESSAGE });
        return;
      }
      throw insertError;
    }
    if (!pending?.id) throw new Error('Supabase did not return an enquiry ID.');
    const createdEnquiryId: string = pending.id;
    enquiryId = createdEnquiryId;

    hubspotResult = await syncEnquiryToHubSpot({
      id: createdEnquiryId,
      fullName: validForm.fullName.trim(),
      email,
      phone,
      address: validForm.address.trim(),
      course: validForm.course,
      preferredCountry: validForm.preferredCountry,
      collegeName: validForm.collegeName.trim(),
      howHeard: validForm.howHeard,
      preferences: validForm.preferences.trim(),
      formSource: source,
      pagePath: path,
    });

    const { error: syncUpdateError } = await supabase
      .from('indoglobal')
      .update({
        hubspot_contact_id: hubspotResult.contactId,
        hubspot_deal_id: hubspotResult.dealId,
        hubspot_sync_status: 'synced',
        hubspot_sync_error: null,
      })
      .eq('id', enquiryId);
    if (syncUpdateError) throw syncUpdateError;

    const webhookUrl = process.env.WEBHOOK_URL || process.env.VITE_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validForm),
      }).catch((error) => console.error('Webhook error:', error));
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Submission error:', error);

    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (hubspotResult) {
      await rollbackHubSpotSync(hubspotResult).catch(console.error);
    }
    if (enquiryId && supabaseUrl && serviceRoleKey) {
      const supabase = createClient(supabaseUrl, serviceRoleKey, {
        realtime: { transport: WebSocket as never },
      });
      await supabase.from('indoglobal').delete().eq('id', enquiryId);
    }

    res.status(500).json({ error: SUBMISSION_ERROR });
  }
}
