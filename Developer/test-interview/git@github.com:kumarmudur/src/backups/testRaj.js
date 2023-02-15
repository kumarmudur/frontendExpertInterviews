

function getRandomBool(n) {
    var maxRandomCoeff = 1000;
    if (n > maxRandomCoeff) n = maxRandomCoeff;
    return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}
 
//api to fetch a single article
function getArticle(articleId) {
    return new Promise((resolve, reject) => {
      console.log("resolveRaj", resolve)
        setTimeout(() => {
            
            if (getRandomBool(2) && false) {
                reject("Failed article ",articleId);
            }
           else {
                resolve("Resolved article ",articleId);
                // console.log(resolving article ${articleId});
            }
        }, Math.random() * 1000);
    });
}
 
function getArticleIds(page = 1) {
    let ids = [];
    const pageSize = 10;
    for (let i = 0; i < pageSize; i++) {
        ids.push(page * pageSize + i);
    }
    // console.log(ids);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('inside settimeout', ids);
            resolve(ids);
        }, 1000);
    });
}

function runSequence(){
    var that= this;
   
return Promise.resolve()
            .then(function(){
                return getArticleIds();
            })
            .then(function(){
                 return getArticle();
                })
             .then(function(){
                console.log("----done=---");
                })
            .catch(function(err) { console.log(err) });
}

runSequence();


