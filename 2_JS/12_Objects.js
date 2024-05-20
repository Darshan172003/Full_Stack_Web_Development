// Singleton Object 
// Object.create() Method used to create singleton object

// Object literal 

const mySymbol = Symbol('mySymbol');

const myObject = {
    name: "Darshan",
    age: 21,
    [mySymbol]: "This is a symbol", // Symbol is used to create a unique key in the object. Syntax to declare a symbol in object is [mySymbol]: "value"
    city: "Jalgaon",
    email: "darshanpatil135790@gmail.com",
    hobbies: ['coding', 'reading', 'gaming'],
    isLoggedin: true
};

console.log(myObject);
console.log(myObject.name); // Dot notation 
console.log(myObject['email']); // Bracket notation 
console.log(myObject[mySymbol]); // Symbol notation to access the symbol key in the object


myObject.name = "Darshan Patil"; // Update the value of the key in the object
// console.log(myObject);
// Object.freeze(myObject); // Freeze the object so that the object cannot be modified
myObject.name = "Darshan"; // Update the value of the key in the object
// console.log(myObject); // Object is frozen so the value of the key cannot be updated


myObject.greetings = function(){
    console.log(`Hello ${this.name}`); // Method in the object
}

console.log(myObject.greetings()); // Call the method in the object
console.log(myObject.greetings); // Return the method in the object as a function but not call the method in the object
