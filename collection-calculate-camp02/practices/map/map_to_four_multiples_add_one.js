'use strict';
var map_to_four_multiples_add_one = function(collection){
    var map = require('../lodash/zhuyulonglodash/map.js');
        return map(collection,timesTwo);
    }
         function timesTwo(n) {
             return (n * 4) + 1;
          }
//    var array = [];
//
//    for(var i = 0; i < collection.length; i++){
//        array.push(collection[i] * 4 + 1);
//    }
//    return array;
// }



module.exports = map_to_four_multiples_add_one;
