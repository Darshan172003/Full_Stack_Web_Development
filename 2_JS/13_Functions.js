// Function is a block of code that can be called and executed at any time.

// Function Declaration

function greet() {
    console.log('Hello World');
}

greet(); // Call the function greet

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(5, 10)); // Call the function addTwoNumbers

function greetUser(name) {
    if (name === undefined) { // Check if the name is provided. we can also use if(!name) to check if the name is provided or not
        return 'Please provide a name';
    }
    return `Hello ${name}`;
}

console.log(greetUser()); // Call the function greetUser
console.log(greetUser('Darshan')); // Call the function greetUser

// Default Parameters in Functions

function greetUser1(name = 'User') {
    return `Hello ${name}`;
}

console.log(greetUser1()); // Call the function greetUser1
console.log(greetUser1('Darshan')); // If the name is provided then it will return the name. If the name is not provided then it will return the default name 'User'

// fuctions in Objects and Arrays

function calculateCartPrice(...value){
    let total = 0;
    for (const val of value) { // Loop through the values in the array
        total += val;
    }
    return total;
}

console.log(calculateCartPrice(100, 200, 300, 400)); // Call the function calculateCartPrice


const users = {
    name: "Darshan",
    age: 21,
    city: "Jalgaon"
}

function getUserInfo(user){
    return `Hello ${user.name} from ${user.city}`;
}

console.log(getUserInfo(users)); // Call the function getUserInfo

const array1 = [0, 1, 2, 3, 4, 5];

function gettingArrayLength(array){
    return array.length;
}

console.log(gettingArrayLength(array1)); // Call the function gettingArrayLength
