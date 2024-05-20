// Array 

const myArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myheros = ['spider man ', 'iron man', 'hulk']

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

