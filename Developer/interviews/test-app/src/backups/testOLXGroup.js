
// function sortedMerge(arr1, arr2, n , m) {
//     let counter = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         if (i >= n) {
//             arr1[i] = arr2[counter];
//             counter++;
//         } else {
//           arr1[i] = arr1[i];
//         }
//     }
//     console.log(arr1);
// }

// sortedMerge([3, 18, 98, 145, undefined, undefined, undefined], [-1, 12, 987], 4, 3);


// console.log('a');
// setTimeout(() => {
//     console.log('b');
// }, 0);
// console.log('c');

// . stack,   => queue.  =>. webApi


function asyncSumFunction(a, b, callback) {
    const isError = Math.random() > 0.7;
    setTimeout(() => {
      if (isError) {
        callback(null, new Error("Something went wrong"));
      } else {
        callback(a + b, null);
      }
    }, 3000);
  }
  
  
//   asyncSumFunction(1, 2, function(result, err) {
//     console.log(result, err);
//   });
      
  
  function promisify(fn) {
    // Implement Code here
  //    return fn((...args) => {
  //        console.log(args);
  //        new Promise((resolve, reject) => {
  //            if (args) {
  //                resolve(fn(...args));
  //            } else {
  //                reject((err) => err);
  //            }
  //        })
  //    })
  
  //    fn();
  
    // return new Promise((resolve, reject) => {
    //     console.log('inside promise');
    //      function fn(args) {
    //         console.log('args...', args);
    //           if (args) {
    //           resolve(fn(...args));
    //       } else {
    //           reject((err) => err);
    //       }
    //     }
    //     return fn();
    // });

    return function(...args) {
        let save = args;
        return new Promise((resolve, reject) => {
          return  fn(...args, resolve);
        })
    }
  }
  
  // New Usage
  const promisifiedAsyncSumFunction = promisify(asyncSumFunction);
  
  promisifiedAsyncSumFunction(1, 2)
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
  
  