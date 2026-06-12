// Hoisting
// Function declarations are hoisted
// you can call them before you define them.
// function expression (not hoisted)
// arrow function (not hoisted)


// Function declaration
console.log(greet("John")); // Hoisted
function greet(name) {
    return `Hello, ${name}!`;
}


// Function expression
console.log(greet1("John")); // Not hoisted
const greet1 = function (name) {
    return `Hello, ${name}!`;
}

