'use strict';

function collect_all_even(collection) {
    var _ = require('../lodash/mylodash/mylodash.js');

    var array = [];

    var array = _(collection).filter(function(val){
        return  val % 2  === 0;
    }).value();

    return array;
 }
    // var array = [];
    // var collection_a = [1, 2, 3, 4, 5];
    // var collection_b = [2, 4];
    //
    // for(var i = 0; i < collection_a.length; i++){
    //     for(var j = 0; j < collection_b.length; j++){
    //         if(collection_a[i] === collection_b[j]){
    //             array.push(collection_a[i]);
    //         }
    //     }
    // }
    // return array;
    // var evens = _.remove(collection, function(n) {
    // return n % 2 == 0;
    //
    // });
    //
    // return  evens;
// }

module.exports = collect_all_even;
