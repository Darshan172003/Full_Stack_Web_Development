// this keyword 

const user = {
    name: "Darshan",
    age: 21,
    city: "Jalgaon",
    getUserInfo: function(){
        return console.log(`Hello ${this.name}`); // this keyword refers to the object user in this case 
        console.log(this);
    }
}

// user.getUserInfo();
// user.name = "John";
// user.getUserInfo();

console.log(this); // this keyword refers to the global object window in the browser and empty object in the node.js

function user1(){
    let user = "Darshan";
    console.log(this.user); // The problem lies in the usage of this. In JavaScript, the value of this depends on how a function is called. In your case, since greet is a standalone function (not a method of an object), this refers to the global object (usually window in a browser environment). However, you haven’t defined a property named user on the global object, so this.user will be undefined.
}

// user1();

// function user2(){
//     let user = "Darshan";
//     console.log(this);
// }

// user2(); 

const user3 = () => {
    let user = "Darshan";
    console.log(this); 
}

user3(); 

// Arrow Function 

const addtwo = (a, b) => {
    return a + b; // return is necessary in arrow function if we are using curly braces. (Explicit return)
}

console.log(addtwo(2, 3)); 

const addtwo1 = (a, b) => a + b; // return is not necessary in arrow function if we are not using curly braces. (Implicit return)

// console.log(addtwo1(2, 3));

const addtwo2 = (a, b) => (a + b); // return is necessary in arrow function if we are using parentheses.

const getinfo = () => ({username: "Darshan"}); // object should be wrapped in parentheses if we are returning object in arrow function. 

console.log(getinfo());
