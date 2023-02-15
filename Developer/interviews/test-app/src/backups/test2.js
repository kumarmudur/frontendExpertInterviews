
// Relevance labs
const array = [1, 2, 3, 4, 5, 7, 12, 9, 25];
array.length = 0;

console.log(array[2]);


let x = setTimeout(() => {
    console.log('1');
}, 1000);

console.log(x);

FE: 3000, BE: 8000


// 0(n2)

const array = [1, 2, 3, 4, 5,]; const array2 = [1, 2];

for (let i = 0; i < array.length; i++) {
    // for (let j = 0; j <array2.length; j++) {
    //     if (array[i] === array2[j]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    
}
obj = { 1: 1, 2: 2}

o(n)
function myFunc(array, array2) {
    const obj1 = {};
    for (let item of array2) {
        if(!obj1[item]) {
            return item;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === obj1[i]) {
            return true;
        } else {
            return false;
        }
    }
}



