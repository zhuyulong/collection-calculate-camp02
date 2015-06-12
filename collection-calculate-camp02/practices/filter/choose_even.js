'use strict';

function choose_even(collection) {

  //在这里写入代码
  var _ = require('../lodash/mylodash/mylodash.js');
  var evens = _(collection).filter(function(n){
      return n % 2 == 0;
  }).value();
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
