// Without Function. Repeated logic.

// let score = 75;
// let result = score >= 70 ? "PASS" : "FAIL";
// console.log(result);
// console.log();

// With Function.
let score1;
function getResult(score1) {
    return score1 >= 50 ? "PASS" : "FAIL";
}

getResult(85);
getResult(40);
getResult(70);

