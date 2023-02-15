// company: Broadcom

//Input  : arr[] =  {-6, -3, -1, 2, 4, 5}
//Output : 1, 4, 9, 16, 25, 36 

function myFunc(arr) {
    let first = 0;

    for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i] * arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        
    }

    console.log('arr', arr);

}

myFunc([-6, -3, -1, 2, 4, 5]);


function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    // for (let i = 0; i < arr.length; i++) {
    //     mid = Math.floor((start + end) / 2);
    //     if (target > arr[mid]) {
    //         start = mid + 1;
    //     } else {
    //         end--;
    //     }
    // }

    while (start <= end) {
        // console.log('start', start);
        // console.log('end', end);
        mid = Math.floor((start + end) / 2);
        console.log("mid", mid);
        if (target > arr[mid]) {
            start = mid;
        }  else if (target === arr[mid]) {
            return arr[mid];
        } else {
            end = end - 1;
        }
    }
    // console.log(arr[mid]);
    return arr[mid];
}

// console.log(binarySearch([1, 2, 5, 6, 7, 9, 10], 9));
