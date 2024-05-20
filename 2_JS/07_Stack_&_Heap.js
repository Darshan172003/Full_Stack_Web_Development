// Stack and Heap in JavaScript

// Stack (Primitive Data Types) - String, Number, Boolean, Null, Undefined, Symbol
// Heap (Reference Data Types) - Object, Array, Function

//The stack is used to store static data, whereas the heap is used to store dynamic data. The stack contains references to the objects in a heap. JavaScript also uses a garbage collector to deallocate unused memory from the heap. The stack is always reserved in a LIFO order, whereas the heap is stored randomly in a free order.

/* Stack:
 1. The stack is a data structure used to store static data.
 2. It holds information about function calls, local variables, and their values.
 3. Static data refers to data whose size is known by the engine during compile time.
 4. Examples of static data stored in the stack include primitive values like strings, numbers, booleans, null, and undefined.
 5. References that point to objects and functions are also included in the stack.
 6. A fixed amount of memory is allocated for static data (static memory allocation).
 7. The stack is limited in size.
 8. When a function is called, a new stack frame is created to store its local variables and parameters.
 9. Once the function execution completes, the stack frame is removed, freeing up the memory.
 10.Note: The stack is single-threaded, and each thread has its own stack
*/
 /* Heap:
 The heap is used to store objects and functions in JavaScript.
 1. Unlike the stack, the engine doesn’t allocate a fixed amount of memory for these objects.
 2. Instead, it dynamically allocates more space as needed.
 3. Objects, arrays, and other complex data types are stored in the heap.
 4. Variables in the stack contain references (memory addresses) to objects stored in the heap.
 5. The heap allows for flexible memory allocation based on runtime requirements.
 6. Garbage collection ensures that memory occupied by unused objects is released.
 7. Note: The heap is shared among all threads in a process.
*/

// For More info: https://codedamn.com/news/javascript/memory-management-complete-guide


let f_name = "John";
let anotherName = f_name; // pass by value => primitive data types // call by value

console.log(anotherName); 
console.log(f_name);

let Employee = {
    id: 1,
    name: "John",
    age: 65
}


let Employee2 = Employee; // pass by reference => reference data types // call by reference

console.log(Employee2);

Employee2.id = 2; // changing value of Employee2 will also change value of Employee

console.log(Employee); // Employee2.id = 2
