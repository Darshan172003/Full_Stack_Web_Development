// Q.1 Using logical operators to find whether a age of and person is lies between 18 to 44 or not.


// let age = prompt("Enter Your Age"); node js not support prompt in terminal, run in browser
// age = parseInt(age);
// let age = 23;

// if (age > 18 && age < 44) {
//     console.log("You'r age lies between 18 to 44")
// }
// else{
//     console.log("You'r age not lies between 18 to 44");
// }

// Q.2 Demonstrate a switch case staement in JS

// let percentage = prompt("Enter Your Percentage"); node js not support prompt in terminal
// percentage = parseInt(percentage);
let percentage = 90;

switch(true){
    case percentage >= 90:
        console.log("Excellent");
        break;
    case percentage >= 80:
        console.log("Good");
        break;
    case percentage >= 70:
        console.log("Average");
        break;
    case percentage >= 60:
        console.log("Fair");
        break;
    case percentage >= 50:
        console.log("Poor");
        break;
    case percentage <= 40:
        console.log("Fail");
        break;   
}

// Q.3 write a program to check whether a number is divisible by 2 and 3.

// let num = prompt("Enter Your Number");
// num = parseInt(num);
let num = 17;

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by 2 and 3");
}
else{
    console.log("Number is not divisible by 2 and 3");
}


// Q.4 write a program to check whether a number is divisible by 2 or 3.


// let number = prompt("Enter Your Number");
// number = parseInt(number);
let number = 17;

if (number % 2 == 0 || number % 3 == 0) {
    console.log("Number is divisible by 2 or 3");
}
else{
    console.log("Number is not divisible by 2 or 3");
}

// Q.5 Print "You can Drive" or "You can't Drive" based on age of a person. using ternary operator.

// let age = prompt("Enter Your Age");
// age = parseInt(age);

let age = 33;

console.log((age >= 18) ? "You can Drive" : "You can't Drive");

