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
    nodejs: process.version
  }),
}));
