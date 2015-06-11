'use strict';

function hybrid_operation_to_uneven(collection) {
  var temp = [];
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      temp.push(collection[i] * 3 + 5);
    }
  }

  for (var x = 0; x < temp.length; x++) {
    sum +=temp[x];
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;
