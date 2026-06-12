// What is the output?
let str = "  PASS  ";
console.log(str.trim().toLowerCase()); // pass
/*
- a) " pass "
- b) "PASS" 
- c) "pass" 
- d) " pass "
*/



// What does this return?
console.log("pass,fail,skip".split(",").length); // 3
/*
- a) 1
- b) 2
- c) 3
- d) 4
*/



// What is the output?
let str1 = "hello";
str[0] = "H";
console.log(str1); // hello. String are immutable so it will not change.
/*
- a) "Hello"
- b) "hello" 
- c) "H"
- d) Error
*/



//  Which correctly extracts `"staging"` from this URL?
let url = "https://staging.example.com";
// Output
console.log(url.slice(8, 15)) // staging
console.log(url.split("://")[1].split(".")[0]) // staging
/*
- a) url.split(".")[0]
- b) url.slice(8, 15)
- c) url.split("://")[1].split(".")[0]
- d) Both b and c
*/



// What does this return?
console.log("Error: 404 Not Found".match(/\d+/g)); // ["404"] it returns an array..
/*
- a) "404" 
- b) ["404"]
- c) [404]
- d) null
*/

