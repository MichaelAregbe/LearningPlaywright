let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results); // All checks: [ 'Auth Ok', 'DB OK', 'Cache OK' ]
})

Promise.all([
    /*
    If ANY promise inside Promise.all() is rejected,
    the .then() block is skipped automatically.
    the .catch() block is executed immediately.
    [ 'OK', DB DOWN, 'OK' ] - One promise is rejected, so .catch() block is executed.
    But if ALL promises are resolved, then .then() block is executed.
    [ 'OK', 'OK', 'OK' ] - All promises are resolved, so .then() block is executed.
    Eg: Promise.all([OK, OK]) - then will execute
        Promise.all([OK, DB DOWN]) - catch will execute
    */
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });