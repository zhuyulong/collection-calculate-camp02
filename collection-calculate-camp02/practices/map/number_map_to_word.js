'use strict';
var number_map_to_word = function(collection){
    var map = require('../lodash/zhuyulonglodash/map.js');

    return map(collection,item); 
}
  function number(item){
      var array = [];
      array.push(String.fromCharCode(item+97));
      return array;
  }
    //     var array = [];
    //
    //     for(var i = 0; i < collection.length; i++){
    //         array.push(String.fromCharCode(i+97));
    //     }
    //      return array;
    // }
module.exports = number_map_to_word;
