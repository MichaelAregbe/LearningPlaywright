// Object storing values and methods.
// this keyword is used to refer to the current object.
// methods can call each other.
// return this allows chaining.

// Object storing values
const user = {
    name: "Pramod",
    age: 43
}

// Object storing methods.
const calculator = {
    value: 0,
    // name : "Pramod",
    // function 1 working on the same value
    add(n) {
        this.value += n;
        // this.name += "Dutta"
        return this;
    },
    // function 2 working on the same value
    substract(n) {
        this.value -= n;
        return this;
    }

}

console.log(calculator.add(5).substract(6));
// { value: -1, add: [Function: add], substract: [Function: substract] }
