

(function () {
    var x=20;
    var y=50;
   try {
     throw new Error();
   } catch (x) {
     var x = 1;
     var y = 2;
     console.log(x);
   }
     console.log(x);
     console.log(y);
  })();
  
  var b = 1;  
  const that=this;
  
  function outer() {
   const self = this;
   console.log(b)  
   console.log(self.b);
   var b = 2;
   console.log(that.b);
   console.log(b); 
   const inner=()=> {
     t;hat.b = 10
     console.log(this.b);  
     this.b=50; 
     console.log(b) 
     b=that.b+this.b; 
     console.log(b);   
     var b = 20;
     console.log(b);  
   }
   inner();
  }
  outer();


  Promise.reject('Success!')
  .then((res) => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that failed
  })
  .then(data => {
    throw Error(data)
  })
  .catch(error =>
    console.log(error.message))
  .finally(()=>{
  console.log("done")
})


var length = 10;
function fn() {
 var length=15;
 console.log(this.length);
}
 
var obj = {
 length: 5,
 method(fn){
   fn.call(this); 
   fn.call(obj);
   fn();   
   arguments[0]();
},
};

obj.method(fn, 2); 


  
    