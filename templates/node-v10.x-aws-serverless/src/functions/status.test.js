// XXX Do not use import in test files, as it is not compatible with dotenv
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.serverless/.env') });

const status = require('./status');

describe('functions/status.js', () => {
  const event = {
    queryStringParameters: {},
  };

  test('should return expected JSON', async () => {
    const data = await status.handler(event);

    expect(data.body).toBeDefined();
    expect(data.statusCode).toEqual(200);

    const parseBody = JSON.parse(data.body);

    expect(parseBody).toHaveProperty('status');
    expect(parseBody.status).toBe('OK');
  });
});
