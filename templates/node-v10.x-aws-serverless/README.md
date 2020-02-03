<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
# PROJECT-NAME
[![Version][github-version-image]][github-version-url]
[![Liscence][github-liscence-image]][github-liscence-url][![Releases][github-all-release-image]][github-all-release-url][![NPM Downloads][npm-downloads-image]][npm-downloads-url]
[![CC Maintainability][code-climate-maintainability-image]][code-climate-maintainability-url][![CC Issues][code-climate-issues-image]][code-climate-issues-url][![CC debt][code-climate-debt-image]][code-climate-debt-url]
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/iso3166-1/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/iso3166-1?targetFile=package.json)

This project was generated using https://github.com/UnlyEd/boilerplate-generator/tree/master/templates/node-v10.10-aws-serverless

<!-- toc -->

- [TODO (after generating a project from this boilerplate)](#todo-after-generating-a-project-from-this-boilerplate)
- [Getting started](#getting-started)
  * [Install](#install)
  * [Use](#use)
  * [Deploy](#deploy)
  * [Logs](#logs)
  * [Test](#test)
  * [Release](#release)
- [Features/defaults provided by this boilerplate](#featuresdefaults-provided-by-this-boilerplate)
- [Vulnerability disclosure](#vulnerability-disclosure)
- [Contributors and maintainers](#contributors-and-maintainers)
- [**[ABOUT UNLY]**](#about-unly-)

<!-- tocstop -->

## TODO (after generating a project from this boilerplate)

- Rename occurrences of `PROJECT-NAME`
- Look for `TODO`
  - Use your own AWS profile instead of `sandbox`
- Enable [sentry](https://sentry.io/organizations/unly/projects/), if needed (or delete)
  - `serverless.yml`
  - `.sentryclirc`
- Delete this

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
- Enable API GW logs by default

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

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education. 
> Unly is committed to making education more inclusive, through responsible funding for students. 
We provide technological solutions to help students find the necessary funding for their studies. 
We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit : 
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL

[github-all-release-image]: https://img.shields.io/github/downloads/UnlyEd/PROJECT-NAME/total
[github-all-release-url]: https://github.com/UnlyEd/PROJECT-NAME/releases
[github-liscence-image]: https://img.shields.io/github/license/UnlyEd/PROJECT-NAME
[github-liscence-url]: ./LICENSE
[github-version-image]: https://img.shields.io/github/package-json/v/UnlyEd/PROJECT-NAME
[github-version-url]: ./package.json
[npm-downloads-url]: https://www.npmjs.com/package/@unly/iso3166-1
[npm-downloads-image]: https://img.shields.io/npm/dm/@unly/PROJECT-NAME
[code-climate-maintainability-image]: https://img.shields.io/codeclimate/maintainability/unlyed/PROJECT-NAME
[code-climate-maintainability-url]: https://codeclimate.com/github/UnlyEd/PROJECT-NAME/maintainability
[code-climate-issues-image]: https://img.shields.io/codeclimate/issues/UnlyEd/PROJECT-NAME
[code-climate-issues-url]: https://codeclimate.com/github/UnlyEd/PROJECT-NAME/issues
[code-climate-debt-image]: https://img.shields.io/codeclimate/tech-debt/UnlyEd/PROJECT-NAME
[code-climate-debt-url]: https://codeclimate.com/github/UnlyEd/PROJECT-NAME/maintainability
