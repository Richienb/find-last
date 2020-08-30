"use strict"

const findLastIndex = require("find-last-index")

module.exports = (array, predicate) => array[findLastIndex(array, predicate)]
