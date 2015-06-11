'use strict';

function average_to_letter(collection) {
  var sum = 0;
  var even = 0;
  var result;
  for (var i = 0; i < collection.length; i++) {
    sum +=collection[i];
  }
  even = Math.ceil(sum/collection.length - 1);
  result = String.fromCharCode(even + 97);
  return result;
}


module.exports = average_to_letter;
