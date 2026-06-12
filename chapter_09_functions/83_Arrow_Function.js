// Arrow function as expression. No curly bracket or return needed
// Arrow function only works whenever you have a single line
// Arrow function can work for multi line but with curly braces and return
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Simon"));


const doubleIt = n => n * 2;
console.log(doubleIt(15))

// No parameter is required
const getEnv = () => "staging"
console.log(getEnv());


const getResult = (score) => {
    if (score >= 70) return "pass";
    return "fail";
}
console.log(getResult(70));
