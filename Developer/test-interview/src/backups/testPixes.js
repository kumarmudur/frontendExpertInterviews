// Pixels

const url = [ 'url1', 'url2', 'url3' ]; //

const promise = new Promise((resolve, reject) => {
    if (resolve) {
        resolve("promise resolved");
    } else {
        reject("error in urls");
    }
});

promise.all((urls) => urls.map((url, i) => {
    return fetch('url');
}));


//response = [ 'response1', 'response2', 'response3' ];

