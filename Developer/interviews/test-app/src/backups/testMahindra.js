
// First Mahindra

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getInfo() {
//         console.log(this.name + ': ' + this.age);
//     }
// }


// function a(a) {
//     return function b(b) {
//         return function c(c) {
//             return a + b + c;
//         }
//     }
// }

// let result = 1;
// function counter(n) {
//    let count = 1;
//    function innerCounter() {
//        return count * n;
//    }
//    return innerCounter();
// };

// let next = counter(2);
// console.log(next())
//console.log(next())//2
//console.log(next())//4
//console.log(next())//6
//console.log(next()) //8

function Counter(n) {
    var counter = 1;

    function IncreaseCounter() {
        return counter *= n;
    };

    return IncreaseCounter;
}

var counter = Counter(2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



