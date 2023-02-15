// Lavorro

// Input: arr = [10,2,5,3]
// Input: arr = [7,1,14,11]
// Input arr = [3, 4, 5] = false

//o(N2)

//O(n)

// let create object
 // store all array element in object
// loop through all element
// check if arr[element] double value there true
// 5 item double is there 

function arrayDouble(arr) {
    let result = {};

    for (let elem of arr) {
        result[elem] = result[elem] || elem;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(result[arr[i]]);
        if (arr[i] * arr[i] === result[arr[i]]) {
            return true;
        }
    }
    return false;
}

console.log(arrayDouble([10,2,5,3]));