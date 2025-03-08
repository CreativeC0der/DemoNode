console.log("Before timeout");

setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000); // Executes after 3000 milliseconds (3 seconds)

// setTimeout is afunction which takes 2 parameters
// 1st parameter - CALLBACK FUNCTION
// 2nd Parameter

// NON BLOCKING ASYNCHRONOUS
console.log("After timeout setup");