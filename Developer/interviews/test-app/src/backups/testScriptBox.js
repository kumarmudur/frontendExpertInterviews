// ScriptBox:

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

let myMap = {};

// myMap.prototype = function(args){
//   let context = this;

//   for (let  i = 0; i < args.length; i++) {
//     context.push(args[i], this);
//   }
//   return context;
// }

// [1, 2, 3].myMap(item => console.log(item));

// global
// function outer() {
//   let a = 10;
//   function myfun() {
//     console.log(a);
//   }
//   myfun();
// }

console.log('a');
let promise = new Promise((resolve, rejct) => resolve('d'));
promise.then((res) => console.log(res));
setTimeout(() => {
  console.log('b');
}, 0);
console.log('c');

// polyfill for map
const myMap = function(args){
  let context = this;

  for (let  i = 0; i < args.length; i++) {
    context.push(args[i], this);
  }

  return context;
}

[1, 2, 3].myMap(item => console.log(item));

// localStorage.setItem('item');

// difference local storage and session storage
// critical rendering path. how its workspace
// debouncing and throatling
// write polypill for map function
// how virtual dom works
// closure
// google search box
