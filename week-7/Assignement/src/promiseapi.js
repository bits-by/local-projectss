const p1 = new Promeise((resolve, reject) => [
    setTimeout(() => resolve("P1 success"), 3000)
])
const p2 = new Promeise((resolve, reject) => [
    setTimeout(() => resolve("P1 success"), 1000)
])
const p3 = new Promeise((resolve, reject) => [
    setTimeout(() => resolve("P1 success"), 2000)
])
Promise.all([p1,p2,p3])
    .then((res) => {
        console.log(res);
    })