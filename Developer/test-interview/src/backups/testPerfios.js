// import React from 'react';

// const url = 'https://test-api-fake-dummy.herokuapp.com/faqs';

// const TestData = () => {
//     return (
//         <div>TestData</div>
//     )
// }

// export default TestData;

// ssdfdfsfsfsdfsfsdaaadcd = { a: 15, b : 15}

function getCount(str) {
    let result = {};

    for (let char of str) {
        result[char] = result[char] + 1 || 1;
    }
    console.log(result);
    return result;
}

getCount('ssdfdfsfsfsdfsfsdaaadcd');