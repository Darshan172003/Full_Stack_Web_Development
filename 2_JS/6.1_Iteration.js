// for of loop

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of array) {
        // console.log(num);
}

const greetings = "Good Morning";

for (const letter of greetings) {
    // console.log(` Each Char is ${letter}`);
}

// Map => Map is a collection of elements where each element is stored as a Key, value pair. It is iterable and can iterate over the keys, values, or both. It is similar to an object but the key can be of any type in Map. It removes the duplicate keys and stores only unique keys. 

let map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set("city", "Delhi");
map.set("country", "India");

// console.log(map);

// for (const value of map) { // it will return an array of key, value pair
//     console.log(value);
// }

for (const [key, value] of map) { // it will return key, value pair directly
    // console.log(`Key is ${key} and Value is ${value}`);    
}

const myObj = {
    name: "John",
    age: 30,
    city: "Delhi",
    country: "India"
}

// for (const [key, value] of myObj) { // it will throw an error as object is not iterable
//     // console.log(obj);     
// }


// for in loop => it is used to iterate over objects 

let obj = {
    john: 100,
    harry: 200,
    peter: 300  
}

for (const key in obj) {
    // console.log(`Marks of ${key} is ${obj[key]}`);
}

const numbers = [45, 4, 9, 16, 25];

for (const key in numbers) { // it will return index of array elements
    // console.log(numbers);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { 
    // console.log(programming[key]); // it will return array elements
}


const newmap = new Map()
newmap.set('IN', "India")
newmap.set('USA', "United States of America")
newmap.set('Fr', "France")
newmap.set('IN', "India")

for (const key in newmap) { 
    // console.log(key); // does not work with Map because Map is not an iterable object
}

// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (value) {
    // console.log(value);
})

coding.forEach( (language, index) => {
    // console.log(`Language at index ${index} is ${language}`)
})

function printme(value){
    // console.log(value);
}

coding.forEach(printme); // we give reference of function to forEach loop not calling it directly

const myarray_of_Obj = [
    {
        languageName: "javascript",
        filename: "js",
    },
    {
        languageName: "ruby",
        filename: "rb",
    },
    {
        languageName: "python",
        filename: "py",
    },
    {
        languageName: "java",
        filename: "java",
    },
    {
        languageName: "cpp",
        filename: "cpp",
    }
]

myarray_of_Obj.forEach((item) => {
    console.log(item);
    console.log(`\n ${item.languageName} \n`);
})

