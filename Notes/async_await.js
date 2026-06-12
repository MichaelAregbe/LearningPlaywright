/*
async and await are core JavaScript language features, not something specific to Playwright.
They were added to JavaScript in ES2017 (ES8)
Before that, asynchronous code was handled with callbacks and Promises:

// Old way — Promises with .then()
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Modern way — async/await (just nicer syntax for the same thing)
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
---- The Playwright rule of thumb----
Every test function     → async
Every Playwright action → await
---------------------------------------
*/

// await is only valid inside a function declared as async.
// if you use await, the enclosing function must be async:
// e.g

// ✅ Correct
async function login(page) {
    await page.goto("https://example.com");
    await page.fill("#username", "Dev");
}

// ❌ SyntaxError — await used outside async function
function login(page) {
    await page.goto("https://example.com"); // error!
}


/*
Can you use async without await? Technically yes — it's not an error but almost always a bug in Playwright.
Every Playwright action (click, fill, goto, waitFor..., etc.) returns a Promise and it doesn't happen instantly.
Without await, your code moves to the next line before the action finishes.
*/
// e.g
// WRONG — race condition
test('login', async ({ page }) => {
    page.click("#submit");           // not awaited
    page.click("#nextButton");       // might run before submit finishes!
});

// CORRECT — each step waits for the previous
test('checkout flow', async ({ page }) => {
    await page.goto("/cart");
    await page.click("#checkout");
    await page.fill("#email", "test@example.com");
    await expect(page.locator("#confirmation")).toBeVisible();
});

// Where else you'll see them (outside Playwright)
/*
// Node.js file reading
const fs = require("fs/promises");
async function readConfig() {
    const data = await fs.readFile("config.json", "utf-8");
    return JSON.parse(data);
}

// Browser fetch API
async function loadUser() {
    const res = await fetch("/api/user");
    return res.json();
}

// Database queries (e.g. MongoDB)
async function getUser(id) {
    const user = await db.collection("users").findOne({ id });
    return user;
}
*/