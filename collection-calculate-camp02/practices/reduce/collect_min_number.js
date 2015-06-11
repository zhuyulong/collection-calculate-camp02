'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var reduce = require('../lodash/zhuyulonglodash/reduce.js');
  var max = reduce(collection,function(a,b){
      return Math.min(a,b);
  });
  return max;
}
//   var min = 0;
//
//   for(var i = 0; i < collection.length; i++){
//      if(collection[min] > collection[i]){
//          collection[min] = collection[i];
//          min = collection[i];
//      }
//   }
//   return collection[min];
// }

module.exports = collect_min_number;
