// loops in JS

// for loop
// let n = 7;
// let f = 1;


// for (let i = 1; i < n+1; i++){
//     f *= i;
// }

// console.log("factorial of", n , "is", f);

// optimize code for factorial

const n = 7;
let f = 1;

for (let i = 2; i <= n; i++) {
    f *= i;
}

console.log(`factorial of ${n} is ${f}`);