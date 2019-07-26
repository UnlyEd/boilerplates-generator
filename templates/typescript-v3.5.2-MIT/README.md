[![Maintainability](https://api.codeclimate.com/v1/badges/d8318651d334711f79dc/maintainability)](https://codeclimate.com/github/UnlyEd/conditions-matcher/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d8318651d334711f79dc/test_coverage)](https://codeclimate.com/github/UnlyEd/conditions-matcher/test_coverage)
[![Build Status](https://codebuild.eu-west-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiWGQ3V2dEdGpUendlc05TRm5RWXZzejJCRDFVb09maFJqSzRmKzh4aUZzSVY3Qk9nZ2hMTmV0Z3VtOUJQYW5Hd3diZnlvMXhFUnhIQjVEc0RnRm9XTnRnPSIsIml2UGFyYW1ldGVyU3BlYyI6Ii9NdXdzQ2JNQ2lLUWZQR04iLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-west-1.console.aws.amazon.com/codesuite/codebuild/projects/conditions-matcher/history)

# Conditions-matcher

Check which conditions

<!-- toc -->

- [Getting started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
- [Contributing](#contributing)
  * [Working locally](#working-locally)
  * [Test](#test)
  * [Versions](#versions)
    + [SemVer](#semver)
    + [Release a new version](#release-a-new-version)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

### Installation

Using npm :
```
npm i @unly/conditions-matcher
```
Using yarn :
```
yarn add @unly/conditions-matcher
```

### Usage
ES5
```js
const contextMatcher = require("@unly/conditions-matcher");
```

ES6
```js
import contextMatcher from "@unly/conditions-matcher";
```

See the [examples](./examples) for more details.
Then please check the conditions documentation [here](README-CONDITIONAL-OPERATORS.md)

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
yarn test:once # Used for CI/CD
yarn test:coverage # Generate coverage report
```

### Versions

#### SemVer

We use Semantic Versioning for this project: https://semver.org/. (`vMAJOR.MINOR.PATCH`: `v1.0.1`)

- Major version: Must be changed when Breaking Changes are made (public API isn't backward compatible).
  - A function has been renamed/removed from the public API
  - Something has changed that will cause the app to behave much differently with the same configuration
- Minor version: Must be changed when a new feature is added or updated (without breaking change nor behavioral change)
- Patch version: Must be changed when any change is made that isn't either Major nor Minor. (Misc, doc, etc.)

#### Release a new version

> Note: You should write the CHANGELOG.md doc before releasing the version. 
This way, it'll be included in the same commit as the built files and version update

Then, release a new version:

- `yarn run release`

This command will prompt you for the version to update to, create a git tag, build the files and commit/push everything automatically.

> Don't forget we are using SemVer, please follow our SemVer rules.

**Pro hint**: use `beta` tag if you're in a work-in-progress (or unsure) to avoid releasing WIP versions that looks legit


### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT
