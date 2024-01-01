// let a = prompt("Enter Your age: "); // by default prompt() returns string

// a = Number.parseInt(a); // converting string to number using parseInt() function of Number class

// // conditional expression

// if (a >=18) {
//     console.log("You are eligible to vote.");
// }
// else {
//     console.log("You are not eligible to vote.");
// }

// console.log("\n" + "--".repeat(30));

// WAP to read percentage from user and print the grade according to the following table:
// percentage >= 90 -> A+
// percentage >= 80 -> A
// percentage >= 70 -> B+
// percentage >= 60 -> B
// percentage >= 50 -> C
// percentage >= 40 -> D
// percentage < 40 -> Fail


// let percentage = prompt("Enter your precentage: "); //by default prompt() returns string

// percentage = Number.parseInt(percentage); // converting string to number using parseInt() function of Number class

// let percentage = 90;

// if (percentage >= 90) {
//     console.log("A+");
// }
// else if (percentage >= 80) {
//     console.log("A");
// }
// else if (percentage >= 70) {
//     console.log("B+");
// }
// else if (percentage >= 60) {
//     console.log("B");
// }
// else if (percentage >= 50) {
//     console.log("C");
// }
// else if (percentage >= 40) {
//     console.log("D");
// }
// else if (percentage < 40)  {
//     console.log("Fail");
// }
// else {
//     console.log("Invalid percentage");
// }


// console.log("\n" + "--".repeat(30));

// switch case in JavaScript

// Syntax:
// switch (expression) {
//     case caseExpression1:
//       statements
//     case caseExpression2:
//       statements
//     // …
//     case caseExpressionN:
//       statements
//     default:
//       statements
//   }
  

// WAP to read a number from user and return a spelling of that number. Using switch case.


// let number = prompt("Enter a number: "); //by default prompt() returns string

// number = Number.parseInt(number); // converting string to number using parseInt() function of Number class

// number = 7;

// switch (number) {
//     case 0:
//         console.log("Zero");
//         break;
//     case 1:
//         console.log("One");
//         break; // break is used to terminate the switch
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//         break;
//     case 5:
//         console.log("Five");
//         break;
//     case 6:
//         console.log("Six");
//         break;
//     case 7:
//         console.log("Seven");
//         break;
//     case 8:
//         console.log("Eight");
//         break;
//     case 9:
//         console.log("Nine");
//         break;
//     default:
//         console.log("Invalid Input")
// }

// console.log("\n" + "--".repeat(30));

// Ternary Operator

// Syntax:
// condition ? expression1 : expression2

let a = 17;

console.log(a > 10 ? "a is greater than 10" : "a is less than or equal to 10")



