'use strict';
var number_map_to_word_over_26 = function(collection){
    // var _ = require('../lodash/array');
    //
    // var array=_.union(collection_a,collection_b);
    // return array;
    // }
    var map = [];
    var SIMPLE = 26;

    for(var i = 0; i < collection.length; i++) {
        var x =collection[i];
        var letter = [] ;

        x = collection[i]/SIMPLE > 1 ? parseInt(collection[i]/SIMPLE) : x
        if(collection[i] > SIMPLE) {
            collection[i] -= SIMPLE;
            letter = String.fromCharCode(x+96);
            }
            letter += String.fromCharCode(collection[i]+96);
            map.push(letter);
    }
    return map;
}


module.exports = number_map_to_word_over_26;
