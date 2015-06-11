'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
 //  var reduce = require('../lodash/zhuyulonglodash/reduce.js');
 //  var list = reduce(collection_a,collection_b,function(a,b){
 //      if(collection_a === collection_b){
 //          list = true;
 //      }
 //  });
 //  return list;
 // }
  var list ;
  for(var i = 0; i < collection_a.length ; i++){
      for(var j = 0; j < collection_b.length; j++){
          if(collection_a[i] === collection_b[j]){
              list =true;
          }
      }
  }
  return list;
}

module.exports = compare_collections;
