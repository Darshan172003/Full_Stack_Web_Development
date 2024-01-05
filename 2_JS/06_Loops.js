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

// const n = 7;
// let f = 1;

// for (let i = 2; i <= n; i++) {
//     f *= i;
// }

// console.log(`factorial of ${n} is ${f}`);

// Ex.2 Print multiplication table of a given number

// let num = prompt("Enter a number: ");
// num = parseInt(num);
// let num = 7;

// for (let i = 1; i <= 10; i++ ){
//     console.log(num + " * " + i + " = " + num * i);
// }

// Ex.3 Print multiplication table of a given number in reverse order

// let num = 7;

// for (let i = 10; i >= 1; i-- ){
//     console.log(num + " * " + i + " = " + num * i);
// }

// console.log("-".repeat(50));
// for in loop => it is used to iterate over objects

// let obj = {
//     john: 100,
//     harry: 200,
//     peter: 300
// }

// for (let a in obj){
//     console.log("Marks of " + a + " is " + obj[a]);
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }

// console.log(txt);

// console.log("-".repeat(50));

// for of loop => it is used to iterate over iterable objects like array, string, etc.

// for (let b of "Javascript"){
//     console.log(b);
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = [];
// for (let x of cars) {
//   text += x;
// }

// console.log(text);

// console.log("-".repeat(50));

// while loop => it is used to execute a block of code as long as the condition is true

// let n = prompt("Enter a number: ");
// n = Number.parseInt(n);

// let num = 5;
// let i = 0;

// while (i < num){
//     console.log(i);
//     i++;
// }

// do while loop => it is used to execute a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

let i = 0;

do {
  console.log(i);
  i++;
}
while (i < 10);  
