function getStatus(code) {
    if (code >= 200 && code < 300) return "Success"
    if (code >= 400 && code < 500) return "client Error"
    if (code >= 500) return "Server Error"
}

console.log(getStatus(200)) // Success
console.log(getStatus(404)) // client Error
console.log(getStatus(500)) // Server Error




function logTest(name) {
    console.log(`Running test: ${name}`)
    // no return statement
}
let result = logTest("Login");
console.log(result); // undefined



// Hoisting is NOT possible when you use const or let to define a function
// Cannot access 'sayHi' before initialization
sayHi("Bob");
const sayHi = function (name) {
    console.log("Hello " + name);
}

// Below is NOT Hoisted
console.log(greet("Alice"))
function greet(name) {
    return `Hi, ${name}`;
}
