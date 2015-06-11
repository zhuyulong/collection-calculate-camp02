'use strict';

function hybrid_operation_to_uneven(collection) {
  var temp = [];
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !==0) {
      temp.push(collection[i]);
    }
  }
  for (var i = 0; i < temp.length; i++) {
    result.push(temp[i] * 3 + 2);
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;
