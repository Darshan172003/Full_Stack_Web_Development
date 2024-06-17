const setUserName = function (username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUserName.call(this, username); // call method is used to call the function setUserName and pass the current object as the first argument to the function. this keyword is used to refer to the current object.

    this.email = email;
    this.password = password;

}

const user = new createUser("Darshan", "Darshan@xyz.com", "1234");

console.log(user);