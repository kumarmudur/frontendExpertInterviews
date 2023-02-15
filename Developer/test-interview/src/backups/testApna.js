

// const arr = [10, 12, 15, 21];

// function myFunc() {
//     for (var i = 0 ; i < arr.length; i++){
//         setTimeout(function() {
//             console.log('index ' + i + 'element'+ arr[i]);
//         },1000);
//     }
// }

// // 1 - 10

// 4 - 21

// myFunc(arr);

// eventloop - 

// function isArray(arr) {
//     if (!Array.isArray(arr)) {
//         return arr;
//     }
//     isArray(arr);
// }


// function flatArray(arr) {

//     let result = [];
    
//     for (var i = 0 ; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             // if (Array.isArray(arr[i])) {
//             //     let value = isArray(arr[i]);
//             //     result.push(value);
//             // } else {
//             //     result.push(arr[i]);
//             // }
//             let value = flatArray(arr[i]);
//             if(!Array.isArray(value)) {
//                 result.push(value);
//             } else {
//                return flatArray(arr[i]);
//             }
//         } else {
//             result.push(arr[i]);
//         }
//     }
// }

// flatArray([1,2, [1, 2], [3, 4], 5, 7, [5, [6]], 8, 9]);


// Semantic elements
// Header, footer, section, nav

// Meta tags

// Defer & async
// Async - download parallelly, after dnld-> executed
// Defer- download parallelly, after parsing -> executed

// CORS

// Webstorage apis
// Localstorage - setitem, getitem,clear
// Sessionstorage 
// Cookies




// Css
// Div & span
// Box modal

// Div{
// Height: 100px;
// Padding: 10px;
// Border: 2px;
// }

// Flex box

// Justify-content
// Display: flex
// Align-items;

// Positions

// Absolute
// Relative
// Fixed
// Static
// Sticky


// Js
// Primitives in js
// Number, string, boolean, big int, symbol, undefined, null
// Typeof undefined - undefined
// Typeof null -obj


// console.log(a); // undefined
// Var a;


// console.log(a); // 5
// Var a = 5;


// console.log(a);
// Var a = 5;
// console.log(a);


// console.log(a);
// Let a;




// console.log(a); // 5
// Var a = 5;
// console.log(a); // 5
// Var a = 7;
// console.log(a); // 7


// foo(); // hii

// Function foo (){
// console.log(hii);


// foo(); // hlo

// Function foo (){
// console.log(hii);
// }


// Function foo (){
// console.log(hlo);
// }



// const obj = {
// 	a: 20,
// b: function(){
// console.log(this.a);
// }
//}

// obj.b(); // 20

// Const d = obj.a;
// D -> 20

// Const c = obj.b; // 20
// console.log(c) // 
// c(); // error

// const obj = {
// 	a: 20,
// b:() =>{
// console.log(this.a);
// }
}

// obj.b()// undefined

// Const c = obj.b
// c() // undefined


// var name = "John";

// 	(function(){
// 	  	console.log("The name is : " + name);

// 	  	var name = "Jane";

// 	  	console.log("The name is : " +name);
// 	})();

// Undefined,
// Jane



// (function(){
// 	  	console.log("The name is : " + name);

// 	  	var name = "Jane";

// 	  	console.log("The name is : " +name);
// 	})();


// console.log(a);
// Var a = 5;
// console.log(a);

// Closures

// const arr = [10, 12, 15, 21];

// For (var i=0 ; i < arr.length; i++){
// 	setTimeout( function() {
// 		console.log(“index ” + i + “element ”+ arr[i]);
// 	},1000);
	
// }

// console.log(‘4’)


// 3 : 21


