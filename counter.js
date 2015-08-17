'use strict';

/**
 * This object is used for performance measurement by counting the number of
 * comparison/swap of two numbers in the array.
 */
var counter = {
  incr: function(key) {
    if (this[key] === undefined) {
      this[key] = 0;
    }
    this[key]++;
  },
  reset: function() {
    var keys = this._keys();
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      delete this[key];
    }
  },
  print: function() {
    var keys = this._keys();
    var obj = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      obj[key] = this[key];
    }
    console.log(obj);
  },
  _keys: function() {
    var keys = [];
    for (var key in this) {
      if (typeof this[key] !== 'function') {
        keys.push(key);
      }
    }
    return keys;
  }
};

module.exports = counter;