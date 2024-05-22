// Imediatelty Invoked Function Expression (IIFE) 

// IIFE is a function that is executed right after it is created.
// It doesn't pollute the global object.

// Syntax: 
/* ( function f_name(){
    // code here
    })();
*/

(function iife(){
    // named iife function
    console.log("DB Connected Successfully");
})();

(() => {
    // unnamed iife function
    console.log("Again DB Connected Successfully");
})();

((name) => {
    console.log(`Hello ${name}`)
})("Darshan"); // passing arguments to iife function