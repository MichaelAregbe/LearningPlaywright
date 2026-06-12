const obj = { a: 1, b: 2, c: 3 };

// Object methods
console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 30 };

// Loop using for...in
// Only if you specifically want to loop over inherited prototype properties - NOT RECOMMENDED!
// Extremely rare in modern web development
for (const key in user) {
    console.log(`${key}: ${user[key]}`); // ${user[key] Looks inside the user object, find the property matching this key, and give me whatever value is stored there
}


// Object.keys/values/entries
// Use when you only care about the keys
Object.keys(user).forEach(key => {
    console.log(key); // name, age
});
// when you only care about the values
Object.values(user).forEach(value => {
    console.log(value); // John, 30
});



// When you need both key and value - MOST RECOMMENDED
// Modern default
// Cleanest, most powerful and most readable
// Object.entries() converts the object into an Array, 
// you get access to all the powerful Array methods like .map(), .filter(), and .reduce()
/*
Example: Using filter with Object.entries() to get user data whose age is greater than 18
Object.entries(user)
    .filter(([key, age]) => age >= 18)
    .forEach(([key, age]) => console.log(key));

*/
Object.entries(user)
    .forEach(([key, value]) => {
        console.log(`${key}: ${value}`); // name: John, age: 30
    });

Object.entries(user)
    .filter(([key, age]) => age >= 18)
    // Because the first pair was thrown in the trash by the filter, 
    // only ["age", 30] made it to the forEach loop
    // it only has "age" left to print
    .forEach(([key, age]) => console.log(key)); // age. 