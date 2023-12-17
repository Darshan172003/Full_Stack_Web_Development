// 2. Comparison Operations

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