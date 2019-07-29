# PROJECT-NAME

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
