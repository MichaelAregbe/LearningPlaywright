// Test Case Example in Playwright:

import { test, expect } from '@playwright/test';

// In this test, the 1st thing is the name of the test. Or any kind of description of the test or instructions.
// the 2nd thing is a callback function that contains the code to be executed.
// the callback function takes a page object as an argument.
// in the below example, 'test' is the name of the test.
// Follwed by a function. 
// it has a parameter page.
// then the body.
// in the body we have the code to be executed.
// async/await is used to handle asynchronous code.
// Playwright is built on top of promises.
// Instead of chaining .then().then().then()... we use async/await.
// This makes our code look synchronous (like regular code that runs from top to bottom) but works asynchronously.
// For example: page.getByRole('button', { name: 'Username' }).click().then(() => { ... }).then(() => { ... })...
// Now we can write like this:  await page.getByRole('button', { name: 'Username' }).click(); await ...



// test("name of the test", function(parameters){})
// OR. The above and below are same
// test("name of the test", (parameters) => {})
// We use async when we dont know when the function will end. e.g async(parameters) => {} 
// async ({ page }) => {}. Page is an object
test('my test', async ({ page }) => { // async put before a function to make it return a Promise.
    // await is used to wait for the Promise to resolve. e.g await page.goto()
    await page.goto("https://www.saucedemo.com/");// means wait till the page is loaded

})
