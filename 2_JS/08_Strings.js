// String

let F_name = "John";
let Age = 23;

// console.log(F_name + " is " + Age + " years old."); // concatenation // old way to do it

console.log(`${F_name} is ${Age} years old.`); // string interpolation // new way to do it

const newString = "    Hello World     "; // string literal
const newStringOne = new String("Namaste Bharat"); // string object

console.log(newString.length); // length of the string

console.log(newString.toLowerCase()); // convert to lower case , the original string is not changed because strings are immutable in JS and we have to store it in a new variable

console.log(newStringOne.indexOf("Bharat")); // index of the string

console.log(newStringOne.__proto__); // prototype of the string object used to access the methods of the string object but not recommended to use it because it is not a good practice to use it

console.log(newStringOne.charAt(2)); // character at the index 2

console.log(`An index of ${newStringOne} at 2 is ${newStringOne.at(2)}`); // character at the index 2

console.log(`ASCII code of index 4 is ${newStringOne.codePointAt(4)}`); // returns ASCII code of index 4 

console.log(`${newString.concat(" and ",newStringOne).trim()}`); // concatenates two strings and returns a new string

console.log(newString.trim()); // removes the white spaces from the string

console.log(newString.replace("Hello","Namaste").trim()); // replaces the first string with the second string

console.log(newStringOne.slice(3,8)); // returns the substring from index 3 to 8 but not including 8

console.log(newString.__proto__); // prototype of the string literal used to access the methods of the string literal but not recommended to use it because it is not a good practice to use it

