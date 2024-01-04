// loops in JS

// Ex.1 Calculate factorial of a given number
// let n = prompt("Enter a number: "); // this will take input as string so we need to convert it into number and it's not working in node js console
// n = parseInt(n);
// for loop
// let n = 7;
// let f = 1;


// for (let i = 1; i < n+1; i++){
//     f *= i;
// }

// console.log("factorial of", n , "is", f);

// optimize code for factorial =>

const n = 7;
let f = 1;

for (let i = 2; i <= n; i++) {
    f *= i;
}

console.log(`factorial of ${n} is ${f}`);

// Ex.2 Print multiplication table of a given number

// let num = prompt("Enter a number: ");
// num = parseInt(num);
// let num = 7;

// for (let i = 1; i <= 10; i++ ){
//     console.log(num + " * " + i + " = " + num * i);
// }

// Ex.3 Print multiplication table of a given number in reverse order

let num = 7;

for (let i = 10; i >= 1; i-- ){
    console.log(num + " * " + i + " = " + num * i);
}
