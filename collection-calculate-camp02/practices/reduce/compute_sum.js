'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
    var _ = require('../lodash/zhuyulonglodash/reduce.js');
    var sum = _.reduce(collection,function(a,b){
        return a+b;
    });
    return sum;
}
//   var sum = 0;
//   for(var i = 0; i < collection.length; i++){
//       sum += collection[i];
//   }
//   return sum ;
// }

module.exports = calculate_elements_sum;
