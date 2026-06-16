import { createClient } from '@supabase/supabase-js';
import { loadEnvFile } from 'node:process';
import WebSocket from 'ws';
import { syncEnquiryToHubSpot } from '../api/lib/hubspot';

try {
  loadEnvFile();
} catch {
  // Environment variables may be supplied by the shell or deployment platform.
}

const execute = process.argv.includes('--execute');
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
}
if (
  execute &&
  (!process.env.HUBSPOT_ACCESS_TOKEN ||
    !process.env.HUBSPOT_PIPELINE_ID ||
    !process.env.HUBSPOT_NEW_LEAD_STAGE_ID)
) {
  throw new Error('Run HubSpot setup and configure its three server variables.');
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  realtime: { transport: WebSocket as never },
});
const { data: enquiries, error } = await supabase
  .from('indoglobal')
  .select('*')
  .is('hubspot_deal_id', null)
  .order('created_at', { ascending: true });

if (error) throw error;

const inferCountry = (value: string | null) => {
  const preferences = (value || '').toLowerCase();
  return (
    ['Russia', 'Armenia', 'Georgia', 'India'].find((country) =>
      preferences.includes(country.toLowerCase()),
    ) || 'Undecided'
  );
};

console.log(
  `${execute ? 'Executing' : 'Dry run:'} ${enquiries.length} enquiries require HubSpot sync.`,
);

let synced = 0;
let failed = 0;

for (const enquiry of enquiries) {
  const preferredCountry =
    enquiry.preferredcountry || inferCountry(enquiry.preferences);
  console.log(
    `${execute ? 'Syncing' : 'Would sync'} ${enquiry.id} (${enquiry.email}) as ${preferredCountry}.`,
  );
  if (!execute) continue;

  try {
    const createdAt = new Date(enquiry.created_at);
    const ageMs = Date.now() - createdAt.getTime();
    const createFollowUpTasks =
      Number.isFinite(ageMs) && ageMs <= 14 * 24 * 60 * 60 * 1000;
    const result = await syncEnquiryToHubSpot({
      id: enquiry.id,
      fullName: enquiry.fullname,
      email: enquiry.email,
      phone: enquiry.phone,
      address: enquiry.address || 'Not provided',
      course: enquiry.course || 'MBBS',
      preferredCountry,
      collegeName: enquiry.collegename || 'Not provided',
      howHeard: enquiry.howheard || 'Historical import',
      preferences: enquiry.preferences || 'Historical enquiry',
      formSource: enquiry.source || 'historical-backfill',
      pagePath: enquiry.pagepath || '/',
    }, {
      createFollowUpTasks,
      taskStartAt: new Date(),
    });

    const { error: updateError } = await supabase
      .from('indoglobal')
      .update({
        preferredcountry: preferredCountry,
        hubspot_contact_id: result.contactId,
        hubspot_deal_id: result.dealId,
        hubspot_sync_status: 'synced',
        hubspot_sync_error: null,
      })
      .eq('id', enquiry.id);
    if (updateError) throw updateError;
    synced += 1;
  } catch (syncError) {
    failed += 1;
    const message =
      syncError instanceof Error ? syncError.message : String(syncError);
    await supabase
      .from('indoglobal')
      .update({
        hubspot_sync_status: 'failed',
        hubspot_sync_error: message.slice(0, 1000),
      })
      .eq('id', enquiry.id);
    console.error(`Failed ${enquiry.id}: ${message}`);
  }
}

console.log(
  execute
    ? `Backfill complete: ${synced} synced, ${failed} failed.`
    : 'Dry run complete. Run `pnpm hubspot:backfill:execute` to create records.',
);
if (failed > 0) process.exitCode = 1;
