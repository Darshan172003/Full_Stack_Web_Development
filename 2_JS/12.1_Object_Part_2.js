// Singleton Object

const innstauser = new Object();

innstauser.name = "Darshan";
innstauser.id = 123456;
innstauser.email = "xyz@mnp.com";

// console.log(innstauser);

const noramluser = {
    email: "something@gmail.com",
    fullname:{
        firstName: "Darshan",
        lastName: "Patil"
    },  
    }

console.log(noramluser.fullname.firstName);
console.log(noramluser.fullname?.firstName); // ? is used to check if the key is present in the object or not. If the key is not present then it will return undefined. If the key is present then it will return the value of the key in the object

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

const obj3 = Object.assign({}, obj1, obj2); // Merge the two objects obj1 and obj2 into obj3 {} is used to create a new object
// console.log(obj3); // Return the merged object obj3

console.log({...obj1, ...obj2}); // Merge the two objects obj1 and obj2 into obj3 using spread operator

const users = [
    {
        id: 1,
        name: "Darshan",
        age: 21
    },
    {
        id: 2,
        name: "John",
        age: 25
    }
];  

// console.log(users[1].name); // Access the name of the user at index 1 in the array of objects

// console.log(Object.keys(innstauser)); // Return the keys of the object
// console.log(Object.values(innstauser)); // Return the values of the  object
// console.log(Object.entries(innstauser)); // Return the key-value pairs of the object in the form of an array

// console.log(innstauser.hasOwnProperty('name')); // Check if the object has the key 'name' or not. If the key is present then it will return true. If the key is not present then it will return false   

// Object Destructuring

const course = {
    courseName: "JavaScript",
    courseInstructor: "Hitesh Choudhary Sir",
    duration: "2 months",
    fee: 2000
};

const {courseInstructor: instructor , courseName, duration, fee} = course; // Destructure the object course into the variables courseInstructor, courseName, duration, fee

console.log(courseName); // Return the value of the key courseName in the object course
// console.log(courseInstructor); // Return the value of the key courseInstructor in the object course
console.log(instructor); // Return the value of the key courseInstructor in the object course


// JSON api intro

// {
//     "name": "Darshan",
//     "age": 21,
//     "city": "Jalgaon",
//     "email": "some@gmail.com"
// }  // this is a JSON object that is used to send data from the client to the server or vice versa in the form of a string



