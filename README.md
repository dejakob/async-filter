# async-filter

[![Build Status](https://travis-ci.org/dejakob/async-filter.svg?branch=master)](https://travis-ci.org/dejakob/async-filter)
[![NPM](https://img.shields.io/npm/v/alegrify-async-filter/latest.svg?label=npm)](https://npmjs.com/package/alegrify-async-filter)

Array.prototype.filter, but with async callbacks

## Usage

```js
const asyncFilter = require('alegrify-async-filter');

const items = [1, 2, 3];
const filteredItems = asyncFilter(items, async (element, index, array) => {
  return await someTest(element);
});
```
