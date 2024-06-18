// static property 

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID() { // static method used to create static property.
        return 123;
    }
}


const John = new User('John');
John.logMe();

//  console.log(John.createID());
//we can't access static method using instance of class. because static method is not part of instance. it is part of class itself.

class User2 extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const Mike = new User2('Mike', 'mike@gmail.com');
Mike.logMe();

Mike.createID(); // we can't access static method using instance of class. because static method is not part of instance. it is part of class itself.