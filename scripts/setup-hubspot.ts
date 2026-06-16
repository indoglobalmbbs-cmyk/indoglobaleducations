import { Client } from '@hubspot/api-client';
import {
  PropertyCreateFieldTypeEnum,
  PropertyCreateTypeEnum,
} from '@hubspot/api-client/lib/codegen/crm/properties/models/PropertyCreate';
import { loadEnvFile } from 'node:process';
import { HUBSPOT_PROPERTIES } from '../api/lib/hubspot';

try {
  loadEnvFile();
} catch {
  // Environment variables may be supplied by the shell or deployment platform.
}

const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
if (!accessToken) {
  throw new Error('Set HUBSPOT_ACCESS_TOKEN before running HubSpot setup.');
}

const client = new Client({ accessToken });
const countries = ['Russia', 'Armenia', 'Georgia', 'India', 'Undecided'];
const courses = ['MBBS', 'MS', 'BDS', 'MDS', 'MD-MS'];
const intakeYears = ['2026', '2027', '2028', 'Undecided'];
const budgetRanges = [
  'Under 15 lakh',
  '15-25 lakh',
  '25-35 lakh',
  '35-50 lakh',
  'Above 50 lakh',
  'Undecided',
];
const leadTemperatures = ['Hot', 'Warm', 'Cold', 'Nurture'];
const lossReasons = [
  'Unreachable',
  'Not eligible',
  'Budget mismatch',
  'Chose competitor',
  'Postponed intake',
  'Country changed',
  'Parent declined',
  'Duplicate/invalid',
  'Other',
];
const stages = [
  ['New Lead', '0.05'],
  ['Attempting Contact', '0.10'],
  ['Contacted', '0.15'],
  ['Counseling Scheduled', '0.25'],
  ['Counseling Completed', '0.35'],
  ['Qualified', '0.45'],
  ['Documents Pending', '0.55'],
  ['Application Submitted', '0.65'],
  ['Offer Received', '0.75'],
  ['Fee/Deposit Paid', '0.85'],
  ['Visa Process', '0.90'],
  ['Enrolled', '1.00'],
  ['Lost', '0.00'],
] as const;

type PropertyDefinition = {
  objectType: 'contacts' | 'deals';
  name: string;
  label: string;
  fieldType?: 'text' | 'textarea' | 'select' | 'number' | 'date';
  options?: string[];
  unique?: boolean;
};

const definitions: PropertyDefinition[] = [
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.enquiryId,
    label: 'Indo Global Last Enquiry ID',
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.course,
    label: 'Indo Global Course',
    fieldType: 'select',
    options: courses,
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.preferredCountry,
    label: 'Indo Global Preferred Country',
    fieldType: 'select',
    options: countries,
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.referralSource,
    label: 'Indo Global Referral Source',
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.intakeYear,
    label: 'Indo Global Intake Year',
    fieldType: 'select',
    options: intakeYears,
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.neetStatus,
    label: 'Indo Global NEET Status',
    fieldType: 'select',
    options: ['Qualified', 'Appearing', 'Not qualified', 'Not applicable'],
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.neetScore,
    label: 'Indo Global NEET Score',
    fieldType: 'number',
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.pcbPercentage,
    label: 'Indo Global PCB Percentage',
    fieldType: 'number',
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.budgetRange,
    label: 'Indo Global Budget Range',
    fieldType: 'select',
    options: budgetRanges,
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.passportStatus,
    label: 'Indo Global Passport Status',
    fieldType: 'select',
    options: ['Available', 'Applied', 'Not applied', 'Not required yet'],
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.parentReadiness,
    label: 'Indo Global Parent Readiness',
    fieldType: 'select',
    options: ['Supportive', 'Needs counseling', 'Not supportive', 'Unknown'],
  },
  {
    objectType: 'contacts',
    name: HUBSPOT_PROPERTIES.contact.leadTemperature,
    label: 'Indo Global Lead Temperature',
    fieldType: 'select',
    options: leadTemperatures,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.enquiryId,
    label: 'Indo Global Enquiry ID',
    unique: true,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.course,
    label: 'Indo Global Course',
    fieldType: 'select',
    options: courses,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.preferredCountry,
    label: 'Indo Global Preferred Country',
    fieldType: 'select',
    options: countries,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.collegeName,
    label: 'Indo Global College Name',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.referralSource,
    label: 'Indo Global Referral Source',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.preferences,
    label: 'Indo Global Preferences',
    fieldType: 'textarea',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.formSource,
    label: 'Indo Global Form Source',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.pagePath,
    label: 'Indo Global Page Path',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.intakeYear,
    label: 'Indo Global Intake Year',
    fieldType: 'select',
    options: intakeYears,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.budgetRange,
    label: 'Indo Global Budget Range',
    fieldType: 'select',
    options: budgetRanges,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.passportStatus,
    label: 'Indo Global Passport Status',
    fieldType: 'select',
    options: ['Available', 'Applied', 'Not applied', 'Not required yet'],
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.parentReadiness,
    label: 'Indo Global Parent Readiness',
    fieldType: 'select',
    options: ['Supportive', 'Needs counseling', 'Not supportive', 'Unknown'],
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.nextFollowUpDate,
    label: 'Indo Global Next Follow-up Date',
    fieldType: 'date',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.leadTemperature,
    label: 'Indo Global Lead Temperature',
    fieldType: 'select',
    options: leadTemperatures,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.counselorNotes,
    label: 'Indo Global Counselor Notes',
    fieldType: 'textarea',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.applicationDetails,
    label: 'Indo Global Application Details',
    fieldType: 'textarea',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.universityDetails,
    label: 'Indo Global University Details',
    fieldType: 'textarea',
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.paymentStatus,
    label: 'Indo Global Payment Status',
    fieldType: 'select',
    options: ['Not discussed', 'Quoted', 'Part paid', 'Paid', 'Refunded'],
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.visaStatus,
    label: 'Indo Global Visa Status',
    fieldType: 'select',
    options: [
      'Not started',
      'Documents pending',
      'Applied',
      'Approved',
      'Rejected',
      'Not applicable',
    ],
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.lossReason,
    label: 'Indo Global Loss Reason',
    fieldType: 'select',
    options: lossReasons,
  },
  {
    objectType: 'deals',
    name: HUBSPOT_PROPERTIES.deal.setupVersion,
    label: 'Indo Global CRM Setup Version',
  },
];

