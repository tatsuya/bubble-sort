'use strict';

var assert = require('assert');

test(require('./'));
test(require('./optimized-1'));
test(require('./optimized-2'));

function test(sort) {
  describe('bubble-sort', function() {
    it('should work with empty arrays', function() {
      assert.deepEqual(sort([]), []);
    });

    it('should work with ascending sorted arrays', function() {
      assert.deepEqual(sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]), [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
      assert.deepEqual(sort([9, 2, 8, 6, 1, 3]), [1, 2, 3, 6, 8, 9]);
      assert.deepEqual(sort([5, 2, 2, 6, 1, 3]), [1, 2, 2, 3, 5, 6]);
      assert.deepEqual(sort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual(sort([0, 0, 0, 0, 0, -1]), [-1, 0, 0, 0, 0, 0]);
    });

    it('should work with descending sorted arrays', function () {
      function desc(a, b) {
        return b - a;
      }
      assert.deepEqual(sort([4, 2, 2, 6, 1, 3], desc), [6, 4, 3, 2, 2, 1]);
      assert.deepEqual(sort([0, 0, 0, 0, 0, 1], desc), [1, 0, 0, 0, 0, 0]);
      assert.deepEqual(sort([0, 0, 0, 0, 0, -1], desc), [0, 0, 0, 0, 0, -1]);
    });


    it('should work with ascending arrays of objects', function() {
      function comparePets(a, b) {
        return a.age - b.age;
      }
      var pets = [
        { kind: 'bird', age: 3 },
        { kind: 'cat', age: 5 },
        { kind: 'dog', age: 2 }
      ];
      assert.deepEqual(sort(pets, comparePets), [
        { kind: 'dog', age: 2 },
        { kind: 'bird', age: 3 },
        { kind: 'cat', age: 5 }
      ]);
    });
  });
}

