// function greet(fName: string) {
//     console.log("Hello "+fName);
// }

// greet("Vivek");

// function sum(a:number ,b:number):number {
//     return (a+b);
// }
// console.log(sum(1,2));

// function isLegal(age:number) {
//     if(age>18)
//         return true;
//     else
//         return false;
// }

// let y = isLegal(18);
// console.log(y)


// function rAfter1S(fn:() => void) {
//     setTimeout(fn, 1000)
// }

// rAfter1S(function () {
//     console.log("Hello there...")
// })


// const data = (name) => `Hello , ${name}`;
// console.log(data);

// const dosomething: () =>void = () => {
//     return 5;
// }
// const doSomething = () => {
//     return 5;
// }

// interface User {
//     firstName:string;
//     lastName: string;
//     age: number;
//     email? : string;
// };

// function isLegal(user: User) {
//     if(user.age >18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isLegal( {
//     firstName:"Vivek",
//     lastName: "Raut",
//     age: 24,
// }))



//arrays type ........

// interface User {
//     fName: string;
//     age: number;
// }

// function legalAge (users : User[]) {
//     return users.filter(x => x.age >= 18)
// }

// console.log(legalAge([{
//     fName: "vivek",
//     age: 24
// },
// {
//     fName: "Rajdeep",
//     age: 17
// }]))

// let value: number[] = [1,2,5,66,7]
// console.log(value)

// function greet(firstname: string) {
//     console.log("Hello" + firstname)
// }
// greet("vivek");

// function delayCall(fn: () => void){
//     setTimeout(fn, 1000);
// }

// delayCall(function() {
//     console.log('hi there !!')
// })

// const user = {
//     fName: "vivek",
//     lName: "raut",
//     age: 24
// }

// interface User {
//     fName: string,
//     lName: string,
//     age: number
// }

// function isLegal(user : User){
//     if(user.age >18)
//         return true;
//     else
//         return false;
// }


// type User = {
//     fName: string,
//     lName: string,
//     age: number
// }
function printId(id: string | number) {
    console.log(`ID: ${id}`)
}
printId(101)
printId("103")