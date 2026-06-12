function add(a, b, c) {
    return a + b + c
}
let num = [1, 2, 3];
console.log(add(...num));   // 6



function hasError(...codes) {
    return codes.includes(404)
}
console.log(hasError(200, 404, 500)) // true




function hasError1(...codes) {
    return codes.some(c => c >= 400)
}
let responseCodes = [200, 201, 404];
console.log(hasError1(...responseCodes)); //true




function getUserData(user, ...codes) {
    console.log("User:" + user);
    console.log("Codes:" + codes);
}

getUserData("John", 200, 201, 202)
