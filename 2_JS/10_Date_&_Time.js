// Dates

const mydate = new Date();

console.log(mydate); 

console.log(mydate.toDateString());

console.log(mydate.toTimeString());

console.log(mydate.toLocaleString());

console.log(mydate.getFullYear());

console.log(mydate.getMonth());

console.log(mydate.getDate());

console.log(typeof mydate); // object


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})