<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
# PROJECT-NAME
[![Version][github-version-image]][github-version-url]
[![Liscence][github-liscence-image]][github-liscence-url][![Releases][github-all-release-image]][github-all-release-url][![NPM Downloads][npm-downloads-image]][npm-downloads-url]
[![CC Maintainability][code-climate-maintainability-image]][code-climate-maintainability-url][![CC Issues][code-climate-issues-image]][code-climate-issues-url][![CC debt][code-climate-debt-image]][code-climate-debt-url]
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/iso3166-1/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/iso3166-1?targetFile=package.json)

This project was generated using https://github.com/UnlyEd/boilerplate-generator/tree/master/templates/typescript-v3.5.2-OSS

<!-- toc -->

- [TODO (after generating a project from this boilerplate)](#todo-after-generating-a-project-from-this-boilerplate)
- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## TODO (after generating a project from this boilerplate)

- Rename occurrences of `PROJECT-NAME`
- Delete this

## Getting started

```
yarn install
```

Use:

```
yarn start
```

## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Working locally

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT

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
