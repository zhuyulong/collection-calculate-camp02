'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  //var _ = require('../lodash/array');

  var array=[];

  if(number_a < number_b){
      for(var i = number_a; i <= number_b; i++){
          array.push(String.fromCharCode(i+96));
      }
      return array;
  }
  if(number_a > number_b){
      for(var i = number_a; i >= number_b; i--){
          array.push(String.fromCharCode(i+96));
      }
      return array;
  }
   return [String.fromCharCode(number_a+96)];
}

module.exports = get_letter_interval;
