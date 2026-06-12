// const objects are mutable but the reference to the object is constant.
// This means you can modify the properties of the object, but you cannot reassign the object to a new value.
// If you try to reassign the object, you will get an error.
// user.age = 31; // this will work
// user = { name: "Jane", age: 25, email: "[EMAIL_ADDRESS]" }; // this will not work
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user); // { name: 'John', age: 30, email: 'john@example.com' }

// Accessing properties
console.log(user.name); // John
console.log(user["age"]); // 30

// Dynamic property access
const key = "age"; // you can use any other dynamic keys here. for example "email", "name", etc.
console.log(user[key]); // 30


// Adding/modifying properties
user.city = "NYC"; // new property can be added if not exists.
user.age = 31; // existing property can be updated.

console.log(user); // { name: 'John', age: 31, email: 'john@example.com', city: 'NYC' }
