

class TestCase {
    execute() {
        console.log("Running generic test");
    }
}
class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];

// for..of (Mostly used and the best for async/await)
for (let test of tests) { //let test: UnitTest | APITest | E2ETest
    test.execute();
}

// OR
// tests.forEach(function (test) {
//     test.execute();
// })
// OR
// for (let i = 0; i < tests.length; i++) {
//     tests[i].execute();
// }


