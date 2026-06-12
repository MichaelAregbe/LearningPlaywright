// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}