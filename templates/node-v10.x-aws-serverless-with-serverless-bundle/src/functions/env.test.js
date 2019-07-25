// We are forced to load env variables from each test file that needs it, because serverless-bundle doesn't properly handles "setupFilesAfterEnv"
// XXX This forces us to use "require" instead of "import", because "import" are always loaded first and would therefore be loaded before the env is loaded
//  (and may work, but may not, depending on the tests)
require('dotenv').config({ path: '.serverless/.env' });

describe('ENV', () => {
  test('should contain expected ENV var SERVICE', async () => {
    expect(process.env.SERVICE).toEqual('PROJECT-NAME');
  });

  test('should contain expected ENV var EXAMPLE_ENV_VAR', async () => {
    expect(process.env.EXAMPLE_ENV_VAR).toEqual('example');
  });

  test('should contain expected ENV var EXAMPLE_ENV_VAR_TEST_ENV_ONLY', async () => {
    expect(process.env.EXAMPLE_ENV_VAR_TEST_ENV_ONLY).toEqual('1');
  });
});
