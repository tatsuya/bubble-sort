'use strict';

/**
 * The counter used for performance measurement.
 */
// var counter = require('./counter');

function comparator(a, b) {
  return a - b;
}

/**
 * After every pass, all elements after the last swap are sorted, and do not
 * need to be checked again. This allows us to skip over a lot of the elements,
 * resulting in about a worst case 50% improvement in comparison count (though
 * no improvement in swap counts), and adds very little complexity because the
 * new code subsumes the "swapped" variable:
 */
module.exports = function(arr, cmp) {
  var cmp = cmp || comparator;
  var length = arr.length;
  var newLength;
  do {
    newLength = 0;
    for (var i = 1; i < length; i++) {
      // counter.incr('compared');
      if (cmp(arr[i], arr[i - 1]) < 0) {
        // counter.incr('swapped');
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        newLength = i;
      }
    }
    length = newLength;
  } while (length > 0);
  // counter.print();
  // counter.reset();
  return arr;
}