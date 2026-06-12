// Basic Async/Await

async function getTestResults() {
    return "Pass";
}

// async function ALWAYS returns a Promise
getTestResults().then(function (result) {
    console.log(result);
});

// Whenever there is function, use async keyword.
async function runTest() {
    let result = await Promise.resolve("Login test passed");// Whenever there is NO function, use await keyword.
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

runTest();