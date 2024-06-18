class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(this.username);
    }
}

class Admin extends User { // extends keyword is used to inherit the properties of User class to Admin class 
    constructor(username, role) {
        super(username); // super keyword is used to call the constructor of the parent class 
        this.role = role;
    }

    logMe() {
        console.log(`${this.username} => ${this.role}`);
    }
}

let Administrator = new Admin("Darshan", "Admin");

Administrator.logMe();

let User1 = new User("John");

User1.logMe();

console.log(Administrator instanceof Admin);
console.log(Administrator instanceof User);
console.log(User1 instanceof Admin);
console.log(User1 instanceof User);