# HubSpot Sales Dashboard

## Account Setup

1. Rotate any Personal Access Key or API key that has been pasted into chat,
   logs, tickets, or other shared locations.
2. Optionally run `hs account auth` to authenticate the HubSpot CLI. The
   Personal Access Key used by this command is only for the CLI and must not be
   used as `HUBSPOT_ACCESS_TOKEN`.
3. In HubSpot, create a private app with these scopes:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.objects.deals.read`
   - `crm.objects.deals.write`
   - `crm.schemas.contacts.read`
   - `crm.schemas.contacts.write`
   - `crm.schemas.deals.read`
   - `crm.schemas.deals.write`
   - `crm.objects.owners.read`
4. Put the private app token in the server-only `HUBSPOT_ACCESS_TOKEN`
   environment variable.
5. Run `pnpm hubspot:setup`.
6. Add the printed `HUBSPOT_PIPELINE_ID` and
   `HUBSPOT_NEW_LEAD_STAGE_ID` values to `.env` and Vercel.
7. Run `pnpm hubspot:verify`.

Never use a Personal Access Key or developer API key as the private app token.
Never prefix a HubSpot secret with `VITE_` or expose it to browser code.

Add all three variables to Vercel's Production, Preview, and Development
environments, then redeploy:

```text
HUBSPOT_ACCESS_TOKEN
HUBSPOT_PIPELINE_ID
HUBSPOT_NEW_LEAD_STAGE_ID
HUBSPOT_OWNER_ID
HUBSPOT_DEAL_CURRENCY
```

The default owner is Yoga Sidhesh (`93911131`) and the deal currency is `INR`.
Each new website enquiry receives eight personalized follow-up tasks spanning
the first 14 days.

## Dashboard

HubSpot dashboards and custom reports are configured in the HubSpot UI, not by
`hs init`. Navigate to **Reporting > Dashboards**, create **Indo Global
Admissions Funnel**, and make it viewable by the sales team.

Add these single-object deal reports:

| Report | Configuration |
| --- | --- |
| New enquiries over time | Count of deals by create date |
| Deals by admissions stage | Count of deals by Deal stage |
| Leads by preferred country | Count by Indo Global Preferred Country |
| Leads by course | Count by Indo Global Course |
| Leads by referral source | Count by Indo Global Referral Source |
| Leads by form source | Count by Indo Global Form Source |
| Unassigned new leads | Deal stage is New Lead and Deal owner is unknown |
| Open deals by age | Open deals grouped by time in current stage |
| Enrolled versus lost | Count filtered to Enrolled and Lost stages |

Set the dashboard date range to the current admissions cycle. Use Deal owner,
Deal stage, Indo Global Preferred Country, and Indo Global Course as dashboard
filters where the subscription supports them.

Create saved deal views for:

- New and uncontacted leads
- Overdue follow-up tasks
- Leads with no next activity
- Documents pending
- Applications in progress
- Offers awaiting payment
- Visa process
- Enrolled this intake
- Lost leads grouped by Indo Global Loss Reason

HubSpot does not currently expose dashboard/report layout or account
timezone/currency configuration through the CLI. Set the account timezone to
Asia/Kolkata and company currency to INR in HubSpot settings.

## Backfill

Run `pnpm hubspot:backfill` first. It only lists records that need syncing.
After reviewing the output, run `pnpm hubspot:backfill:execute`. Repeating the
execute command is safe because synced Supabase rows are skipped and HubSpot
deals are deduplicated by the Indo Global Enquiry ID property.
