
let str = " Hello, World! ";

// Case Methods
console.log(str.toUpperCase()); // " HELLO, WORLD! "
console.log(str.toLowerCase()); // " hello, world! "

// Trim Methods
console.log(str.trim()); // "Hello, World!" removes whitespace from both start and end
console.log(str.trimStart()); // "Hello, World! " removes whitespace from the start only
console.log(str.trimEnd()); // " Hello, World!" removes whitespace from the end only

// Replace Methods
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // "Test: PASS. Retry: FAIL." (only first match)
console.log(msg.replaceAll("FAIL", "PASS")); // "Test: PASS. Retry: PASS." (all matches)

// Replace with Regular Expression. 
// Used often in API and automation testing. It can replace multiple occurrences.
console.log(msg.replace(/FAIL/g, "PASS")); // "Test: PASS. Retry: PASS." (same as replaceAll with regex)
// automation example
let currentUrl = "https://app.vwo.com/login";
let updatedUrl = currentUrl.replace(/app/g, "qa");
console.log(updatedUrl); // https://qa.vwo.com/login


// Concatenate Strings
"Hello" + " " + "World"
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

// Splitting & Joining
let result = "Pass,Fail,Skipped";
console.log(result.split(",")); // ["Pass","Fail","Skipped"] gives output as array.
console.log("hello".split("")); // ["h","e","l","l","o"] gives output as array of characters when separator is empty string.
console.log("test_login_pass".split("_").join(" ")); // test login pass. converts underscores to spaces


// Template literals(joining with format)
let parts = ["2026", "03", "07"];
let date = parts.join("-");
console.log(date); // 2026-03-07


