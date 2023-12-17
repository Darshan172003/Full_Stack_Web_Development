// type conversion in JS (implicit and explicit)

let value = "Darshan";

// two methods to check the type of a variable
// 1. typeof
// 2. typeof()

console.log(typeof value); // string
console.log(typeof(value)); // string

let value_is_number = Number(value); // NaN (Not a Number)
console.log(typeof(value_is_number));
console.log(value_is_number);

// "33" -> 33
// "33abc" -> NaN (Not a Number)
// true -> 1
// false -> 0
// null -> 0
// undefined -> NaN

console.log("\n" + "--".repeat(30));

let is_logged_in = "Darshan";

let boolean_is_logged_in = Boolean(is_logged_in);  // true
console.log(boolean_is_logged_in);  
console.log(typeof(boolean_is_logged_in)); // boolean
 
// 1 -> true
// 0 -> false
// " " -> true
// "" -> false
// "Darshan" -> true

console.log("\n" + "--".repeat(30));

let number = 33;

let string_number = String(number); // "33"
console.log(string_number);
console.log(typeof(string_number)); // string


// ********************OPERATIONS***************************

console.log("\n" + "--".repeat(30) + "OPERATIONS" + "--".repeat(30));


// 1. Arithmetic Operations

console.log("\n" + "--".repeat(30) + "Arithmetic Operations" + "--".repeat(30));

let a = 7;
let b = 5;
 
console.log("Additon = ",a+b);
console.log("Subtraction = ",a-b);
console.log("Multiplication = ",a*b);
console.log("Division = ",a/b);
console.log("Power = ", a**b);
console.log("Remainder = ",a%b);

console.log("\n" + "--".repeat(30));

let str1 = "Hello";
let str2 = "Darshan";

str3 = str1 + " " + str2;
console.log("\n",str3);

console.log("\n" + "--".repeat(30));

console.log("1" + 2); // "12" because 1 is a string and 2 is a number so 1 is converted to string and then concatenated
console.log(1 + "2"); // "12" because 2 is a string and 1 is a number so 2 is converted to string and then concatenated
console.log(1 + 2 + "3"); // "33" because 1 and 2 are numbers so they are added and then 3 is a string so 3 is converted to string and then concatenated
console.log("1" + 2 + 3); // "123" because 1 is a string so 1 is converted to string and then concatenated and then 2 and 3 are numbers so they are added
console.log("1" + (2 + 3)); // "15" because 2 and 3 are numbers so they are added and then 1 is a string so 1 is converted to string and then concatenated


console.log( (3 + 4) * 5 / 3);

console.log("\n" + "--".repeat(30));

let num1 , num2 , num3;

num1 = num2 = num3 = 5; 

// prefix and postfix increment and decrement operators in JS

num1++; // postfix increment operator

console.log(num1);

++num1; // prefix increment operator

console.log(num1);

num1--; // postfix decrement operator

console.log(num1);

--num1; // prefix decrement operator

console.log(num1);


// Difference between prefix and postfix operators is that prefix operators are evaluated first and then the value is assigned to the variable
// and postfix operators are evaluated after the value is assigned to the variable

console.log("\n" + "--".repeat(30));

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

console.log("\n" + "--".repeat(30));

let x = 3;
const y = x++; // y = 3 and x = 4 because postfix increment operator is used so first the value of x is assigned to y and then x is incremented
console.log("x = ",x);
console.log("y = ",y);


let a1 = 3;
const b1 = ++a1; // b1 = 4 and a1 = 4 because prefix increment operator is used so first the value of a1 is incremented and then assigned to b1
console.log("a1 = ",a1);
console.log("b1 = ",b1);

console.log("\n" + "--".repeat(30));


// 2. Assignment Operations


console.log("\n" + "--".repeat(30) + "Assignment Operations" + "--".repeat(30));

let x1 = 5;
let y1 = 3;

x1 += y1; // x1 = x1 + y1
console.log("x1 += y1 = ",x1);

x1 -= y1; // x1 = x1 - y1
console.log("x1 -= y1 = ",x1);

x1 *= y1; // x1 = x1 * y1
console.log("x1 *= y1 = ",x1);

x1 /= y1; // x1 = x1 / y1
console.log("x1 /= y1 = ",x1);

x1 %= y1; // x1 = x1 % y1
console.log("x1 %= y1 = ",x1);

x **= y; // x = x ** y
console.log("x **= y = ",x);

