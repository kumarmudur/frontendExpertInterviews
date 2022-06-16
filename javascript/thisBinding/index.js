Function.prototype.myCall = function (thisContext, ...args) {
    // Write your code here.
  
    const symbol = Symbol();
    thisContext[symbol] = this;
  
    const returnValue = thisContext[symbol](...args);
    delete thisContext[symbol];
  
    return returnValue;
};
  
Function.prototype.myApply = function (thisContext, args = []) {
    // Write your code here.
    return this.myCall(thisContext, ...args);
};
  
Function.prototype.myBind = function (thisContext, ...args) {
    // Write your code here.
    return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
};
  