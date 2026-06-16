import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum as ContactFilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter';
import {
  AssociationSpecAssociationCategoryEnum,
} from '@hubspot/api-client/lib/codegen/crm/deals/models/AssociationSpec';
import { FilterOperatorEnum as DealFilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/deals/models/Filter';
import { FilterOperatorEnum as TaskFilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/objects/tasks/models/Filter';

export const HUBSPOT_PROPERTIES = {
  contact: {
    enquiryId: 'indoglobal_last_enquiry_id',
    course: 'indoglobal_course',
    preferredCountry: 'indoglobal_preferred_country',
    referralSource: 'indoglobal_referral_source',
    intakeYear: 'indoglobal_intake_year',
    neetStatus: 'indoglobal_neet_status',
    neetScore: 'indoglobal_neet_score',
    pcbPercentage: 'indoglobal_pcb_percentage',
    budgetRange: 'indoglobal_budget_range',
    passportStatus: 'indoglobal_passport_status',
    parentReadiness: 'indoglobal_parent_readiness',
    leadTemperature: 'indoglobal_lead_temperature',
  },
  deal: {
    enquiryId: 'indoglobal_enquiry_id',
    course: 'indoglobal_course',
    preferredCountry: 'indoglobal_preferred_country',
    collegeName: 'indoglobal_college_name',
    referralSource: 'indoglobal_referral_source',
    preferences: 'indoglobal_preferences',
    formSource: 'indoglobal_form_source',
    pagePath: 'indoglobal_page_path',
    intakeYear: 'indoglobal_intake_year',
    budgetRange: 'indoglobal_budget_range',
    passportStatus: 'indoglobal_passport_status',
    parentReadiness: 'indoglobal_parent_readiness',
    nextFollowUpDate: 'indoglobal_next_follow_up_date',
    leadTemperature: 'indoglobal_lead_temperature',
    counselorNotes: 'indoglobal_counselor_notes',
    applicationDetails: 'indoglobal_application_details',
    universityDetails: 'indoglobal_university_details',
    paymentStatus: 'indoglobal_payment_status',
    visaStatus: 'indoglobal_visa_status',
    lossReason: 'indoglobal_loss_reason',
    setupVersion: 'indoglobal_setup_version',
  },
} as const;

const DEAL_TO_CONTACT_ASSOCIATION_TYPE_ID = 3;
const TASK_TO_CONTACT_ASSOCIATION_TYPE_ID = 204;
const TASK_TO_DEAL_ASSOCIATION_TYPE_ID = 216;
const FOLLOW_UP_VERSION = '2026-06-v1';

const FOLLOW_UP_TASKS = [
  {
    key: 'call-15m',
    offsetMs: 15 * 60 * 1000,
    subject: 'First response call',
    type: 'CALL',
    priority: 'HIGH',
    body: 'Call the student within the 15-minute response SLA.',
  },
  {
    key: 'whatsapp-2h',
    offsetMs: 2 * 60 * 60 * 1000,
    subject: 'WhatsApp introduction',
    type: 'TODO',
    priority: 'HIGH',
    body: 'Send a personal WhatsApp introduction and confirm a convenient counseling time.',
  },
  {
    key: 'call-email-d1',
    offsetMs: 24 * 60 * 60 * 1000,
    subject: 'Day 1 call and email',
    type: 'CALL',
    priority: 'HIGH',
    body: 'Make the second call and send a personalized admissions email.',
  },
  {
    key: 'counseling-d3',
    offsetMs: 3 * 24 * 60 * 60 * 1000,
    subject: 'Day 3 counseling follow-up',
    type: 'CALL',
    priority: 'MEDIUM',
    body: 'Follow up on counseling, eligibility, budget, country, and parent readiness.',
  },
  {
    key: 'whatsapp-d5',
    offsetMs: 5 * 24 * 60 * 60 * 1000,
    subject: 'Day 5 WhatsApp follow-up',
    type: 'TODO',
    priority: 'MEDIUM',
    body: 'Send a personal WhatsApp follow-up and answer pending questions.',
  },
  {
    key: 'options-d7',
    offsetMs: 7 * 24 * 60 * 60 * 1000,
    subject: 'Day 7 university options',
    type: 'EMAIL',
    priority: 'MEDIUM',
    body: 'Call the student and email suitable university options and next steps.',
  },
  {
    key: 'decision-d10',
    offsetMs: 10 * 24 * 60 * 60 * 1000,
    subject: 'Day 10 decision follow-up',
    type: 'CALL',
    priority: 'MEDIUM',
    body: 'Check decision status, parent approval, documents, and expected timeline.',
  },
  {
    key: 'final-d14',
    offsetMs: 14 * 24 * 60 * 60 * 1000,
    subject: 'Day 14 final active follow-up',
    type: 'TODO',
    priority: 'MEDIUM',
    body: 'Complete the final active follow-up, then decide whether to nurture or mark Lost.',
  },
] as const;

export interface HubSpotEnquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  course: string;
  preferredCountry: string;
  collegeName: string;
  howHeard: string;
  preferences: string;
  formSource: string;
  pagePath: string;
}

export interface HubSpotSyncResult {
  contactId: string;
  dealId: string;
  contactCreated: boolean;
  dealCreated: boolean;
  contactUpdated: boolean;
  taskIds: string[];
  tasksCreated: boolean;
  previousContactProperties?: Record<string, string | null>;
}

interface SyncOptions {
  accessToken?: string;
  pipelineId?: string;
  stageId?: string;
  ownerId?: string;
  currency?: string;
  createFollowUpTasks?: boolean;
  taskStartAt?: Date;
  basePath?: string;
}

const getRequiredConfig = (options: SyncOptions) => {
  const accessToken = options.accessToken || process.env.HUBSPOT_ACCESS_TOKEN;
  const pipelineId = options.pipelineId || process.env.HUBSPOT_PIPELINE_ID;
  const stageId = options.stageId || process.env.HUBSPOT_NEW_LEAD_STAGE_ID;
  const ownerId = options.ownerId || process.env.HUBSPOT_OWNER_ID || '93911131';
  const currency =
    options.currency || process.env.HUBSPOT_DEAL_CURRENCY || 'INR';

  if (!accessToken || !pipelineId || !stageId) {
    throw new Error(
      'HubSpot is not configured. Set HUBSPOT_ACCESS_TOKEN, HUBSPOT_PIPELINE_ID, and HUBSPOT_NEW_LEAD_STAGE_ID.',
    );
  }

  return {
    accessToken,
    pipelineId,
    stageId,
    ownerId,
    currency,
    basePath: options.basePath,
  };
};

const splitName = (fullName: string) => {
  const [firstName, ...lastNameParts] = fullName.trim().split(/\s+/);
  return {
    firstname: firstName,
    lastname: lastNameParts.join(' '),
  };
};

const buildContactProperties = (enquiry: HubSpotEnquiry, ownerId: string) => ({
  ...splitName(enquiry.fullName),
  email: enquiry.email,
  phone: enquiry.phone,
  address: enquiry.address,
  hubspot_owner_id: ownerId,
  hs_lead_status: 'NEW',
  [HUBSPOT_PROPERTIES.contact.enquiryId]: enquiry.id,
  [HUBSPOT_PROPERTIES.contact.course]: enquiry.course,
  [HUBSPOT_PROPERTIES.contact.preferredCountry]: enquiry.preferredCountry,
  [HUBSPOT_PROPERTIES.contact.referralSource]: enquiry.howHeard,
  [HUBSPOT_PROPERTIES.contact.leadTemperature]: 'Warm',
});

const buildDealProperties = (
  enquiry: HubSpotEnquiry,
  pipelineId: string,
  stageId: string,
  ownerId: string,
  currency: string,
) => ({
  dealname: `${enquiry.fullName} - ${enquiry.course} - ${enquiry.preferredCountry}`,
  pipeline: pipelineId,
  dealstage: stageId,
  hubspot_owner_id: ownerId,
  deal_currency_code: currency,
  [HUBSPOT_PROPERTIES.deal.enquiryId]: enquiry.id,
  [HUBSPOT_PROPERTIES.deal.course]: enquiry.course,
  [HUBSPOT_PROPERTIES.deal.preferredCountry]: enquiry.preferredCountry,
  [HUBSPOT_PROPERTIES.deal.collegeName]: enquiry.collegeName,
  [HUBSPOT_PROPERTIES.deal.referralSource]: enquiry.howHeard,
  [HUBSPOT_PROPERTIES.deal.preferences]: enquiry.preferences,
  [HUBSPOT_PROPERTIES.deal.formSource]: enquiry.formSource,
  [HUBSPOT_PROPERTIES.deal.pagePath]: enquiry.pagePath,
  [HUBSPOT_PROPERTIES.deal.leadTemperature]: 'Warm',
  [HUBSPOT_PROPERTIES.deal.setupVersion]: FOLLOW_UP_VERSION,
});

const searchContactByEmail = async (client: Client, email: string) => {
  const properties = [
    'firstname',
    'lastname',
    'email',
    'phone',
    'address',
    'hubspot_owner_id',
    'hs_lead_status',
    ...Object.values(HUBSPOT_PROPERTIES.contact),
  ];
  const result = await client.crm.contacts.searchApi.doSearch({
    filterGroups: [
      {
        filters: [
          {
            propertyName: 'email',
            operator: ContactFilterOperatorEnum.Eq,
            value: email,
          },
        ],
      },
    ],
    properties,
    limit: 1,
  });

  return result.results[0] || null;
};

const searchTaskBySubject = async (client: Client, subject: string) => {
  const result = await client.crm.objects.tasks.searchApi.doSearch({
    filterGroups: [
      {
        filters: [
          {
            propertyName: 'hs_task_subject',
            operator: TaskFilterOperatorEnum.Eq,
            value: subject,
          },
        ],
      },
    ],
    properties: ['hs_task_subject'],
    limit: 1,
  });
  return result.results[0] || null;
};

const ensureFollowUpTasks = async (
  client: Client,
  enquiry: HubSpotEnquiry,
  contactId: string,
  dealId: string,
  ownerId: string,
  startAt: Date,
) => {
  const taskIds: string[] = [];
  let created = false;

  try {
    for (const task of FOLLOW_UP_TASKS) {
      const sequenceKey = `${FOLLOW_UP_VERSION}:${enquiry.id}:${task.key}`;
      const subject = `${task.subject}: ${enquiry.fullName} [IG:${sequenceKey}]`;
      const existing = await searchTaskBySubject(client, subject);
      if (existing) {
        taskIds.push(existing.id);
        continue;
      }

      const dueAt = new Date(startAt.getTime() + task.offsetMs);
      const reminderAt = Math.max(
        startAt.getTime(),
        dueAt.getTime() - 10 * 60_000,
      );
      const result = await client.crm.objects.tasks.basicApi.create({
        properties: {
          hs_timestamp: dueAt.toISOString(),
          hs_task_body: `${task.body}\n\nStudent: ${enquiry.fullName}\nPhone: ${enquiry.phone}\nCourse: ${enquiry.course}\nCountry: ${enquiry.preferredCountry}`,
          hubspot_owner_id: ownerId,
          hs_task_subject: subject,
          hs_task_status: 'NOT_STARTED',
          hs_task_priority: task.priority,
          hs_task_type: task.type,
          hs_task_reminders: String(reminderAt),
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: TASK_TO_CONTACT_ASSOCIATION_TYPE_ID,
              },
            ],
          },
          {
            to: { id: dealId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: TASK_TO_DEAL_ASSOCIATION_TYPE_ID,
              },
            ],
          },
        ],
      });
      taskIds.push(result.id);
      created = true;
    }
  } catch (error) {
    if (created) {
      await Promise.all(
        taskIds.map((taskId) =>
          client.crm.objects.tasks.basicApi.archive(taskId).catch(console.error),
        ),
      );
    }
    throw error;
  }

  return { taskIds, created };
};

