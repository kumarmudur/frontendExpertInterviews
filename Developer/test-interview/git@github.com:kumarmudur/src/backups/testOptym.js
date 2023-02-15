
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function () {
//                     return a + b + c + d;
//                 }
//             }
//         }
//     }
// }

// function sum(a) {
//    // if (arguments.length === 0 && arguments === undefined) return 0;
//     return function (b) {
//         if(b) return sum(a + b);
//        return a;;
//     }
// }


// console.log(sum(1)(2)(3)(4)());



function add(spred, cb) {
    setTimeout(() => {
      const total = spred.reduce((acc, item) => acc + item, 0)
      cb(total)
    }, 0)
}

function promisify(cb) {
   return function(...args) {
        let save = args;
        return new Promise((resolve, reject) => {
            cb(save, resolve);
        })
   }
}

const addPromise = promisify(add)
addPromise(5, 5).then(sum => console.log(`sum is ${sum}`));// prints after 2 seconds

