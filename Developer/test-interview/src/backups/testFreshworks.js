// FreshWorks
// [1,2,4,5,6,1,3,7,9,10]

function findRepeatingNumber(nums) {
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                results.push(nums[i]);
            }
        }
    }

    console.log('results...', results);

    // const map = {};

    // for (let num of nums) {
    //     if (!map[num])  map[num] = 1;
    //     else results.push(num);
    // }
   
    // let newMap = new Map([nums]);

    //  let set = new Set(nums);
    //  console.log('set', set);

    // results.push(...nums.filter(item => nums.indexOf(item) !== nums.lastIndexOf(item)));
    // console.log(results);
};

console.log(findRepeatingNumber([1,2,4,5,6,1,3,7,9,10, 2]));

