let myName = "Darshan        ";
console.log(`Length : ${myName.length}`);

String.prototype.TrueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

myName.TrueLength();

let Myheros = ["Ironman", "Batman", "Spiderman"];

let heroPower = {
    Iroman: "Technology, Genius, Rich",
    Batman: "Rich",
    Spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spiderman Power is ${this.Spidermn} `);
    }
}

Object.prototype.Darshan = function() {
    console.log("Darshan is present in all Objects");
}

Array.prototype.HeyDarshan = function() {
    console.log("Darshan says Hello ");
}

myName.Darshan();
heroPower.Darshan();
Myheros.Darshan();
Myheros.HeyDarshan();

// Inheritance

const userDetails = {
    name: "Darshan",
    email: "darshanpatil@xyz.com"
}

const userHobby = {
    Hobby: "No Hobby"
}

userDetails.__proto__ = userHobby

// Mordern Syntax

Object.setPrototypeOf(userDetails, userHobby);

console.log(userDetails.Hobby);
