'use strict';

/**
 * The counter used for performance measurement.
 */
// var counter = require('./counter');

function comparator(a, b) {
  return a - b;
}

/**
 * The bubble sort algorithm can be easily optimized by observing that the n-th
 * pass finds the n-th largest element and puts it into its final place. So, the
 * inner loop can avoid looking at the last n-1 items when running for the n-th
 * time.
 */
module.exports = function(arr, cmp) {
  var cmp = cmp || comparator;
  var length = arr.length;
  var swapped;
  do {
    swapped = false;
    for (var i = 1; i < length; i++) {
      // counter.incr('compared');
      if (cmp(arr[i], arr[i - 1]) < 0) {
        // counter.incr('swapped');
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
    }
    length--;
  } while (swapped);
  // counter.print();
  // counter.reset();
  return arr;
}