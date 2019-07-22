# PROJECT-NAME

This project was generated using https://github.com/UnlyEd/skeleton-generators/tree/master/templates/node-v10.10-aws-serverless


# TODO (after generating a project from this boilerplate)

- Rename occurrences of `PROJECT-NAME`
- Look for `TODO`
  - Use your own AWS profile instead of `sandbox`
- Enable [sentry](https://sentry.io/organizations/unly/projects/), if needed (or delete)
  - `serverless.yml`
  - `.sentryclirc`
- Delete this

<!-- toc -->

- [Getting started](#getting-started)

<!-- tocstop -->

## Getting started

### Install

```
yarn install
```

### Use

```
yarn start
```

### Deploy

```
yarn deploy # Deploy to staging env
NODE_ENV=production yarn deploy # Deploy to production env
```

### Logs

```
yarn logs:status
```

Similar to reading the logs from the AWS Console

### Test

```
yarn test
yarn test:coverage
```

### Release
Will prompt version to release, run tests, commit/push commit + tag

```
yarn release
```


> Check the [./package.json](./package.json) file to see what other utility scripts are available

## Features/defaults provided by this boilerplate

- SLS handles stages/environments and settings per environment (memorySize, AWS profile, etc.)
  - "staging" and "production" environments built-in
- SLS scripts (helpers)
- Environment variables built-in by default (both from .env* files and serverless.yml), using `dotenv` and `@unly/serverless-env-copy-plugin`
- Sentry easy opt-in (disabled by default)
  - Source maps on Sentry for easier debug
  - Automatic error handling on the lambda level through `RavenLambdaWrapper.handler` (won't do anything if Sentry isn't setup)
- Babel 7
- Webpack 4
- Jest for testing
  - Jest extended https://github.com/jest-community/jest-extended included
  - Support for ENV variables built-in
- Use YARN for packaging
- 30s timeout on lambda (max allowed)
- 128Mo RAM on lambda (min allowed)
- 60 days logs retention (avoid infinite logs and lambda price increase)
