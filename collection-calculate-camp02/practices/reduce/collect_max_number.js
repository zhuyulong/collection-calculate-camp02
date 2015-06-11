'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var reduce = require('../lodash/zhuyulonglodash/reduce.js');
  var max = reduce(collection,function(a,b){
      return Math.max(a,b);
  });
  return max;
 }
//   var max = 0;
//
//   for(var i = 0; i < collection.length; i++){
//      if(collection[max] < collection[i]){
//          collection[max] = collection[i];
//          max = collection[i];
//      }
//   }
//   return collection[max];
// }

module.exports = collect_max_number;
