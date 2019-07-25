require('dotenv').config({ path: '.serverless/.env' });

console.log('env---', process.env.EXAMPLE_ENV_VAR_TEST_ONLY); // FIXME This is never called

if (process.env.NODE_ENV !== 'test') {
  throw Error('Tests must be executed in a "test" environment (by convention)');
}
