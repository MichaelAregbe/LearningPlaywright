const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//Spread operator
const copy = { ...obj1 };
console.log(copy); // { a: 1, b: 2 }
// Merge objects using spread operator
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// this keyword
const user = {
    name: "Pramod",
    saymyName(lastName) {
        this.name += lastName;
        return this.name;
    }
}
console.log(user.saymyName("Dutta")); // PramodDutta

// Object method
const user1 = {
    name: "Pramod",
    login() {
        console.log(this.name + " logged in at " + new Date());
    }
}
user1.login(); // Pramod logged in at Thu Jun 04 2026 04:44:20 GMT+0100 (Irish Standard Time)