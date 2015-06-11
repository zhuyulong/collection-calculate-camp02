'use strict';

function hybrid_operation(collection) {
  var temp = [];
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    temp.push((collection[i] * 3) + 2);
  }
  for (var x = 0; x < temp.length; x++) {
    sum +=temp[x];
  }
  return sum;
}

module.exports = hybrid_operation;
