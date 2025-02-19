function multiplyBy5(num) {
    return num * 5;
}

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // undefined because power is not a property of multiplyBy5 function
console.log(multiplyBy5.prototype);


function user(name, score) {
    this.name = name;
    this.score = score;
}

user.prototype.increment = function () {
    this.score++;
}

user.prototype.printMe = function () {
    console.log(this.name, this.score);
}


const newuser = new user('John', 12); // new keyword creates a new object and binds it to the function user and this keyword points to the new object created.
console.log(newuser);

newuser.increment();
newuser.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/