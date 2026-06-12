// Multiple Return Statements
function getStatus(code) {
    if (code >= 200 && code < 300) return "Success"
    if (code >= 400 && code < 500) return "client Error"
    if (code >= 500) return "Server Error"
}
console.log(getStatus(200)) // Success
console.log(getStatus(404)) // client Error
console.log(getStatus(500)) // Server Error



// Returns nothing
function logTest(name) {
    console.log(`Running test: ${name}`);
    // no return statement
}
let result = logTest("Login");
console.log(result); // undefined



// return multiple values via array or object
function aaa() {
    return [1, 2, 3];
    //return { "name": "John" }; - object
}
console.log(aaa())