"use strict"; // to enable strict mode in javascript which helps to write secure javascript code and avoid common errors
//  treat all JS code as newer version of JS

//  alert("Hello World"); 

// to display an alert box with the message "Hello World". we are using node.js to run javascript code so alert box will not be displayed not browser

let f_name = "Darshan"; // string datatype
let age = 21; // number datatype
let isApproved = true; // boolean datatype
let address; // undefined datatype
let nullValue = null; // null datatype

console.log(f_name); // prints the value of name

// 7 primitive datatypes in javascript are:

// string           => datatype is used to store text data
// symbol           => datatype is used to store unique identifiers 
// number           => datatype can be of two types: integer and float (decimal number)
// null             => datatype is used to assign null value to a variable is type value is object 
// bigint           => datatype is used to store large numbers
// boolean          => datatype is used to store true or false values
// undefined        => datatype is used to declare a variable but not assign any value to it so it is undefined


console.log(typeof f_name);     // prints the datatype of name   => string
console.log(typeof null);       // prints the datatype of null   => object

/* 
The `null` value being of type `object` in JavaScript is actually a bug that has existed since the very first version of JavaScript. It's recognized as a mistake in the language's design, but it has never been corrected due to the potential for breaking existing code.

When you use `typeof null`, it returns `"object"` because `null` was intended to represent a non-existent object reference. However, `null` is a primitive value in JavaScript, not an object.

The reason this bug hasn't been fixed is because of the vast amount of JavaScript code running on the web. Changing the return value of `typeof null` from `"object"` to `"null"` could potentially break some of that code, so the decision was made to leave this bug in the language specification.
*/

console.log(typeof undefined);  // prints the datatype of undefined   => undefined

// non primitive datatypes in javascript are:

// Objects are used to store collection of data in key-value pairs and are of reference type in javascript
// Objects are used to store complex data and are of reference type in javascript

let person = {
    name: "Darshan",
    age: 21,
    isApproved: true,
    address: "Jalgaon",
    nullValue: null,
    undefinedValue: undefined,
    }; // object declaration

console.log(person["name"]); // prints the value of name
console.log(person.age); // prints the value of age
console.log(person); // prints the value of all the properties of object
