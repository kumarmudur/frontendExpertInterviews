
// condenast

function myFun(str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
};

// console.log(myFun('shiva'));


// const person = {
//     name: 'shiva',
//     job: 'engineer',
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
        // greet() {
        //    return `Hello ${this.name}`;
        // };
    }
}

const obj1 = new Person('shiva', 'engineer');
console.log(obj1);