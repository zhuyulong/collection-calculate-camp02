'use strict';
var calculate_average = function(collection){
    var aver = 0 ;
    var sum = 0;
    for(var i = 0 ; i < collection.length; i++){
        if(collection[i] %2 === 0 ){
            sum += collection[i];
            aver = parseInt(sum/collection.length);
        }else if(collection[i] %2 != 0){
            sum += collection[i];
            aver =parseInt(sum/collection.length);
        }
    }
    return aver;
}
module.exports = calculate_average;
