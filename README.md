# bubble-sort

Bubble Sort implementation.

## Usage

Ascending order.

```js
var sort = require('bubble-sort');

sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]);
// => [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]
```

Descending order.

```js
function desc(a, b) {
  return b - a;
}
sort([4, 2, 2, 6, 1, 3], desc);
// => [6, 4, 3, 2, 2, 1]
```

Sort objects.

```js
function comparePets(a, b) {
  return a.age - b.age;
}
var pets = [
  { kind: 'bird', age: 3 },
  { kind: 'cat', age: 5 },
  { kind: 'dog', age: 2 }
];
sort(pets, comparePats);
/*
=> [
  { kind: 'dog', age: 2 },
  { kind: 'bird', age: 3 },
  { kind: 'cat', age: 5 }
]
*/
```
