'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  //var _ = require('../lodash/array');
  var array = [];

    if(number_a < number_b){
        for(var i = number_a; i <= number_b; i++){
            if(i % 2 == 0){
                array.push(i);
            }
        }
        return array;
    }
    if(number_a > number_b){
        for(var i = number_a; i >= number_b; i--){
            if(i % 2 == 0){
                array.push(i);
            }
        }
        return array;
    }
    if((number_a === number_b) && (number_a % 2 === 0)){
        return  [number_a];
    }
    return [];
}

module.exports = get_integer_interval_2;
