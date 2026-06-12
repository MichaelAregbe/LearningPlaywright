// 1.
// We can't have a spave in the keys of an object.
// let obj = { first name: "John" }
// console.log(obj[first name]); // SyntaxError: Unexpected identifier 'name'

// Unless we use quotes
let obj1 = { "first name": "John" }
console.log(obj1["first name"]); // John
console.log(obj1.firstname); // undefined (beacase space in key)


//2.
// Whenever you assign one object to another, it will always copy the reference, Not the value.
let student1 = { name: "John", age: 25 };
let student2 = student1; // student2 is now pointing to the same object as student1
student2.age = 26; // Changing the age of student2
console.log(student1.age); // 26 (age of student1 also changed because both are pointing to the same object)
console.log(student2.age); // 26

