require('dotenv').config({ path: '.serverless/.env.test' });

if (process.env.NODE_ENV !== 'test') {
  throw Error('Tests must be executed in a "test" environment (by convention)');
}
