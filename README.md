 <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
[![Maintainability](https://api.codeclimate.com/v1/badges/73c7f933ea88c7f1c239/maintainability)](https://codeclimate.com/github/UnlyEd/boilerplates-generator/maintainability)

# Boilerplates generator

This package provides ready-to-use projects (boilerplates). 
See [Getting started](#getting-started) for usage.

<!-- toc -->

- [Boilerplates](#boilerplates)
  * [- Next.js TypeScript on Zeit Now (universal app with API focus)](#--nextjs-typescript-on-zeit-now-universal-app-with-api-focus)
  * [- node-v10.x-aws-serverless](#--node-v10x-aws-serverless)
  * [- node-v10.x-aws-serverless-with-serverless-bundle](#--node-v10x-aws-serverless-with-serverless-bundle)
  * [- typescript-v3.5.2-OSS](#--typescript-v352-oss)
  * [- node-v8.10-package-OSS](#--node-v810-package-oss)
  * [~~- node-v12.6-package-OSS~~ **(webpack broken, awaiting fix)**](#--node-v126-package-oss-webpack-broken-awaiting-fix)
  * [~~- node-v8.10-aws-serverless~~ (deprecated)](#--node-v810-aws-serverless-deprecated)
  * [~~- node-v6.10-aws-serverless~~ (deprecated)](#--node-v610-aws-serverless-deprecated)
- [Getting started](#getting-started)
- [Usage](#usage)
  * [With global installation](#with-global-installation)
  * [Local install](#local-install)

<!-- tocstop -->

## Boilerplates

Here is a complete list of all available boilerplates and what's their goal.

In order to use a template, you can either generate it through our CLI (see [Getting started](#getting-started)), or clone the repository and copy/paste the template you're interested about.

Each template has it's own documentation.

All templates come with:
- Unit tests (Jest + Jest Extended)
- CI, using [AWS CodeBuild](https://aws.amazon.com/fr/codebuild/) (similar to Travis, but Travis is expensive for non open source projects)
- Handles CodeClimate Coverage report (which is kinda hard to get right, and require to [manually configure CodeBuild to fetch more than one commit](https://github.com/codeclimate/test-reporter/issues/379) in order to work)
- [CodeClimate "Quality"](https://codeclimate.com/) configuration, for those who want to use it (free for open source projects)

Templates meant to be used to release open source packages (marked as "OSS") come with:
- Travis CI (doesn't handle CodeClimate Coverage report, yet #goodFirstPR)
- Utilities meant to help to release/publish versions to NPM

### - Next.js TypeScript on Zeit Now (universal app with API focus)

> This template can be used to get started very quickly with a universal Next.js app (client + server navigations) using **TypeScript**, powered by Zeit Now platform for hosting.
> It is especially meant to build backend services, such as API, etc.
>
> It's just a one click away! 
> [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/UnlyEd/next-typescript-api-zeit-boilerplate)

[Go to template](./templates/next-typescript-api-zeit)

### - node-v10.x-aws-serverless

> This template can be used to get started quickly with AWS Lambda, using the official node.js v10.x runtime.
> It is especially meant to build backend services, such as API, crons, etc.
>
> It includes a lot of good defaults, meant to help developers. It is entirely customisable and is meant to be flexible.

[Go to template](./templates/node-v10.x-aws-serverless)

### - node-v10.x-aws-serverless-with-serverless-bundle

> This template can be used to get started quickly with AWS Lambda, using the official node.js v10.x runtime.
> It is especially meant to build backend services, such as API, crons, etc.
> It includes a lot of good defaults, meant to help developers. 
>
> It uses serverless-bundle instead of serverless-webpack, which isn't meant to be customised (no custom babel/webpack) 
> but much easier to maintain (since there is no babel/webpack config to maintain).

[Go to template](./templates/node-v10.x-aws-serverless-with-serverless-bundle)

### - typescript-v3.5.2-OSS

> This template can be used to get started quickly with a node.js package meant to be released as open source package (OSS license), using TypeScript.
> It includes utilities meant to help to release/publish versions to NPM.

[Go to template](./templates/typescript-v3.5.2-OSS)

### - node-v8.10-package-OSS

> This template can be used to get started quickly with a node.js package meant to be released as open source package (OSS license), using Node 8.10.
> It includes utilities meant to help to release/publish versions to NPM.

[Go to template](templates/node-v8.10-package-OSS)

### ~~- node-v12.6-package-OSS~~ **(webpack broken, awaiting fix)**

> This template can be used to get started quickly with a node.js package meant to be released as open source package (OSS license), using Node 12.6.
> It includes utilities meant to help to release/publish versions to NPM.

[Go to template](templates/node-v12.6.0-package-OSS)

### ~~- node-v8.10-aws-serverless~~ (deprecated)

> _Deprecated because node 8.10 is EOL and will stop working on AWS Lambda around April 2020._

[Go to template](./templates/node-v8.10-aws-serverless)

### ~~- node-v6.10-aws-serverless~~ (deprecated)

> _Deprecated because node 6.10 isn't supported by AWS Lambda since April 2019._

[Go to template](./templates/node-v6.10-aws-serverless)

## Getting started

You can either install the package **globally** or **locally**.
If you install it **globally**, then you can create skeletons using a global node command.
If you install it **locally**, then you can create skeletons by calling the `yarn start` command from within the project folder.

The choice is yours, we believe it is harder to reason about the package's changes when installed globally. 
So we rather recommend the local installation.

## Usage

### With global installation
Install:

```
npm install -g https://github.com/UnlyEd/boilerplates-generator
```

Usage:
- `unly-boilerplate-generator` (starts the CLI, use arrow-keys)

### Local install
- `git clone git@github.com:UnlyEd/boilerplates-generator.git`
- `cd boilerplates-generator`
- `yarn start` (starts the CLI, use arrow-keys)

---

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

Thanks to our contributors:
- Anthony Troupenat ([Fukoyamashisu](https://github.com/Fukoyamashisu))
- Hugo Martin ([Demmonius](https://github.com/Demmonius))

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
