/**
Like Array#find but searches the array backwards.
@param array The array to search.
@param predicate The predicate function to call on each item.
@example
```
const findLast = require("find-last");

findLast(["a", "b", "bba", "cc", "d"], value => value.includes("a"));
//=> "bba"
```
*/
declare function findLast<ValueType, ArrayType extends readonly ValueType[]>(array: ArrayType, predicate: (item: ValueType, index: number, array: ArrayType) => boolean): ValueType | undefined

export = findLast
