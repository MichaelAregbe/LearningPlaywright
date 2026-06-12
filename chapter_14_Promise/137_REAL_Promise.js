function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser() // open Browser
    .then(function (msg) { // if successful
        console.log("Step 1", msg);
        return goToLogin(); // then run this function
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
        // 1 catch catches error for ALL then() above!
        // if there is NO catch() we won't be able to see the error!!
        // so catch is important!
        // .catch won't catch error from other .catch blocks.
        // .catch won't print anything if there is NO error in the chain. It will just skip the .catch block.
        // .catch does not stop the entire chain. It just skips the .catch block and continues with the .finally block.
    }).catch(function (error) { // if NOT successful
        console.log("Error:", error);
        //.finally() is used to execute code regardless of whether the Promise was resolved or rejected.
    }).finally(function () { // Always runs! no matter what happens
        console.log("Done execution!");
    });


