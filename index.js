'use strict';

function comparator(a, b) {
  return a - b;
}

module.exports = function(arr, cmp) {
  var cmp = cmp || comparator;
  var swapped;
  do {
    swapped = false;
    for (var i = 1; i < arr.length; i++) {
      if (cmp(arr[i], arr[i - 1]) < 0) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}