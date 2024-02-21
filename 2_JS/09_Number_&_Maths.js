
console.log("\n" + "-".repeat(50) + "  Number  " + "-".repeat(50));

const score = 100;
console.log(score);

const balance = new Number(2000);
console.log(balance); // returns a number object

console.log(balance.toString()); 

console.log(score.toFixed(2)); // toFixed() method is used to fix the number of decimal places in a number

const othernum = 100.45798;

console.log(othernum.toPrecision(4)); // toPrecision() method is used to fix the number of digits in a number including the decimal places and returns a string value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log("\n" + "-".repeat(50) + "  Math  " + "-".repeat(50));

console.log(Math); // returns a math object

console.log(Math.PI); // returns the value of PI

console.log(Math.abs(-124566)); // returns the absolute value of a number 

console.log(Math.ceil(4.2)); // returns the smallest integer greater than or equal to a given number

console.log(Math.floor(4.2)); // returns the largest integer less than or equal to a given number

console.log(Math.round(5.9)); // returns the value of a number rounded to the nearest integer

console.log(Math.max(4, 5, 6, 7, 8, 9)); // returns the largest number from the given numbers

console.log(Math.min(4, 5, 6, 7, 8, 9)); // returns the smallest number from the given numbers

console.log(Math.random()); // returns a random number between 0 and 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
