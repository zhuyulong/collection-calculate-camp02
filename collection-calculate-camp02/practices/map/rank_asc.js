'use strict';
var rank_asc = function(collection){

    var temp = 0 ;

    for(var i = 0; i < collection.length; i++){
        for(var j = i ; j < collection.length; j++){
            if(collection[i] < collection [j]){
                temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }
    return collection;
}

module.exports = rank_asc;
