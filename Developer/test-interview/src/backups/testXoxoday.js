// Company: Xoxoday

//input: [ 12, 10, 5, 6, 52, 36 ];
// output: [ 6, 52, 36, 12, 10, 5 ]



// function movePosition(arr, pos) {
//     const result = [];
//     const newArr = arr.slice(pos);
//     // console.log('newArr..', newArr);
//     for (let i = 0; i < newArr.length; i++) {
//         result.push(newArr[i]);
//     }

//     for (let i = 0; i < pos; i++) {
//         result.push(arr[i]);
//     }
//     console.log('result', result);
// };


// movePosition([ 12, 10, 5, 6, 52, 36 ], 3);

function outer(x) {
    if (arguments.length === 2) {
        return function inner(y) {
            return x + y
        }
    }
}

outer.apply([1, 2,3])

let test = outer(5);
test(3);

myFun1();

function myFun1() {

}

var myfun2 = function() {

}

const myFun = () => {
    console.log(this);
}

// { ...} , Object.assign({} , )

//Object

class Person extends Person1 {
    constructor() {
        super();
    }

    
}

