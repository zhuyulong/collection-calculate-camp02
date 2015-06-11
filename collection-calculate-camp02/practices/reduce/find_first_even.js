'use strict';
var _ = require('../lodash/zhuyulonglodash/zhuyulong.js');

function find_first_even(collection) {
  //在这里写入代码
  var first = _.filter(collection,function(n){
         if(n % 2 == 0) {
             return n;
         }
     })

     return _.reduce(first,function(a,b){
         return a;
     })
 }
//   var odd = 0;
//   for(var i = 0 ; i < collection.length; i++){
//       if(collection[i] %2 === 0){
//           odd = collection[i];
//           break;
//       }
//   }
//   return odd;
// }

module.exports = find_first_even;
