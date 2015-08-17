'use strict';

/**
 * The counter used for performance mesurement.
 */
// var counter = require('./counter');

function comparator(a, b) {
  return a - b;
}

module.exports = function(arr, cmp) {
  var cmp = cmp || comparator;
  var swapped;
  do {
    swapped = false;
    for (var i = 1; i < arr.length; i++) {
      // counter.compared();
      if (cmp(arr[i], arr[i - 1]) < 0) {
        // counter.swapped();
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // counter.print();
  return arr;
}