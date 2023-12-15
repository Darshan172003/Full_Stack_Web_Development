// Q.1 Create a variable of type string and add with a number. What is the type of the variable?

let string = "Darshan";
let number = 172003;

console.log(string + number); // Darshan172003
console.log(typeof(string + number)); // string

// Q.2 Use typeof operator to find the data type of the following variables:
let first_name = "Darshan";
let age = 21;
let isapproved = true;
let address;
let nullvalue = null;

console.table([
    { Variable: 'string + number', Type: 'string' },
    { Variable: 'first_name', Type: 'string' },
    { Variable: 'age', Type: 'number' },
    { Variable: 'isapproved', Type: 'boolean' },
    { Variable: 'address', Type: 'undefined' },
    { Variable: 'nullvalue', Type: 'object' }
]);

// Q.3 Create a constant variable with a value and try changing it later in the program. What happens?

const constant = "John";
console.log(constant); // John 

// constant = "Wick"; // TypeError: Assignment to constant variable.

// Q.4 Write a program to create a word-meaning dictionary of 5 words.

let dictionary = {
    "Apple": "A fruit",
    "Mango": "A fruit",
    "Car": "A vehicle",
    "Bike": "A vehicle",
    "Laptop": "A device"
};

console.log(dictionary); // access all dictionary
console.log(dictionary["Apple"]); // access Apple value
console.log(dictionary.Laptop); // access Laptop value



