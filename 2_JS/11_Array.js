// Array 

const myArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(myArray);

// Methods in Array

myArray.push(11); // add element at the end of the array
console.log(myArray); 

myArray.pop() // remove element from the end of the array
console.log(myArray);

myArray.shift() // remove element from the start of the array
console.log(myArray);

myArray.unshift(0) // add element at the start of the array
console.log(myArray);

console.log(myArray.indexOf(5)); // find the index of the element
console.log(myArray.includes(7)); // check if the element is present in the array

const newArray = console.log(myArray.join(' ')); // join the array elements with the given separator and return as a string

const Array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(Array1.slice(2, 5)); // slice the array from the given start index to end index except the end index

console.log(Array1.splice(2, 5)); // remove the elements from the given start index to end index and return the removed elements

// Difference between slice and splice is that slice does not modify the original array but splice does modify the original array 


console.log(`Original array is ${Array1}`); // original array

const Marvel = ['spider man ', 'iron man', 'hulk']
const DC = ['batman', 'superman', 'Black Adam']

const SuperHeros = Marvel.concat(DC); // Concatenate two arrays and return a new array

console.log(SuperHeros);

const SuperHeros1 = [...Marvel, ...DC]; // Concatenate two arrays using spread operator and return a new array 

console.log(SuperHeros1);


const anotherArray = [1,2,3,4,5,6,7,8,9,10,[11,12,13,14,15],[1,2,3[23,21,21]]];

console.log(anotherArray.flat(2)); // flat the array to the given depth and return a new array you can also use Infinity to flat the array to the infinite depth

console.log(Array.isArray("Namaste")); // check if the given element is an array or not

console.log(Array.from("Namaste")); // convert the given element to an array

console.log(Array.from({Name: "Darshan"})); // convert the elements of the object to an array empty array will be returned

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert the given elements to an array

