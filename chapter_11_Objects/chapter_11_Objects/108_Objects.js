// Objects
// Key and value
// Object is stored in Heap memory
// Value is stored in the address... So if you change one, the other will also change.
// Reference is stored in the stack memory.
// SyntaxError: Unexpected identifier 
// - means you are Missing a comma between properties. You forget the comma separating your key-value pairs
// Example: let obj = { name: "John" age: 30 }; 
// - means you have spaces in your keys without using quotes
// Example: let obj = { first name: "John" }; 


let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

// -------


let a = { status: "pass" };
console.log(a.status); // pass
console.log(a["status"]); // pass

let a1 = { status: 'pass' };
console.log(a1.status); // pass

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]); // pass
console.log(a22["Status"]); // fail


// When you assign them, they point to the same object.. So if you change one, the other will also change.
let b = a;  // b copies the REFERENCE, not the object. b.status = "fail";
console.log(a.status); // fail


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); // false - different memory location


// JSON: double quotes are mandatory for keys
const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json); // { name: 'pramod', age: 10 }


// JS Object: double quotes are optional for keys. Best practice is to use no quotes for keys.
const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js); // { name: 'pramod', age: 10 }


// mixed key quotes allowed in JS Object
// Best practice is to use no quotes for keys unless 
// You should only use quotes when the key name forces you to (e.g. it has spaces, hyphens, or starts with a number).
const t = {
    "name": "pramod",
    age: 10
};
console.log(t); // { name: 'pramod', age: 10 }