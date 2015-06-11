'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  // var _ = require('../lodash/array');
  //
  // var array=_.uniq(collection);
  //
  // return array;
  var array = [];

  for(var i = 0; i < collection.length; i++){
      var exist = false;
      for(var j = 0; j < array.length; j++){
          if(collection[i] === array[j]){
              exist = true;
              break;
          }
      }if(!exist){
          array.push(collection[i]);
      }
  }
  return array;
}

module.exports = choose_no_repeat_number;
