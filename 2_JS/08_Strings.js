// String

let F_name = "John";
let Age = 23;

// console.log(F_name + " is " + Age + " years old."); // concatenation // old way to do it

console.log(`${F_name} is ${Age} years old.`); // string interpolation // new way to do it

const newString = "Hello World"; // string literal
const GameZone = new String("Namaste Bharat"); // string object

console.log(newString.length); // length of the string

console.log(newString.toLowerCase()); // convert to lower case , the original string is not changed because strings are immutable in JS and we have to store it in a new variable

console.log(GameZone.indexOf("Bharat")); // index of the string

console.log(GameZone.__proto__); // prototype of the string object used to access the methods of the string object but not recommended to use it because it is not a good practice to use it

console.log(GameZone.charAt(2)); // character at the index 2

console.log(`An index of ${GameZone} at 2 is ${GameZone.at(2)}`); // character at the index 2

