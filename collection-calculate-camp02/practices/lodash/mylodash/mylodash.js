function _(collection) {
    if (!(this instanceof _)) {
        return new _(collection);//实力化并如果不是对象就将创建一个对象。
    }
    this.collection = collection;
}

_.prototype = {
    contructor: _,
    each: function(fun) {
        for (var i = 0; i < this.collection.length; i++) {
            fun(this.collection[i], i);
        }
    },
    filter: function(fun) {
        var result = [];
        this.each(function (item,i) {
            if (fun(item,i)) {
                result.push(item);
            }
        });
        this.collection = result;
        return this;
    },
    map: function(fun) {
        var result = [];
        this.each(function(collection,i){
        result.push(fun(collection, i));
        });
        this.collection = result;
        return this;
    },
    reduce: function(fun) {
        var temp;
        this.each(function(item, i) {
            if (i === 0) {
                temp = item;
            } else {
                temp = fun(temp, item);
            }
        });
    },
   //  sum: function () {
   //     var result;
   //     this.reduce(function (num_a,num_b) {
   //         result = num_a + num_b;
   //         return result;
   //     });
   //     this.collection = result;
   //     return this;
   // },
   // max: function () {
   //      var result;
   //      this.reduce(function (num_a,num_b) {
   //          result = num_a > num_b ? num_a : num_b;
   //          return result;
   //      });
   //      this.collection = result;
   //      return this;
   //  },
   //  min: function () {
   //      var result;
   //      this.reduce(function (num_a,num_b) {
   //          result = num_a < num_b ? num_a : num_b;
   //          return result;
   //      });
   //      this.collection = result;
   //      return this;
   //  },
    value: function() {
        return this.collection;
    }
}


module.exports = _;
