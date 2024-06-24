// Can I change the math pi value in JavaScript?  
// Answer: No, you can't change the value of Math.PI in JavaScript beacuse in math writable property is set to false by default.

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 3.14;
// console.log(Math.PI);

const User = {
    username: "Darshan",
    email: "email@xyz.com",
    isLogin: true,
    login: function() {
        console.log(this.username, "is logged in");
    }
}

// console.log(User);

// console.log(Object.getOwnPropertyDescriptor(User, 'username'));

Object.defineProperty(User, 'username', {
    writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(User, 'username'));

// User.username = "John";
// console.log(User.username);

for (let [key, value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}