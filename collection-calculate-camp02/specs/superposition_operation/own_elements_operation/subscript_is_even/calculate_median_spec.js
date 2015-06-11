'use strict';
var calculate_median = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/calculate_median.js');

describe('calculate_median_spec', function () {
    var collection_a = [1, 2, 3, 4, 5, 6];
    var collection_b = [2, 3, 4, 5, 6, 7, 8, 9, 0];

    it('集合个数为偶数时，算中位数', function () {
        var result = calculate_median(collection_a);
        expect(result).toEqual(4);
    });

    it('集合个数为奇数时，算中位数', function () {
        var result = calculate_median(collection_b);
        expect(result).toEqual(6);
    });
});
