
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 success"), 3000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 success"), 2000)
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 5000)
});
// Promise.all([p1,p2,p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// Promise.allSettled([p1,p2,p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// Promise.any([p1,p2,p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

const p4 = new Promise((resolve,reject) => {
    let a = 4;
    if(a == 2){
        resolve("Success")
    }else {
        reject("failed");
    }
})

p4.then((message) => {
    console.log(message);
})
.catch((err) => {
    console.error(err)
});




const promise = new Promise (function(resolve, reject) {
    setTimeout(() => {
        resolve('Promise Resolved')
    },3000)
});

async function asyncFunction() {
    let result = await promise
    console.log( result);
}

asyncFunction();