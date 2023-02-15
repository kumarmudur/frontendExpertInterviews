
// input : array = [3,1,4,7,9,8,5,10,15,12,13]

// output: [0,0,1,4,7,7,4,5,5,10,12]

function myFunction(arr) {
    let result = [0];

    for (let i = 1; i < arr.length; i++) {
        let smallest = arr[i];

        for (let j = i; j > 0; j--) {
            // console.log('arr[j]', arr[j]);
            // console.log('smalles', smallest);
            if (arr[j] < smallest) {
                smallest = arr[j];
            } 
        }
        result.push(smallest);
    }
    console.log('result: ', result);
};

myFunction([3,1,4,7,9,8,5,10,15,12,13]);