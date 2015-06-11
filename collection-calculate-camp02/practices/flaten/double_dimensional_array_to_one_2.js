'use strict';

function double_to_one(collection) {

  //在这里写入代码
  // var _ =require('../lodash/array');
  // var array=_.flatten(collection);
  // var result=_.union(array);
  // return result;
  var array = [];

  for(var i = 0; i < collection.length; i++){
          for(var j = 0 ;j < collection[i].length; j++){
              array.push(collection[i][j]);
          }
  }

  var temp = [];

  for(var i = 0; i < array.length; i++){
      var exist = false;

      for(var j = 0; j < temp.length; j++){
          if(array[i] === temp[j]){
              exist = true;
              break;
          }
      }
      if(!exist){
          temp.push(array[i]);
      }
  }
  return temp;
}

module.exports = double_to_one;
