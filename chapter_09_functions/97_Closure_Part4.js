// This is used in API testing.
// Write a function makeRateLimiter(limit) that returns a function.
// Each call to the returned function should track usage and return true if under limit.
// False if limit is exceeded.

function makeRateLimiter(limit) { // create function called makeRateLimiter which takes 'limit' as a parameter
    let call = 0; // initialize call to 0. First call is 0
    function track() {
        call++; // increment call
        return call <= limit; // return true if call is less than or equal to limit
    }

    return track; // return track function
}

let limiter = makeRateLimiter(3); // create limiter with limit of 3
console.log(limiter()); // true - call 1
console.log(limiter()); // true - call 2
console.log(limiter()); // true - call 3
console.log(limiter()); // false - call 4

