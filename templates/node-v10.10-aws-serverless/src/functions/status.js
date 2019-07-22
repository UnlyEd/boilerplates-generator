import RavenLambdaWrapper from 'serverless-sentry-lib';
import Raven from 'raven';
import moment from 'moment';
import { isHostedOnAws } from '@unly/utils-aws';

export const handler = RavenLambdaWrapper.handler(Raven, async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({
    status: 'OK',
    environment: process.env.NODE_ENV,
    service: process.env.SERVICE,
    isHostedOnAws: isHostedOnAws(),
    processNodeEnv: process.env.NODE_ENV,
    time: moment().toISOString(),
    release: process.env.GIT_COMMIT_VERSION,
    branch: process.env.GIT_BRANCH,
    releasedAt: process.env.DEPLOY_TIME,
    version: process.env.npm_package_version,
    nodejs: process.version,
    // AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID, // XXX Commented out by default because sensitive
    EXAMPLE_ENV_VAR: process.env.EXAMPLE_ENV_VAR, // Example of ENV var defined in "/.env" file
    SERVICE: process.env.SERVICE, // Example of ENV var defined in "/serverless.yml"
  }),
}));
