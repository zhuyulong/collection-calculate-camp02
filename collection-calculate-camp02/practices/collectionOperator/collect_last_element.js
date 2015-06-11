'use strict';

function collect_last_element(collection) {
  var _ = require('../lodash/mylodash/mylodash.js');

    var num = _(collection).each(function(val){
        return ;
    }).value;
    return num;
}

module.exports = collect_last_element;
