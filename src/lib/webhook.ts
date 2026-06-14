import {
  initialEnquiryForm,
  type EnquiryFormData,
} from './enquiry';

export const defaultWebhookSample: EnquiryFormData = {
  ...initialEnquiryForm,
  fullName: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '9876543210',
  address: 'New Delhi, India',
  course: 'MBBS',
  preferredCountry: 'Russia',
  collegeName: 'Delhi Public School',
  howHeard: 'Instagram',
  preferences: 'Russia universities, budget around 5 lakh per year',
};

export const buildWebhookPayload = (form: EnquiryFormData) => ({
  fullName: form.fullName.trim(),
  email: form.email.trim().toLowerCase(),
  phone: form.phone.trim().replace(/[^\d+]/g, ''),
  address: form.address.trim(),
  course: form.course,
  preferredCountry: form.preferredCountry,
  collegeName: form.collegeName.trim(),
  howHeard: form.howHeard,
  preferences: form.preferences.trim(),
});

const shellQuote = (value: string) => `'${value.replaceAll("'", "'\\''")}'`;

export const generateWebhookCurl = (
  webhookUrl: string,
  form: EnquiryFormData,
) => {
  const payload = JSON.stringify(buildWebhookPayload(form), null, 2);

  return [
    `curl -X POST ${shellQuote(webhookUrl)}`,
    `  -H ${shellQuote('Content-Type: application/json')}`,
    `  -d ${shellQuote(payload)}`,
  ].join(' \\\n');
};

export const googleAppsScriptWebhookHandler = `function doGet() {
  return ContentService
    .createTextOutput('Indo Global webhook is active. Send enquiry data with POST.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var payload = JSON.parse(e.postData.contents || '{}');
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Enquiries');
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Address',
      'Course',
      'Preferred Country',
      'College Name',
      'How Heard',
      'Preferences'
    ]);
  }

  sheet.appendRow([
    new Date(),
    payload.fullName || '',
    payload.email || '',
    payload.phone || '',
    payload.address || '',
    payload.course || '',
    payload.preferredCountry || '',
    payload.collegeName || '',
    payload.howHeard || '',
    payload.preferences || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}`;
