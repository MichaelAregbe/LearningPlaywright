// Higher-Order Functions
// A function that takes another function as an argument or returns a function
// Example:

function runWithLogging(testFunction, testName) { // This function is a higher-order function because it takes another function as an argument.
    console.log(`Starting test: ${testName}`);
    let result = testFunction(); // Executing the passed function
    console.log(`Finished: ${testName} -> ${result} `); // Displaying the result of the passed function
    return result; // returns the result of the passed function
}

function loginTest() { // This function is passed as an argument to the runWithLogging function. 
    return "Passed";
}
function ckeckoutTest() { // This function is passed as an argument to the runWithLogging function.
    return "Failed";
}

runWithLogging(loginTest, "Login Test"); // Executing the runWithLogging function with loginTest function as an argument.
runWithLogging(ckeckoutTest, "Checkout Test"); // Executing the runWithLogging function with ckeckoutTest function as an argument.

