'use strict';

function compute_median(collection) {
  //在这里写入代码
  var temp = 0 ;

  for(var i = 0; i < collection.length; i++){
      for(var j = i; j < collection.length; j++){
          if(collection[i] > collection[j]){
              temp = collection[i];
              collection[i] = collection[j];
              collection[j] = temp;
          }
      }
  }

  var nummid = 0;

  if(collection.length % 2 === 0){
      nummid = 	(collection[collection.length/2-1] + collection[collection.length/2])/2;
  }else{
      nummid = collection[parseInt(collection.length/2)];
  }
  return nummid;
}

module.exports = compute_median;
