# find-last [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/find-last/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/find-last)

Like Array#find but searches the array backwards.

[![NPM Badge](https://nodei.co/npm/find-last.png)](https://npmjs.com/package/find-last)

## Install

```sh
npm install find-last
```

## Usage

```js
const findLast = require("find-last");

findLast(["a", "b", "bba", "cc", "d"], value => value.includes("a"));
//=> "bba"
```

## API

### findLast(array, predicate)

#### array

Type: `array`

The array to search.

#### predicate

Type: `(item, index, array) => boolean`

The predicate function to call on each item.
