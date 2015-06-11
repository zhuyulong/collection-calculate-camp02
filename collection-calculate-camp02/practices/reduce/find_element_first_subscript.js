'use strict';
var _ = require('../lodash/zhuyulonglodash/reduce.js');

function calculate_elements_sum(collection, element) {
  //在这里写入代码
    var exist  = true;
    var count = 0;
    var number = -1;
    _.each(collection,function(a){
        if(element === a && exist){
            number = count;
            exist = false;
        }
        count ++;
    });
    return number;
}
//   var count = 0;
//
//   for(var i = 0; i < collection.length; i++){
//       if(element != collection[i]){
//           count++;
//       }else{
//           break;
//       }
//   }
//   return count;
// }
module.exports = calculate_elements_sum;
