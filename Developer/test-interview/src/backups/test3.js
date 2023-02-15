// const input = [1,2,[3]]
// result = [1,2,3]


function flatArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            for (let elem of arr[i]) {
                newArray.push(elem); 
            }
        } else {
            newArray.push(arr[i]);   
        }
    }

    return newArray;
}

let newArray = [];

function flatArrayRecursion(arr) {
    for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
              return flatArrayRecursion(arr[i - 1]);
            } else {
                newArray.push(arr[i]);
            }
    }
}

console.log(flatArray([1,2,[3, [4]]]));


function myFunc () {
    console.log('hi');
}

const test1 = myFunc.bind([a, b, c]);
test1();

