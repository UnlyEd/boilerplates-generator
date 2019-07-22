# Boilerplates generator

This package provides ready-to-use projects (boilerplates). 
See [Getting started](#getting-started) for usage.

<!-- toc -->

- [Boilerplates](#boilerplates)
  * [- node-v12.6-package-MIT](#--node-v126-package-mit)
  * [- node-v10.10-aws-serverless](#--node-v1010-aws-serverless)
  * [- node-v8.10-package-MIT](#--node-v810-package-mit)
  * [~~- node-v8.10-aws-serverless~~ (deprecated)](#--node-v810-aws-serverless-deprecated)
  * [~~- node-v6.10-aws-serverless~~ (deprecated)](#--node-v610-aws-serverless-deprecated)
- [Getting started](#getting-started)
- [Usage](#usage)
  * [With global installation](#with-global-installation)
  * [Local install](#local-install)

<!-- tocstop -->

## Boilerplates

Here is a complete list of all available boilerplates and what's their goal.


### - node-v12.6-package-MIT

A Node 12.6 open source package (MIT license).

> Meant for a quick start with libraries meant to be published under the MIT licence (NPM)

### - node-v10.10-aws-serverless

A Serverless project using Node 10.10 and AWS provider.

> Meant for a quick start with web apps (API, crons, etc.) meant to be deployed on AWS Lambda.

### - node-v8.10-package-MIT

A Node 8.10 open source package (MIT license).

> Meant for a quick start with libraries meant to be published under the MIT licence (NPM)

### ~~- node-v8.10-aws-serverless~~ (deprecated)

A Serverless project using Node 8.10 and AWS provider.

> Deprecated because node 8.10 is EOL and will stop working on AWS Lambda around April 2020.

### ~~- node-v6.10-aws-serverless~~ (deprecated)

A Serverless project using Node 6.10 and AWS provider.

> Deprecated because node 6.10 isn't supported by AWS Lambda since April 2019.

## Getting started

You can either install the package globally or locally.
If you install it globally, then you can create skeletons using a global node command.
If you install it locally, then you can create skeletons by calling the `yarn start` command from within the project folder.

The choice is yours, we believe it is harder to reason about the package's changes when installed globally. 
So we rather recommend the local installation.

## Usage

### With global installation
Install:
```
npm install -g https://github.com/UnlyEd/boilerplates-generator
```

Usage:
`unly-generate-skeleton` (starts the CLI, use arrow-keys)

### Local install
`git clone git@github.com:UnlyEd/boilerplates-generator.git`
`cd boilerplates-generator`
`yarn start` (starts the CLI, use arrow-keys)
