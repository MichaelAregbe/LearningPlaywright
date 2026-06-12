function outer() {
    let message = "hello";
    console.log("Outer Called");

    function inner() {
        console.log(message);
    }
    return inner; // no bracket "()" otherwise it will execute the function
}
let innerFunc = outer();
innerFunc();
// Outer() will first print "Outer Called" and then return inner function to print the message i.e.hello
// Output:
// Outer Called
// hello
