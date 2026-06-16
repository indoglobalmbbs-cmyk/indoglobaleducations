import { Client } from '@hubspot/api-client';
import { loadEnvFile } from 'node:process';
import { HUBSPOT_PROPERTIES } from '../api/lib/hubspot';

try {
  loadEnvFile();
} catch {
  // Environment variables may be supplied by the shell or deployment platform.
}

const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const pipelineId = process.env.HUBSPOT_PIPELINE_ID;
const stageId = process.env.HUBSPOT_NEW_LEAD_STAGE_ID;
const ownerId = process.env.HUBSPOT_OWNER_ID || '93911131';

const missing = [
  !accessToken && 'HUBSPOT_ACCESS_TOKEN',
  !pipelineId && 'HUBSPOT_PIPELINE_ID',
  !stageId && 'HUBSPOT_NEW_LEAD_STAGE_ID',
].filter(Boolean);

if (missing.length) {
  throw new Error(`Missing HubSpot configuration: ${missing.join(', ')}`);
}

const client = new Client({ accessToken });

const [pipeline, contactProperties, dealProperties, owner] = await Promise.all([
  client.crm.pipelines.pipelinesApi.getById('deals', pipelineId),
  Promise.all(
    Object.values(HUBSPOT_PROPERTIES.contact).map((property) =>
      client.crm.properties.coreApi.getByName('contacts', property),
    ),
  ),
  Promise.all(
    Object.values(HUBSPOT_PROPERTIES.deal).map((property) =>
      client.crm.properties.coreApi.getByName('deals', property),
    ),
  ),
  client.crm.owners.ownersApi.getById(Number(ownerId)),
]);

const newLeadStage = pipeline.stages.find((stage) => stage.id === stageId);
if (!newLeadStage) {
  throw new Error(
    `Stage ${stageId} does not belong to HubSpot pipeline ${pipelineId}.`,
  );
}

console.log(`HubSpot connection verified.`);
console.log(`Pipeline: ${pipeline.label} (${pipeline.id})`);
console.log(`New lead stage: ${newLeadStage.label} (${newLeadStage.id})`);
console.log(`Contact properties: ${contactProperties.length}`);
console.log(`Deal properties: ${dealProperties.length}`);
console.log(`Default owner: ${owner.firstName} ${owner.lastName} (${owner.id})`);
console.log(
  `Deal currency: ${process.env.HUBSPOT_DEAL_CURRENCY || 'INR'}`,
);
console.log('Task API: configured for live verification during enquiry sync.');
