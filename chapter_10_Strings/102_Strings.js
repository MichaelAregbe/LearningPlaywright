
let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`; // Template literals are used for string interpolation
console.log(message); // Output: Test completed in 320ms


// Single quote
let a = 'hello';

// Double quote
let b = "world";

// Template literals - allows expressions, multi-line strings, and easy variable injection.
let name = "John";
let msg = `Hello ${name}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multi-line strings
let report = `
    Test: Login
    Status: Passed
    Duration: 234ms
`;
console.log(report);

// String() constructor (converts other types to string)
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({ name: "John" })); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String(() => { })); // "() => {}