const ensureProperty = async (definition: PropertyDefinition) => {
  const options = definition.options?.map((value, displayOrder) => ({
    label: value,
    value,
    displayOrder,
    hidden: false,
  }));
  try {
    await client.crm.properties.coreApi.getByName(
      definition.objectType,
      definition.name,
    );
    await client.crm.properties.coreApi.update(
      definition.objectType,
      definition.name,
      {
        label: definition.label,
        options,
      },
    );
    console.log(`Property updated: ${definition.objectType}.${definition.name}`);
    return;
  } catch (error) {
    const code =
      typeof error === 'object' && error && 'code' in error ? error.code : null;
    if (code !== 404) throw error;
  }

  const fieldType = definition.fieldType || 'text';
  const type =
    fieldType === 'select'
      ? PropertyCreateTypeEnum.Enumeration
      : fieldType === 'number'
        ? PropertyCreateTypeEnum.Number
        : fieldType === 'date'
          ? PropertyCreateTypeEnum.Date
          : PropertyCreateTypeEnum.String;
  await client.crm.properties.coreApi.create(definition.objectType, {
    name: definition.name,
    label: definition.label,
    groupName:
      definition.objectType === 'contacts'
        ? 'contactinformation'
        : 'dealinformation',
    type,
    fieldType:
      fieldType === 'select'
        ? PropertyCreateFieldTypeEnum.Select
        : fieldType === 'number'
          ? PropertyCreateFieldTypeEnum.Number
          : fieldType === 'date'
            ? PropertyCreateFieldTypeEnum.Date
            : fieldType === 'textarea'
              ? PropertyCreateFieldTypeEnum.Textarea
              : PropertyCreateFieldTypeEnum.Text,
    formField: false,
    hasUniqueValue: definition.unique,
    options,
  });
  console.log(`Created property: ${definition.objectType}.${definition.name}`);
};

try {
  for (const definition of definitions) {
    await ensureProperty(definition);
  }
} catch (error) {
  const code =
    typeof error === 'object' && error && 'code' in error ? error.code : null;
  if (code === 401) {
    throw new Error(
      'HubSpot rejected HUBSPOT_ACCESS_TOKEN. Install the Indo Global Enquiry Sync app and use its static/private-app access token.',
    );
  }
  throw error;
}

const pipelines = await client.crm.pipelines.pipelinesApi.getAll('deals');
let pipeline = pipelines.results.find(
  (item) =>
    item.label.toLowerCase() === 'indo global admissions' ||
    item.label.toLowerCase() === 'admissions',
);

if (!pipeline) {
  try {
    pipeline = await client.crm.pipelines.pipelinesApi.create('deals', {
      label: 'Indo Global Admissions',
      displayOrder: pipelines.results.length,
      stages: stages.map(([label, probability], displayOrder) => ({
        label,
        displayOrder,
        metadata: { probability },
      })),
    });
    console.log('Created Admissions pipeline.');
  } catch (error) {
    pipeline = pipelines.results[0];
    if (!pipeline) throw error;
    console.warn(
      `Could not create another pipeline; configuring "${pipeline.label}" for admissions.`,
    );
    pipeline = await client.crm.pipelines.pipelinesApi.update(
      'deals',
      pipeline.id,
      { label: 'Indo Global Admissions' },
    );
  }
}

const existingStageLabels = new Set(
  pipeline.stages.map((stage) => stage.label.toLowerCase()),
);
let nextDisplayOrder = pipeline.stages.length;
for (const [label, probability] of stages) {
  if (existingStageLabels.has(label.toLowerCase())) continue;
  await client.crm.pipelines.pipelineStagesApi.create('deals', pipeline.id, {
    label,
    displayOrder: nextDisplayOrder,
    metadata: { probability },
  });
  nextDisplayOrder += 1;
  console.log(`Created pipeline stage: ${label}`);
}

pipeline = await client.crm.pipelines.pipelinesApi.getById('deals', pipeline.id);
const newLead = pipeline.stages.find(
  (stage) => stage.label.toLowerCase() === 'new lead',
);
if (!newLead) throw new Error('The New Lead stage could not be configured.');

console.log('\nAdd these server-only values to .env and Vercel:');
console.log(`HUBSPOT_PIPELINE_ID=${pipeline.id}`);
console.log(`HUBSPOT_NEW_LEAD_STAGE_ID=${newLead.id}`);
console.log(`HUBSPOT_OWNER_ID=${process.env.HUBSPOT_OWNER_ID || '93911131'}`);
console.log('HUBSPOT_DEAL_CURRENCY=INR');
