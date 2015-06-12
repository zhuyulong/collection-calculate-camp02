'use strict';
var _ = require('../lodash/mylodash/mylodash.js');
function collect_last_element(collection) {
  
    return _(collection).reduce(function(a,b){
        return b;
    }).value();
}

module.exports = collect_last_element;
