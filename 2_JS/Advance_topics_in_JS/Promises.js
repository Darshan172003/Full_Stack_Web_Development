/* Promises in JavaScript are a way to handle asynchronous operations. They provide a clean and structured approach to dealing with tasks that may take some time to complete, such as fetching data from a server or reading a file. */

const PromiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 1 is completed");
        resolve(); // resolve the promise 
    })
})

PromiseOne.then(function () { // then is used to handle the resolved promise
    console.log("PromiseOne is completed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2 is completed");
        resolve();
    })
}).then(function () {
    console.log("PromiseTwo is completed");
})

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ id: 1, name: "John Doe" });
    })
})

PromiseThree.then(function (data) {
    console.log(data);
})

PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "John", password: "123" })
        }
        else {
            reject("ERROR: Something went wrong");
        }
    })
})

PromiseFour.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Promise either be resolved or rejected.")
})

const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    })
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/Darshan172003')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/Darshan172003')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("E: ", error);
})

// Promies.all => It takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. If any of the promises in the array is rejected, the Promise.all() method will reject with the reason of the first promise that was rejected. 

/* Example:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo'); // 100 ms delay and then resolve the promise 
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

Expected output: Array [3, 42, "foo"]
*/