const searchDealByEnquiryId = async (client: Client, enquiryId: string) => {
  const result = await client.crm.deals.searchApi.doSearch({
    filterGroups: [
      {
        filters: [
          {
            propertyName: HUBSPOT_PROPERTIES.deal.enquiryId,
            operator: DealFilterOperatorEnum.Eq,
            value: enquiryId,
          },
        ],
      },
    ],
    properties: [HUBSPOT_PROPERTIES.deal.enquiryId],
    limit: 1,
  });

  return result.results[0] || null;
};

const restoreContact = async (
  client: Client,
  contactId: string,
  previousProperties: Record<string, string | null>,
) => {
  const properties = Object.fromEntries(
    Object.entries(previousProperties).map(([key, value]) => [key, value || '']),
  );
  await client.crm.contacts.basicApi.update(contactId, { properties });
};

export async function syncEnquiryToHubSpot(
  enquiry: HubSpotEnquiry,
  options: SyncOptions = {},
): Promise<HubSpotSyncResult> {
  const { accessToken, pipelineId, stageId, ownerId, currency, basePath } =
    getRequiredConfig(options);
  const client = new Client({
    accessToken,
    basePath,
    numberOfApiCallRetries: 0,
  });

  const existingDeal = await searchDealByEnquiryId(client, enquiry.id);
  const existingContact = await searchContactByEmail(client, enquiry.email);

  let contactId = existingContact?.id;
  let contactCreated = false;
  let dealId: string | undefined;
  const previousContactProperties = existingContact?.properties || null;

  try {
    if (!contactId) {
      const contact = await client.crm.contacts.basicApi.create({
        properties: buildContactProperties(enquiry, ownerId),
      });
      contactId = contact.id;
      contactCreated = true;
    }

    if (!existingDeal) {
      const deal = await client.crm.deals.basicApi.create({
        properties: buildDealProperties(
          enquiry,
          pipelineId,
          stageId,
          ownerId,
          currency,
        ),
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory:
                  AssociationSpecAssociationCategoryEnum.HubspotDefined,
                associationTypeId: DEAL_TO_CONTACT_ASSOCIATION_TYPE_ID,
              },
            ],
          },
        ],
      });
      dealId = deal.id;
    } else {
      dealId = existingDeal.id;
    }

    if (existingContact) {
      await client.crm.contacts.basicApi.update(contactId, {
        properties: buildContactProperties(enquiry, ownerId),
      });
    }

    const shouldCreateTasks = options.createFollowUpTasks !== false;
    const taskResult = shouldCreateTasks
      ? await ensureFollowUpTasks(
          client,
          enquiry,
          contactId,
          dealId,
          ownerId,
          options.taskStartAt || new Date(),
        )
      : { taskIds: [], created: false };

    return {
      contactId,
      dealId,
      contactCreated,
      dealCreated: !existingDeal,
      contactUpdated: Boolean(existingContact),
      taskIds: taskResult.taskIds,
      tasksCreated: taskResult.created,
      previousContactProperties: previousContactProperties || undefined,
    };
  } catch (error) {
    if (dealId && !existingDeal) {
      await client.crm.deals.basicApi.archive(dealId).catch(console.error);
    }
    if (contactId && contactCreated) {
      await client.crm.contacts.basicApi.archive(contactId).catch(console.error);
    } else if (contactId && previousContactProperties) {
      await restoreContact(client, contactId, previousContactProperties).catch(
        console.error,
      );
    }
    throw error;
  }
}

export async function rollbackHubSpotSync(
  result: HubSpotSyncResult,
  options: SyncOptions = {},
) {
  const { accessToken, basePath } = getRequiredConfig(options);
  const client = new Client({
    accessToken,
    basePath,
    numberOfApiCallRetries: 0,
  });

  if (result.tasksCreated) {
    await Promise.all(
      result.taskIds.map((taskId) =>
        client.crm.objects.tasks.basicApi.archive(taskId).catch(console.error),
      ),
    );
  }
  if (result.dealCreated) {
    await client.crm.deals.basicApi.archive(result.dealId).catch(console.error);
  }
  if (result.contactCreated) {
    await client.crm.contacts.basicApi
      .archive(result.contactId)
      .catch(console.error);
  } else if (result.contactUpdated && result.previousContactProperties) {
    await restoreContact(
      client,
      result.contactId,
      result.previousContactProperties,
    ).catch(console.error);
  }
}
