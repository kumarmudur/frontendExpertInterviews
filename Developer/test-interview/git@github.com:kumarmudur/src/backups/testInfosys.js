
// Infosys

// 1. student name
// 2. Address
// 3. Marks

function studentName() {
    setTimeout(function() {
        return 'Shiva';
    }, 1000);
}

function address() {
    setTimeout(function() {
        return 'Bangalore';
    }, 2000);
}

function marks() {
    setTimeout(function() {
        return '95%';
    }, 3000);
}

// async function printInfo() {
//    await studentName();
//    await address();
//     marks();
// }

let promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('function fullfilled');
    } else {
        reject('reject');
    }
});

// promise.all([studentName(), address(), marks()]).then((res) => {
//     console.log('studen', res[0]);
//     console.log('address', res[1]);
//     console.log('marks', res[2]); 
// });

// promise.then((response) => {
//     let res = studentName().then(response);
//     console.log('studen', res);
// });

let arr = [ 1, 2, 3, 1, 2, 5, 7, 8, 5];

function removeDuplicate(arr) {
    let newArray = [];
    for (let item of arr) {
        if (!newArray[item]) {
            newArray.push(item);
        }
    }
    return newArray;
}

console.log(removeDuplicate(arr));


