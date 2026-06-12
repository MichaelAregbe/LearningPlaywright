
function makeRetryTracker(max) {
    let attempts = 0;

    function tryAgain(testName) {
        attempts++;

        if (attempts > max) {
            return `${testName} has exceeded max retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };
    return tryAgain;
}

let retryLogin = makeRetryTracker(3);

console.log(retryLogin("Login"));
console.log(retryLogin("Login"));
console.log(retryLogin("Login"));
console.log(retryLogin("Login"));
