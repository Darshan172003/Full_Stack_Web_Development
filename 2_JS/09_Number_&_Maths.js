
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

