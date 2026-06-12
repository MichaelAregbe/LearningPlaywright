// Callback Function
// A function that is passed as an argument to another function to execute it later



// ----- Example 1 -----
function runTest(testName, callback) {
    let result = "pass";
    callback(testName, result);
}
function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}
runTest("LoginTest", onComplete)
// Output:
// LoginTest finished with: pass



// ----- Example 2 -----
function processUser(user, callback) {
    console.log(`Processing user: ${user}`);
    callback(user);
}

processUser("Alice", function (user) {
    console.log(`Displaying info for ${user}`);
});

// Output:
// Processing user: Alice
// Displaying info for Alice