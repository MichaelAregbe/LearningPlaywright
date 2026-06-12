// Searching and Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() method
console.log(url.includes("staging")); // true
console.log(url.includes("login")); // true
console.log(url.includes("production")); // false
console.log(url.includes("www")); // false


// startswith / endsWith
console.log(url.startsWith("https://")); // true
console.log(url.startsWith("http://")); // false

console.log(url.endsWith("true")); // true
console.log(url.endsWith("retry=true")); // true
console.log(url.endsWith("staging")); // false


// search
// search method returns the index of the first match of the regular expression.
console.log(url.search(/staging/)); // 8
console.log(url.search(/production/)); // -1
console.log(url.search(/\d+/)) // -1 as there are no digits in the string
console.log(url.search(/\w+/)) // 0 as the first character is w which matches \w+
console.log(url.search(/\s+/)) // -1 as there are no whitespace characters in the string

// indexof / lastindexof
console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a")); // 24
console.log(url.indexOf("nothere")); // -1


