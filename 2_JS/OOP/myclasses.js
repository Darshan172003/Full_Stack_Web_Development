// ES6 

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return this.password.split('').reverse().join('');
    }
}

let John = new User("John", "JohnDoe@gmail.com", "password@1234500")

console.log(John.encryptPassword());

function User1(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function() {
    return this.password.split('').reverse().join('');
};

let tom = new User1("Tom", "tom@gmail.com", "pass#456789632")

console.log(tom);
console.log(tom.encryptPassword());

