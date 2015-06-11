'use strict';

function choose_even(collection) {

  //在这里写入代码
  var filter = require('../lodash/zhuyulonglodash/fiter.js');
  var evens = filter(collection, function(n){
      return n % 2 == 0;
  });
  return evens;
 }
//   var array=[];
//
//   for(var i=0; i<collection.length; i++){
//       if(collection[i] % 2 == 0){
//           array.push(collection[i]);
//       }
//   }
//   return array;
// }

module.exports = choose_even;
