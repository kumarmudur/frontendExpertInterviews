
let x = 'ABC', y = 'DEF';

// op: 'ADBECF'


function myTest(str1, str2) {
    let newStr = '';
    let array1 = str1.split('');
    let array2 = str2.split('');
    for (let i = 0; i < array1.length; i++) {
        for (let j = i; j < array2.length; j++) {
            newStr += array1[i] + array2[j];
             if (i === j) break;
        }
    }
    return newStr;
}

console.log(myTest('ABC', 'DEF'));