'use strict';

function grouping_count(collection) {
  //在这里写入代码.
var _ = require('../lodash/mylodash/mylodash.js');

    var temp = {};

    _(collection).each(function(n){
      temp[n] = temp[n] || 0;
      temp[n] ++ ;
  });
    return temp;
}

module.exports = grouping_count;
