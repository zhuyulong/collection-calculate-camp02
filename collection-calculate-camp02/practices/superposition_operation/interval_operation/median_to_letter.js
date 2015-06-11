'use strict';

function median_to_letter(collection) {
  //未完
  var temp = [];
  var median =0;
  collection.sort();
  if (collection.length % 2 ===0) {
    var number_a = collection[collection.length / 2];
    var number_b =collection[(collection.length / 2) + 1];
    median = Math.ceil(((number_a + number_b) / 2));
  }else {
    median = collection[(collection.length + 1) / 2];
  }
  var first_world = String.fromCharCode( Math.floor(median / 10) + 94);
  var second_world = String.fromCharCode((median % 10)  + 94);
  return first_world + second_world;

}

module.exports = median_to_letter;
