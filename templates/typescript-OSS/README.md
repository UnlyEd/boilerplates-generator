<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>

# PROJECT-NAME
[![Version][github-version-image]][github-version-url]
[![Liscence][github-liscence-image]][github-liscence-url][![Releases][github-all-release-image]][github-all-release-url][![NPM Downloads][npm-downloads-image]][npm-downloads-url]
[![CC Maintainability][code-climate-maintainability-image]][code-climate-maintainability-url][![CC Issues][code-climate-issues-image]][code-climate-issues-url][![CC debt][code-climate-debt-image]][code-climate-debt-url]
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/iso3166-1/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/iso3166-1?targetFile=package.json)

This project was generated using https://github.com/UnlyEd/boilerplate-generator/tree/master/templates/typescript-v3.5.2-OSS

---

<!-- toc -->

- [TODO (after generating a project from this boilerplate)](#todo-after-generating-a-project-from-this-boilerplate)
- [Getting started](#getting-started)
- [Contributing](#contributing)
  * [Working locally](#working-locally)
  * [Test](#test)
  * [Versions](#versions)
    + [SemVer](#semver)
  * [Releasing and publishing](#releasing-and-publishing)
- [Changelog](#changelog)
- [License](#license)
- [Vulnerability disclosure](#vulnerability-disclosure)
- [Contributors and maintainers](#contributors-and-maintainers)
- [**[ABOUT UNLY]**](#about-unly-)

<!-- tocstop -->

---

# TODO (after generating a project from this boilerplate)

- Rename occurrences of `PROJECT-NAME`
- Delete this

# Getting started

```
yarn install
```

Use:

```
yarn start
```

---

# Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

## Working locally

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

## Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

## Versions

### SemVer

We use Semantic Versioning for this project: https://semver.org/. (`vMAJOR.MINOR.PATCH`: `v1.0.1`)

- Major version: Must be changed when Breaking Changes are made (public API isn't backward compatible).
  - A function has been renamed/removed from the public API
  - Something has changed that will cause the app to behave differently with the same configuration
- Minor version: Must be changed when a new feature is added or updated (without breaking change nor behavioral change)
- Patch version: Must be changed when any change is made that isn't either Major nor Minor. (Misc, doc, etc.)

## Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

> Don't forget we are using SemVer, please follow our SemVer rules.

**Pro hint**: use `beta` tag if you're in a work-in-progress (or unsure) to avoid releasing WIP versions that looks legit

---

# Changelog

> Our API change (including breaking changes and "how to migrate") are documented in the Changelog.

See [changelog](./CHANGELOG.md)

---

# License

MIT

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
