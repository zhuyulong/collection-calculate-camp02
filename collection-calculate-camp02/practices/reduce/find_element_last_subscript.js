'use strict';
var _ = require('../lodash/zhuyulonglodash/zhuyulong.js');

function calculate_elements_sum(collection, element) {
  //在这里写入代码
    var result = 0;

    each(collection, function(n, i){
        if(n === element) {
                result = i;
            }
    });
    return result;
}

function each(collection, arr) {
    for (var i = 0; i < collection.length; i++) {
        arr(collection[i], i);
    }
}
//   var count = 0;
//   for(var i = collection.length; i >=0; i--){
//         if(collection[i] != element){
//             count++;
//         }else{
//              break;
//         }
//   }
//   return count;
// }

module.exports = calculate_elements_sum;
