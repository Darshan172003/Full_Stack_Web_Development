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


