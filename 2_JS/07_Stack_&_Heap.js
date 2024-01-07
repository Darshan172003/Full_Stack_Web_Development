// Stack and Heap in JavaScript

// Stack (Primitive Data Types) - String, Number, Boolean, Null, Undefined, Symbol
// Heap (Reference Data Types) - Object, Array, Function

//The stack is used to store static data, whereas the heap is used to store dynamic data. The stack contains references to the objects in a heap. JavaScript also uses a garbage collector to deallocate unused memory from the heap. The stack is always reserved in a LIFO order, whereas the heap is stored randomly in a free order.

// For More info: https://codedamn.com/news/javascript/memory-management-complete-guide


let f_name = "John";
let anotherName = f_name; // pass by value => primitive data types

console.log(anotherName); 
console.log(f_name);

let Employee = {
    id: 1,
    name: "John",
    age: 65
}


let Employee2 = Employee; // pass by reference => reference data types

console.log(Employee2);

Employee2.id = 2; // changing value of Employee2 will also change value of Employee

console.log(Employee); // Employee2.id = 2
