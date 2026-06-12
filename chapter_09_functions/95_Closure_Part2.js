function makeCounter(start = 0) {
    let count = start;

    // ------ Example 1 ------
    // function increment() {
    //     count++;
    // }
    // function decrement() {
    //     count--;
    // }
    // function getCount() {
    //     return count;
    // }
    // return { increment, decrement, getCount }


    // ------ Example 2 ------
    // When you return in javascript you don't need to write 'function' keyword
    // You can also use shorthand 
    // In real life you will see this syntax more often
    // return {
    //     increment() { count++; }, // function expression 1
    //     decrement() { count--; }, // function expression 2
    //     getCount() { return count } // function expression 3
    // }


    // ------ Example 3 ------
    // You can also use arrow function
    // it is same as example 2 but with arrow function
    // But you can't use shorthand in this case
    // in example 2 we use: increment() { count++; } which is shorthand
    // in example 3 we use: increment: () => count++ which is not shorthand
    // in example 2 we use: getCount() { return count } which is shorthand
    // in example 3 we use: getCount: () => count which is not shorthand
    // in example 3 we use: increment: () => count++ which is concise
    // in example 3 we use: getCount: () => count which is concise
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    }
}

let counter = makeCounter(5);
counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
console.log(counter.getCount()); // 6
counter.decrement(); // 5
console.log(counter.getCount()); // 5

