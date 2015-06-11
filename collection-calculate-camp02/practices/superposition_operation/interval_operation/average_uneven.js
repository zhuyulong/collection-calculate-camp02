'use strict';

function average_uneven(collection) {
  var sum = 0;
  var even = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      sum += collection[i];
    }
  }
  return even = sum/((collection.length / 2));
}

module.exports = average_uneven;
