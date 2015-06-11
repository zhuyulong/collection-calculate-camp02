'use strict';

function grouping_count(collection) {
  //在这里写入代码.
var _ = require('../lodash/zhuyulonglodash/each.js');

    var temp = {};
    _.each(collection, function(n) {
      temp[n] = temp[n] || 0;
      temp[n] ++ ;
  });
    return temp;
}

module.exports = grouping_count;
