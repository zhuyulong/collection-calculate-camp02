'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var array = [];
  var array_1 = [];

  array = collection.split('->');
  for(var i = 0; i < array.length ; i++){
      array_1.push(parseInt(array[i]));
  }

  var temp = 0 ;

  for(var i = 0; i < array_1.length; i++){
    for(var j = i; j < array_1.length; j++){
        if(array_1[i] > array_1[j]){
            temp = array_1[i];
            array_1[i] = array_1[j];
            array_1[j] = temp;
        }
    }
  }

  var nummid = 0;

  if(array_1.length % 2 === 0){
      nummid = (array_1[array_1.length/2-1] + array_1[array_1.length/2])/2;
  }else{
      nummid = array_1[parseInt(array_1.length/2)];
  }
  return nummid;
}
module.exports = compute_chain_median;
