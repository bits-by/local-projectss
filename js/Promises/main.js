// async function userData() {
//   await fetch('https://jsonplaceholder.typicode.com/users');
//     // const jsonData = await data.json();
//     // console.log(jsonData);

// }
// userData()
// .then((res) => console.log(res.data))

// const promise = fetch('https://jsonplaceholder.typicode.com/users');
// promise.then((val) =>{
//     console.log(val.status)
//     return val.json();
// }).then((val) =>{
//     console.log(val);
// }).catch((err) =>[
//     console.error(err)
// ])

// async function main() {
//     const response = await fetch('https://sum-server.100xdevs.com/todos')
//     const json = await response.json();
//     console.log(json.todos)
// }
const axios = require('axios');

async function main() {
    const response = axios.get('https://sum-server.100xdevs.com/todos')
    console.log(response.todods)
}
main();



