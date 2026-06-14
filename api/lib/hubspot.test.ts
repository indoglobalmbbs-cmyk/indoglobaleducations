import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { afterEach, test } from 'node:test';
import { syncEnquiryToHubSpot } from './hubspot';

const enquiry = {
  id: 'enquiry-123',
  fullName: 'Asha Sharma',
  email: 'asha@example.com',
  phone: '9876543210',
  address: 'New Delhi, India',
  course: 'MBBS',
  preferredCountry: 'Russia',
  collegeName: 'Example College',
  howHeard: 'Instagram',
  preferences: 'Budget around 5 lakh',
  formSource: 'compact',
  pagePath: '/russia',
};

const servers: ReturnType<typeof createServer>[] = [];

afterEach(async () => {
  await Promise.all(
    servers.splice(0).map(
      (server) =>
        new Promise<void>((resolve, reject) =>
          server.close((error) => (error ? reject(error) : resolve())),
        ),
    ),
  );
});

const startMockHubSpot = async ({
  failDealCreate = false,
  existingContact = false,
} = {}) => {
  const requests: Array<{ method?: string; url?: string; body: unknown }> = [];
  const server = createServer((request, response) => {
    let rawBody = '';
    request.on('data', (chunk) => {
      rawBody += chunk;
    });
    request.on('end', () => {
      const body = rawBody ? JSON.parse(rawBody) : null;
      requests.push({ method: request.method, url: request.url, body });
      response.setHeader('Content-Type', 'application/json');

      if (request.url?.endsWith('/search')) {
        const isContactSearch = request.url.includes('/contacts/');
        response.end(
          JSON.stringify(
            isContactSearch && existingContact
              ? {
                  total: 1,
                  results: [
                    {
                      id: 'contact-existing',
                      properties: {
                        firstname: 'Old',
                        lastname: 'Name',
                        email: enquiry.email,
                        phone: '',
                        address: '',
                      },
                      createdAt: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                      archived: false,
                    },
                  ],
                }
              : { total: 0, results: [] },
          ),
        );
        return;
      }
      if (
        request.method === 'POST' &&
        request.url === '/crm/v3/objects/contacts'
      ) {
        response.statusCode = 201;
        response.end(
          JSON.stringify({
            id: 'contact-1',
            properties: body.properties,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            archived: false,
          }),
        );
        return;
      }
      if (
        request.method === 'POST' &&
        request.url === '/crm/v3/objects/deals'
      ) {
        if (failDealCreate) {
          response.statusCode = 500;
          response.end(JSON.stringify({ message: 'deal create failed' }));
          return;
        }
        response.statusCode = 201;
        response.end(
          JSON.stringify({
            id: 'deal-1',
            properties: body.properties,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            archived: false,
          }),
        );
        return;
      }
      if (
        request.method === 'PATCH' &&
        request.url === '/crm/v3/objects/contacts/contact-existing'
      ) {
        response.end(
          JSON.stringify({
            id: 'contact-existing',
            properties: body.properties,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            archived: false,
          }),
        );
        return;
      }
      if (
        request.method === 'DELETE' &&
        request.url === '/crm/v3/objects/contacts/contact-1'
      ) {
        response.statusCode = 204;
        response.end();
        return;
      }

      response.statusCode = 404;
      response.end(JSON.stringify({ message: 'unexpected request' }));
    });
  });
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  assert(address && typeof address !== 'string');
  return {
    requests,
    basePath: `http://127.0.0.1:${address.port}`,
  };
};

test('creates an associated contact and admissions deal', async () => {
  const mock = await startMockHubSpot();
  const result = await syncEnquiryToHubSpot(enquiry, {
    accessToken: 'test-token',
    pipelineId: 'admissions',
    stageId: 'new-lead',
    basePath: mock.basePath,
  });

  assert.equal(result.contactId, 'contact-1');
  assert.equal(result.dealId, 'deal-1');
  const dealRequest = mock.requests.find(
    (request) =>
      request.method === 'POST' && request.url === '/crm/v3/objects/deals',
  );
  assert(dealRequest);
  const body = dealRequest.body as {
    properties: Record<string, string>;
    associations: Array<{
      to: { id: string };
      types: Array<{ associationTypeId: number }>;
    }>;
  };
  assert.equal(body.properties.indoglobal_preferred_country, 'Russia');
  assert.equal(body.properties.indoglobal_form_source, 'compact');
  assert.equal(body.associations[0].to.id, 'contact-1');
  assert.equal(body.associations[0].types[0].associationTypeId, 3);
});

test('removes a newly created contact when deal creation fails', async () => {
  const mock = await startMockHubSpot({ failDealCreate: true });

  await assert.rejects(
    syncEnquiryToHubSpot(enquiry, {
      accessToken: 'test-token',
      pipelineId: 'admissions',
      stageId: 'new-lead',
      basePath: mock.basePath,
    }),
  );

  assert(
    mock.requests.some(
      (request) =>
        request.method === 'DELETE' &&
        request.url === '/crm/v3/objects/contacts/contact-1',
    ),
  );
});

test('updates an existing contact without creating a duplicate', async () => {
  const mock = await startMockHubSpot({ existingContact: true });
  const result = await syncEnquiryToHubSpot(enquiry, {
    accessToken: 'test-token',
    pipelineId: 'admissions',
    stageId: 'new-lead',
    basePath: mock.basePath,
  });

  assert.equal(result.contactId, 'contact-existing');
  assert.equal(result.contactCreated, false);
  assert.equal(result.contactUpdated, true);
  assert.equal(
    mock.requests.some(
      (request) =>
        request.method === 'POST' &&
        request.url === '/crm/v3/objects/contacts',
    ),
    false,
  );
  assert(
    mock.requests.some(
      (request) =>
        request.method === 'PATCH' &&
        request.url === '/crm/v3/objects/contacts/contact-existing',
    ),
  );
});
