const AC_no = 123456789; // const is used to declare a variable which can't be changed once it is assigned a value
let AC_Email = "abc.gmail.com";

var AC_password = "password123"; // var is not used in javascript because it is a global variable and can be accessed from anywhere in the program which is not a good practice

account_balance = 1000000; // if we don't use let or var then it is considered as a global variable and can be accessed from anywhere in the program which is not a good practice

let account_city = "Bangalore"; // let is used to declare a variable which can be accessed only within the block of code where it is declared and not outside the block of code

let accoutn_state; // variable declared but not assigned any value to it so it is undefined

// AC_no = 987654321; // Error: Assignment to constant variable. not allowed to change the value of constant variable

console.log(AC_no); // prints the value of AC_no

AC_Email = "xyz.gmail.com"; // allowed to change the value of variable
AC_password = "password1234"; // allowed to change the value of variable
account_city = "Mumbai"; // allowed to change the value of variable

console.table([
  AC_no,
  account_city,
  AC_Email,
  AC_password,
  account_balance,
  accoutn_state,
]); // prints the values of all the variables in a table format
