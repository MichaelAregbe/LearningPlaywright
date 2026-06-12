
// Immediately Invoked Function Expression (IIFE)
// They don't need to be called. 
// It calls itself

function name1() {
    console.log("Hi")
}
name1();

// IIFE
// Just wrap them into brackets and just call it with () at the end.
(function () {
    console.log("Hi")
})();


// 

(function () {
    console.log("Staging")
})();

// IIFE with Arrow Function
(() => {
    console.log("Setup complete");
})();