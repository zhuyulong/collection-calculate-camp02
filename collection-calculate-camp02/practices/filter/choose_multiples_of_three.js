'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var filter= require('../lodash/zhuyulonglodash/fiter.js');
  var evens = filter(collection, function(n){
      return n % 3 == 0;
  });
  return evens;
 }
//   var array=[];
//
//   for(var i=0; i<collection.length; i++){
//       if(collection[i] % 3 == 0){
//           array.push(collection[i]);
//       }
//   }
//   return array;
// }

module.exports = choose_multiples_of_three;
