const arr = [1, 2, 3, 4, 5, 6];

function waitForme(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms );});
}

async function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        await waitForme(1000);
        console.log(arr[i]);
    }
}

print(arr);