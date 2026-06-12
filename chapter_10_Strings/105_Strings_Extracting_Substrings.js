
let str = "Login_Test_Pass_001";


// ----------------- Slice -----------------
// slice(startIndex, endIndex(exclusive)). negative indices are allowed
console.log(str.slice(0, 5)); // Login
console.log(str.slice(11)); // Pass_001
console.log(str.slice(10, 14)); // _Pas
console.log(str.slice(15)); // _001
console.log(str.slice(-3)); // 001
let testNumber = str.slice(-3); // 001

// ----------------- Substring -----------------
// substring(startIndex, endIndex(exclusive)). negative indices are not allowed. if negative indices are passed, it will treat them as 0.
console.log(str.substring(6, 10)); // Test

// at()
// at(index). negative indices are allowed. 
console.log(str.at(0)); // L. it is similar to charAt(0). 
console.log(str.at(-1)); // 1. last character



