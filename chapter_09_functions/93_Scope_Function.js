// Scope in Functions
// let is a block scope and it is only available within the block where it is declared.



let env = "staging"; // Global Scope
function setupConfig() { // Function Scope
    let timeout = 5000;
    console.log(env);
    console.log(timeout);
}
setupConfig(); // Output: staging 5000
console.log(env); // Output: staging (works because it is global)
console.log(timeout); // ReferenceError: timeout is not defined. Not accessible outside the function


// Nested scope
// Blocked Scope
// Outer function cannot access inner function variables
function outer() { // Outer Scope
    let outerVar = "Outer"; // Blocked Scope
    function inner() { // Inner Scope
        let innerVar = "Inner"; // Blocked Scope
        console.log(outerVar);
        console.log(innerVar);
    }
    inner(); // Output: Outer Inner
    console.log(innerVar); // Output: ReferenceError: innerVar is not defined. Not accessible outside the function
}
outer(); // Output: Outer Inner
