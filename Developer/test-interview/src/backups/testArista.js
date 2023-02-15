// Arista Networks

function myFun(str) {
   

    // console.log('newStr', newStr)

   str = str.replace(/[^a-zA-Z0-9]/g, '');
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ( i === 0) {
            newStr += str[i];
        } else {
            if (i % 3 === 0) {
                newStr += ' ' + str[i];
            } else {
                newStr += str[i];
            }
        }
       
    }
    for (let i = str.length - 1; i >= 0; i--) {
        
    }
    console.log('newStr...', newStr);

};

myFun('345 6');

// 004 448 555 583 61