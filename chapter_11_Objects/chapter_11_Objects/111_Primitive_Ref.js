// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined
let a = 10;
let b = a;
b = 99;
console.log(a); // 10 - because call by value
console.log(b); // 99
a = 90;
console.log(a); // 90
console.log(b); // 99


console.log("-----")

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 }; // obj1 is stored in heap memory
let obj2 = obj1; // obj2 is pointing to the same object as obj1
obj2.val = 99; // changing the value of obj2
console.log(obj1.val); // 99 - because call by reference
console.log(obj2.val); // 99