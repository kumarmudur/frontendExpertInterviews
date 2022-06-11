Array.prototype.myMap = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      output.push(callback(this[i], i, this));
    }
    return output;
  };
  
Array.prototype.myFilter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        output.push(this[i]);
      }
    }
    return output;
  };
  
Array.prototype.myReduce = function (callback, initialValue) {
    let accumalator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (i === 0 && initialValue === undefined) {
        accumalator = this[i];
      } else {
        accumalator = callback(accumalator, this[i], i, this);
      }
    }
    return accumalator;
  };
  