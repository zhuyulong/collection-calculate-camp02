'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = 0;
  var aver = 0;

  for(var i = 0; i < collection.length; i++){
      sum += collection[i];
  }
  aver = sum/collection.length;
  return aver;
}

module.exports = compute_average;
