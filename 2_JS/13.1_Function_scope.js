// Function scope

//var c = 300 
let a = 300 // Global scope
if (true) {
    let a = 10
    const b = 20
    var c = 30 
    // console.log("INNER: ", a); // local scope of a inside the if block
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = "Darshan"
    function two(){
        let website = "xyz.com"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined because website is defined inside the function two
    two();
}

one(); 

if (true) {
    let username = "John"
    if (username === "John") {
        let password = "1234"
        console.log(username);
    }
    // console.log(password); // ReferenceError: password is not defined because password is defined inside the if block
}   

// console.log(username); // ReferenceError: username is not defined because username is defined inside the if block

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ Interesing +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(10)); // Can access the function addone because function declaration is hoisted and it is available before the code execution

function addone(num){
    return num + 1;
}


// console.log(addtwo(10)); // ReferenceError: Cannot access 'addtwo' before initialization because addtwo is defined as a function expression and it is not hoisted like function declaration
const addtwo = function (num){
    return num + 2;
}

console.log(addtwo(10)); // Can access the function addtwo because it is defined before calling the function addtwo

