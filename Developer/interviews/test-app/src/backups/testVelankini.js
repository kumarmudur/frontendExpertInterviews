//let arr = [1, '2', 3, 'Four', undefined, 4, null, 5, 6, 'null'] return [1,3,4,5,6];

const arr = [1, '2', 3, 'Four', undefined, 4, null, 5, 6, 'null'];
// arr[2] = 10;


function myFunc(arr) {
    // let result = [];
    // for (let item of arr) {
    //     // if (typeof item === 'number') {
    //     //     result.push(item);
    //     // }
    //     if(Number.isInteger(item)) {
    //         result.push(item);
    //     }
    // }
    // return result;
    return arr.filter(item => {
        if (typeof item === 'number') {
            return item;
        }
    })
};

console.log(myFunc(arr));



