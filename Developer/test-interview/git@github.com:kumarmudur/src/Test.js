// let array = [ 1, 2, 3, 1, 5, 6, 8, 4, 6, 10, 5, 10];

// 1, 1, 2, 8, 10, 10;



// // let obj = {
// //     1: 2,
// //     2: 1, 
// //     3: 1,
// //     5: 1,
// //     6: 1
// // };

// let 

// const CountSecondNumber = (array) => {
//     let sortArray = array.sort((a, b) => a - b);
// }

// const countNumbers = (array) => {
//     let result = {};
//     array.map(item => {
//         if (result[item]) {
//             result[item] += 1;
//         } else {
//             result[item] = 1;
//         }
//     });
//     return result;
// }

// console.log(countNumbers(array));



function myStrFun(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        newStr += str[i];
    }
    return newStr;
}

console.log(myStrFun('hello world'));