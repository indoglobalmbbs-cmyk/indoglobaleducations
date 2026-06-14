import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum as ContactFilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter';
import {
  AssociationSpecAssociationCategoryEnum,
} from '@hubspot/api-client/lib/codegen/crm/deals/models/AssociationSpec';
import { FilterOperatorEnum as DealFilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/deals/models/Filter';

export const HUBSPOT_PROPERTIES = {
  contact: {
    enquiryId: 'indoglobal_last_enquiry_id',
    course: 'indoglobal_course',
    preferredCountry: 'indoglobal_preferred_country',
    referralSource: 'indoglobal_referral_source',
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
  },
} as const;

const DEAL_TO_CONTACT_ASSOCIATION_TYPE_ID = 3;

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
  previousContactProperties?: Record<string, string | null>;
}

interface SyncOptions {
  accessToken?: string;
  pipelineId?: string;
  stageId?: string;
  basePath?: string;
}

const getRequiredConfig = (options: SyncOptions) => {
  const accessToken = options.accessToken || process.env.HUBSPOT_ACCESS_TOKEN;
  const pipelineId = options.pipelineId || process.env.HUBSPOT_PIPELINE_ID;
  const stageId = options.stageId || process.env.HUBSPOT_NEW_LEAD_STAGE_ID;

  if (!accessToken || !pipelineId || !stageId) {
    throw new Error(
      'HubSpot is not configured. Set HUBSPOT_ACCESS_TOKEN, HUBSPOT_PIPELINE_ID, and HUBSPOT_NEW_LEAD_STAGE_ID.',
    );
  }

  return { accessToken, pipelineId, stageId, basePath: options.basePath };
};

const splitName = (fullName: string) => {
  const [firstName, ...lastNameParts] = fullName.trim().split(/\s+/);
  return {
    firstname: firstName,
    lastname: lastNameParts.join(' '),
  };
};

const buildContactProperties = (enquiry: HubSpotEnquiry) => ({
  ...splitName(enquiry.fullName),
  email: enquiry.email,
  phone: enquiry.phone,
  address: enquiry.address,
  [HUBSPOT_PROPERTIES.contact.enquiryId]: enquiry.id,
  [HUBSPOT_PROPERTIES.contact.course]: enquiry.course,
  [HUBSPOT_PROPERTIES.contact.preferredCountry]: enquiry.preferredCountry,
  [HUBSPOT_PROPERTIES.contact.referralSource]: enquiry.howHeard,
});

const buildDealProperties = (
  enquiry: HubSpotEnquiry,
  pipelineId: string,
  stageId: string,
) => ({
  dealname: `${enquiry.fullName} - ${enquiry.course} - ${enquiry.preferredCountry}`,
  pipeline: pipelineId,
  dealstage: stageId,
  [HUBSPOT_PROPERTIES.deal.enquiryId]: enquiry.id,
  [HUBSPOT_PROPERTIES.deal.course]: enquiry.course,
  [HUBSPOT_PROPERTIES.deal.preferredCountry]: enquiry.preferredCountry,
  [HUBSPOT_PROPERTIES.deal.collegeName]: enquiry.collegeName,
  [HUBSPOT_PROPERTIES.deal.referralSource]: enquiry.howHeard,
  [HUBSPOT_PROPERTIES.deal.preferences]: enquiry.preferences,
  [HUBSPOT_PROPERTIES.deal.formSource]: enquiry.formSource,
  [HUBSPOT_PROPERTIES.deal.pagePath]: enquiry.pagePath,
});

const searchContactByEmail = async (client: Client, email: string) => {
  const properties = [
    'firstname',
    'lastname',
    'email',
    'phone',
    'address',
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
  const { accessToken, pipelineId, stageId, basePath } =
    getRequiredConfig(options);
  const client = new Client({
    accessToken,
    basePath,
    numberOfApiCallRetries: 0,
  });

  const existingDeal = await searchDealByEnquiryId(client, enquiry.id);
  const existingContact = await searchContactByEmail(client, enquiry.email);

  if (existingDeal && existingContact) {
    return {
      contactId: existingContact.id,
      dealId: existingDeal.id,
      contactCreated: false,
      dealCreated: false,
      contactUpdated: false,
    };
  }

  let contactId = existingContact?.id;
  let contactCreated = false;
  let dealId: string | undefined;
  const previousContactProperties = existingContact?.properties || null;

  try {
    if (!contactId) {
      const contact = await client.crm.contacts.basicApi.create({
        properties: buildContactProperties(enquiry),
      });
      contactId = contact.id;
      contactCreated = true;
    }

    if (!existingDeal) {
      const deal = await client.crm.deals.basicApi.create({
        properties: buildDealProperties(enquiry, pipelineId, stageId),
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
        properties: buildContactProperties(enquiry),
      });
    }

    return {
      contactId,
      dealId,
      contactCreated,
      dealCreated: !existingDeal,
      contactUpdated: Boolean(existingContact),
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
