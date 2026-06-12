function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}
/*
Here you're passing two arguments:
- "Dev" → goes into name
the anonymous function → goes into callback
*/
greetTester("Dev", function () { // greetTester("Dev", fn) is called
    /*
    console.log("Welcome, " + "Dev")
    callback() is called
    */
    console.log("Let's start testing!"); // Welcome, Dev // Let's start testing!
});



// Callback with Parameters
// data is passed back into the callback function
function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}
/*
Explanation 1:
    runTest("Login Test", fn) is called & status = "PASS" is set
    callback("Login Test", "PASS") is called
    name = "Login Test", result = "PASS" land inside the callback
Explanation 2:
    runTest("Login Test", ...)
    testName = "Login Test"
    status   = "PASS"
         ↓
    callback(testName, status)
         ↓
    function(name,     result)
         ↓
    console.log("Login Test → PASS")
*/
runTest("Login Test", function (name, result) {
    console.log(name + " → " + result); // Login Test → PASS
});




// Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];
/*
Explanation 1:
    forEach accepts a callback and automatically passes two things into it on each iteration:
    bug — the current item value
    i — the current index (starts at 0)
Explanation 2:
    let bugs = ["UI glitch", "API timeout", "Wrong redirect"];
    ------------bugs.forEach(fn)----------
    First Iteration
    bug = "UI glitch"
    i = 0
    console.log("Bug #1: UI glitch")

    Second Iteration
    bug = "API timeout"
    i = 1
    console.log("Bug #2: API timeout")

    Third Iteration
    bug = "Wrong redirect"
    i = 2
    console.log("Bug #3: Wrong redirect")
*/
bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});
console.log("Total bugs: " + bugs.length); //Total bugs: 3