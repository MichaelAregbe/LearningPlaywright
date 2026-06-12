// Creating empty javascript object.
// You can add properties to the object at any time.
// Here "config" is an object. 
// It is a key-value store that can hold any data type.
// {} is a empty object.
let config = {}; // empty object
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // latest
console.log(config);
delete config.browser;
console.log(config);

