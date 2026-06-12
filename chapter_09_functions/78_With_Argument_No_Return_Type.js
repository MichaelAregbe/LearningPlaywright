// Type 2
// With argument/parameter but No return.

function greetByName(name) {    // parameter
    console.log("Hi there, " + name);
}

greetByName("John Doe");    // argument
greetByName("Mary Doe");


// To show they don't return anything
let name1 = greetByName("Mark"); //Output = Hi there, Mark. executes console.log("Hi there, " + name)
console.log(name1); // Output = undefined. The function has no return statement

