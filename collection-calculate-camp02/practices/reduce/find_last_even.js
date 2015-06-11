'use strict';
var _ = require('../lodash/zhuyulonglodash/zhuyulong.js');

function find_last_even(collection) {
  //在这里写入代码
  var last = _.filter(collection,function(n){
         if(n % 2 == 0) {
             return n;
         }
     })

     return _.reduce(last,function(a,b){
         return b;
     })
 }
  // var lastodd = 0;
  // for(var i = 0 ; i < collection.length; i++){
  //     if(collection[i] %2 === 0){
  //         lastodd = collection[i];
  //     }
  // }
  // return lastodd;
//}
module.exports = find_last_even;
