
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
// Because of the Object Destructuring happening on line 4, brand new, standalone variable is automatically created. 
console.log(name1); // John
console.log(age); // 30

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30

// Default values
const { country = "USA" } = user;
console.log(country); // USA  

const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
