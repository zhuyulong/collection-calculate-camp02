'use strict';
var _ = require('../lodash/zhuyulonglodash/zhuyulong.js');

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
    return _.inter(collection_b, collection_a);
}
//   var array = [];
//
//   for(var i = 0; i < collection_b.length; i++){
//       for(var j = 0; j < collection_a.length; j++){
//           if(collection_b[i] === collection_a[j]){
//               array[array.length] = collection_b[i];
//           }
//       }
//  }
//  return array;
// }
module.exports = get_intersection;
