let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});


// then() method used to handle the successful resolution of a Promise.
// .then() runs ONLY when the promise resolves successfully.
apiCall.then(function (response) {
    console.log(response); // { status: 200, body: 'User Data' }
    console.log(response.status); // 200
    console.log(response.body);   // User Data
})


