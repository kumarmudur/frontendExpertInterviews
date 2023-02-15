// company: Reliance Jio

// let arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((item, acc) => {
//     return 5;
// }, 0);

// Array.prototype.myReduce = function(...args) {
//     console.log('args', args);
//     let acc = 0;
//     let item = args[0];
//     return function (item, acc) {
//         return acc + item;
//     }
// };

// arr.myReduce();


// console.log(sum1(arr));




let intervals = [[1, 4],[2,6],[8,10],[15,18], [18, 21]];

// output = [[1,6],[8,10],[15, 21]] 

function myOverLap(arr) {
    // console.log(arr);
    // arr.sort((a, b) => { 
    //     console.log("a", a);
    //     console.log("b", b);
    //     //a[0] !== b[0] ? a[0] - b[0]: a[1] - b[1]
    // });

    var prev = intervals[0]
    var res = [prev]

    // console.log('arr 33', res);

    for (var curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
          } else {
            res.push(curr)
            prev = curr
          }
    }
    console.log("res", res);
};

myOverLap(intervals);
