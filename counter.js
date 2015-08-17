'use strict';

/**
 * This object is used for performance measurement by counting the number of
 * comparison/swap of two numbers in the array.
 */
var counter = {
  _comparisonCount: 0,
  _swapCount: 0,
  compared: function() {
    this._comparisonCount++;
  },
  swapped: function() {
    this._swapCount++;
  },
  print: function() {
    console.log('comparisons: %d, swaps: %d', this._comparisonCount, this._swapCount);
    this._reset();
  },
  _reset: function() {
    this._comparisonCount = 0;
    this._swapCount = 0;
  }
};

module.exports = counter;