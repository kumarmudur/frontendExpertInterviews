// ormine

// const arr = [1, 2, 3, 4, 5, 6];

// function displayArrayItems(arr) {
//     for (let item of arr) {
//         setTimeout(function() {
//             console.log(item);
//         }, 1000);
//     }
// }

// displayArrayItems(arr);

// console.log(a);
// var a;

// /^[a-zA-Z]+$/

const arr1 = ['aejhd', 'dh@k3', 'dh32', 'akdn', 123];

const regex = /^[a-zA-Z]+$/;
function filterItems(arr) {

  return arr.filter(item => {
        let test = regex.test(item);
        if(test) {
            return item;
        }
    });

    // for (let item of arr) {
    //     let test = regex.test(item);
    //     if(test) {
    //         return item;
    //     }
    // }
}

// console.log(filterItems(arr1));

// const [count, setCount] = useState(0);

// let a = useState(1);


