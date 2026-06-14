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
const stages = [
  ['New Lead', '0.10'],
  ['Contacted', '0.20'],
  ['Counseling', '0.35'],
  ['Documents', '0.50'],
  ['Applied', '0.65'],
  ['Offer/Admission', '0.80'],
  ['Enrolled', '1.00'],
  ['Lost', '0.00'],
] as const;

type PropertyDefinition = {
  objectType: 'contacts' | 'deals';
  name: string;
  label: string;
  fieldType?: 'text' | 'textarea' | 'select';
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
];

const ensureProperty = async (definition: PropertyDefinition) => {
  try {
    await client.crm.properties.coreApi.getByName(
      definition.objectType,
      definition.name,
    );
    console.log(`Property exists: ${definition.objectType}.${definition.name}`);
    return;
  } catch {
    // Create missing properties below.
  }

  const fieldType = definition.fieldType || 'text';
  await client.crm.properties.coreApi.create(definition.objectType, {
    name: definition.name,
    label: definition.label,
    groupName:
      definition.objectType === 'contacts'
        ? 'contactinformation'
        : 'dealinformation',
    type: definition.options
      ? PropertyCreateTypeEnum.Enumeration
      : PropertyCreateTypeEnum.String,
    fieldType:
      fieldType === 'select'
        ? PropertyCreateFieldTypeEnum.Select
        : fieldType === 'textarea'
          ? PropertyCreateFieldTypeEnum.Textarea
          : PropertyCreateFieldTypeEnum.Text,
    formField: false,
    hasUniqueValue: definition.unique,
    options: definition.options?.map((value, displayOrder) => ({
      label: value,
      value,
      displayOrder,
      hidden: false,
    })),
  });
  console.log(`Created property: ${definition.objectType}.${definition.name}`);
};

for (const definition of definitions) {
  await ensureProperty(definition);
}

const pipelines = await client.crm.pipelines.pipelinesApi.getAll('deals');
let pipeline = pipelines.results.find(
  (item) => item.label.toLowerCase() === 'admissions',
);

if (!pipeline) {
  try {
    pipeline = await client.crm.pipelines.pipelinesApi.create('deals', {
      label: 'Admissions',
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
      `Could not create another pipeline; adding admissions stages to "${pipeline.label}".`,
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
