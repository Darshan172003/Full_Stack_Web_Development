// Object Literal

const user = {
    username: 'batman',
    logincount: 12,
    isloggedin: true,
    logIn: function () {
        console.log('User logged in');
        console.log("Username : ", this.username);
        console.log(this);
    },
}

// console.log(user.logIn());

// this keyword is showing a current context of the object in which it is used.

// Constructor Function

function User1(username, logincount, isloggedin) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    this.logIn = function () {
        console.log('User logged in');
        console.log("Username : ", this.username);
        console.log(this);
    }

    return this;
}

const UserOne = new User1('John', 12, true);
const UserTwo = new User1('Doe', 15, false);

// console.log(UserOne);
// console.log(UserTwo);

console.log(UserOne.constructor);
