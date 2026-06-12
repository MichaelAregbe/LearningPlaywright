// Pure Function
// A function that returns the same output for the same input and has no side effects
// Predicted output
// Variables defined outside the function are not allowed in pure function.
// Pure function are easy to debug and test.
// If the function doesn't have parameters it is also pure function
// But it is not good practice to use global variables in function
// If you don't give a value it becomes pure
// Example of Pure function
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 10)); // 50
console.log(multiply(5, 10)); // 50
console.log(multiply(5, 10)); // 50




// If you give a direct value it becomes impure
// Example of Impure function
let x = 10;
function multiply(y) {
    return x * y;
}
console.log(multiply(5)); // 50
console.log(multiply(5)); // 50
console.log(multiply(5)); // 50




