function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`)
}

retry("Login")
retry("Checkout", 5)
retry("API Test", 2, 500)

// why do we use parameters?
// because they make our functions flexible and reusable.
// Example without Parameters:
// function printMessage() {
//     console.log("Login Failed - Please retry");
//     console.log("Login Failed - Please retry");
//     console.log("Login Failed - Please retry");
// }

// printMessage();