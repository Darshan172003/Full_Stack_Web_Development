// Primitive data types are call by value because they are stored in stack memory 


// 7 types of primitive data types in javascript are:
// string , symbol , number , null , bigint , boolean , undefined

const score = 100; // number datatype => typeof score returns number
const name = "darshan"; // string datatype => typeof name returns string
const isApproved = true; // boolean datatype => typeof isApproved returns boolean
const address = null; // null datatype  => typeof null returns object which is a bug in javascript
const age = undefined; // undefined datatype => typeof undefined returns undefined
const bigNumber = 1234567890123456789012345678901234567890n; // bigint datatype => typeof bigNumber returns bigint
const symbol = Symbol("1234"); // symbol datatype => typeof symbol returns symbol

const symbol1 = Symbol("1234");

console.log(symbol === symbol1); // returns false because symbol datatype is used to store unique identifiers


// Rerference (Non-Primitive) data types are call by reference because they are stored in heap memory

// array , object , function

const hobbies = ["coding", "reading", "gaming"]; // array datatype => typeof hobbies returns object

const person = {
    name: "darshan",
    age: 21,
    isApproved: true,
    address: null,
}; // object datatype => typeof person returns object  


const sayHello = function () {
    console.log("Hello");
} // function datatype => typeof sayHello returns function object

console.log(typeof hobbies);
console.log(typeof person);
console.log(typeof sayHello);

// https://262.ecma-international.org/5.1/#sec-11.4.3