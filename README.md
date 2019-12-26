# 🤏 Truncate Sentences

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/truncate-sentences.svg)](https://travis-ci.org/AnandChowdhary/truncate-sentences)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/truncate-sentences/badge.svg?branch=master&v=2)](https://coveralls.io/github/AnandChowdhary/truncate-sentences?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/truncate-sentences.svg)](https://github.com/AnandChowdhary/truncate-sentences/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/truncate-sentences.svg)
![NPM type definitions](https://img.shields.io/npm/types/truncate-sentences.svg)
[![NPM](https://img.shields.io/npm/v/truncate-sentences.svg)](https://www.npmjs.com/package/truncate-sentences)

[![NPM](https://nodei.co/npm/truncate-sentences.png)](https://www.npmjs.com/package/truncate-sentences)

A Node.js package to simply truncate a paragraph to sentences. It uses [Natural](https://github.com/NaturalNode/natural) under the hood to tokenize sentences and return a string.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install truncate-sentences
```

Truncate a paragraph:

```js
import truncate from "truncate-sentences";

truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus.", 200);

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem.
```

If the first sentence is already longer than the limit, it adds an ellipsis (`...`) at the end.

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📝 License

MIT
