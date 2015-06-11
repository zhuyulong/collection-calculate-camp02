'use strict';

function even_to_letter(collection) {
  var even = [];
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if ( collection[i] % 2 ===0) {
      even.push(collection[i]);
    }
  }

  for (var x = 0; x < even.length; x++) {
    result.push(String.fromCharCode(even[x] + 96));
  }
  return result;
}

module.exports = even_to_letter;
