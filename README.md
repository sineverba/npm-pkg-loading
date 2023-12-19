Loading
=======

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Floading.svg)](https://badge.fury.io/js/%40sineverba%2Floading) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-loading/branches/master.svg?style=shields&key=96116fb6-cff3-4bd6-bf17-35519e01df20)](https://sineverba.semaphoreci.com/projects/npm-pkg-loading) |
| Circle CI | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/sineverba/npm-pkg-loading/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/sineverba/npm-pkg-loading/tree/master) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-loading/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-loading?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-years-interval&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=npm-pkg-years-interval) |


`loading` generates a simple loader to use in React projects.

### Installation
`npm install @sineverba/loading@0.2.0` to install generic React version

### Usage

```js
import {Loading} from "@sineverba/loading";

const Example = () => <Loading />:

export default Example;
```

### Props

| Name | Type | Default value |
| ---- | ---- | ------------- |
| Size | Size Props (string) | 2xl |

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
