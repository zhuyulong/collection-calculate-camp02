'use strict';
function map_to_even(collection_a){

     var map = require('../lodash/zhuyulonglodash/map.js');
        return map(collection_a,timesOne);
    }
          function timesOne(n) {
           return n * 2;
         }
   // var array = [];
   //
   //  for (var i = 0; i < collection_a.length; i++) {
   //      array.push(collection_a[i] * 2) ;
    // }
   //  return array;
module.exports = map_to_even;
