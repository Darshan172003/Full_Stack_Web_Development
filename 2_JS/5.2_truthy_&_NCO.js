
const userMail = [];

if (userMail) {
    console.log('Mail is present');
} else {
    console.log('Mail is not present');
}

// Falsey values in JavaScript

// 0 , -0 , Bigint 0n , "", null , undefined , NaN , false

// Truthy values in JavaScript

// '0' , "False",  " " , [], {} , function(){}

// How to check of empty array if it is truthy or falsey?

// let arr = [];

// if (arr.length === 0) {
//     console.log('Array is empty');
// } else {
//     console.log('Array is not empty');
// }

// How to check of empty object if it is truthy or falsey?

// let obj = {};

// if (Object.keys(obj).length === 0) {
//     console.log('Object is empty');
// } else {
//     console.log('Object is not empty');
// }

// Nullish coalescing operator (??) => It is used to provide a default value to a variable if it is null or undefined. 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

