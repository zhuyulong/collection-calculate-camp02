'use strict';

function get_number(number_a,number_b){
    var array = [];

    for(var i = number_a; i <= number_b; i++){
        array.push(i);
    }
    return array;
}
function get_number2(number_a,number_b){
    var array = [];

    for(var i = number_a; i >= number_b; i--){
        array.push(i);
    }
    return array;
}
function get_integer_interval(number_a, number_b) {
//在这里写入代码
//var _ = require('../lodash/array');

    if(number_a < number_b){
    return get_number(number_a,number_b);
    }
    if(number_a > number_b){
        
    return get_number2(number_a,number_b);
    }
    return  [number_a];
}

module.exports = get_integer_interval;
