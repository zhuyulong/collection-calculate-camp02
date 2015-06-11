'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  // var _ = require('../lodash/array');
  // var array=_.xor(collection_a,collection_b);
  //
  // return array;
  var array=[];

  for(var i=0; i < collection_a.length; i++){
      var exist = false;
      for(var j=0; j < collection_b.length; j++){
          if(collection_a[i] === collection_b[j]){
              exist = true;
              break;
          }
      }
      if(!exist){
          array.push(collection_a[i]);
      }
  }
  return array;
}

module.exports = choose_no_common_elements;
