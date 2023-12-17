// 3. Comparison Operations

console.log("\nComparison Operations\n");

console.log("3 > 2 = ", 3 > 2); // true
console.log("3 < 2 = ", 3 < 2); // false
console.log("3 >= 2 = ", 3 >= 2); // true
console.log("3 <= 2 = ", 3 <= 2); // false
console.log("3 == 2 = ", 3 == 2); // false
console.log("3 != 2 = ", 3 != 2); // true

console.log("\n" + "--".repeat(30));

console.log("3 == '3' = ", 3 == '3'); // true because it only checks the value not the type
console.log("3 === '3' = ", 3 === '3'); // false because it checks the value and the type both

console.log("\n" + "--".repeat(30));

console.log(null > 0); // false because null is converted to 0
console.log(null == 0); // false because null is converted to 0
console.log(null >= 0); // true because null is converted to 0

console.log("\n" + "--".repeat(30));

console.log(undefined > 0); // false because undefined is converted to NaN
console.log(undefined == 0); // false because undefined is converted to NaN
console.log(undefined >= 0); // false because undefined is converted to NaN
console.log(undefined <= 0); // false because undefined is converted to NaN

// === is recommended to use because it checks the type and the value both

console.log("\n" + "--".repeat(30));

console.log("2" === 2); // false because it checks the type and the value both


// ? : -> Ternary Operator
// condition ? true : false
// if condition is true then true will be returned otherwise false will be returned


// 4. Logical Operations

console.log("\n" + "--".repeat(30) + "Logical Operations" + "--".repeat(30));

// 1. AND (&&)
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

let a = 10;
let b = 20;

console.log(a > b && b > a); // false
console.log(a > b && b < a); // false
console.log(a < b && b > a); // true
console.log(a < b && b < a); // false

console.log("\n" + "--".repeat(30));

// 2. OR (||)
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

console.log(a > b || b > a); // true
console.log(a > b || b < a); // true
console.log(a < b || b > a); // true
console.log(a < b || b < a); // false

console.log("\n" + "--".repeat(30));

// 3. NOT (!)
// !true -> false
// !false -> true

console.log(!true); // false
console.log(!false); // true
console.log(!(a > b)); // true
console.log(!(a < b)); // false


