/*
For Loop
1️⃣ Print "Hello" 5 times
2️⃣ Print numbers from 1 to 10
3️⃣ Print even numbers from 1 to 20
4️⃣ Print the sum of first 10 natural numbers
5️⃣ Print the multiplication table of 5

While Loop
1️⃣ Print "Playwright" 5 times
2️⃣ Print numbers from 1 to 10
3️⃣ Print even numbers from 1 to 20
4️⃣ Calculate sum of first 10 natural numbers
5️⃣ Print the multiplication table of 7
*/

// For Loop

// Print "Hello" 5 times
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// Print numbers from 1 to 10
for (let j = 1; j < 11; j++) {
    console.log(j);
}

// Print even numbers from 1 to 20
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Print the sum of first 10 natural numbers
for (let i = 0; i < 11; i++) {
    let sum = 0;
    sum = sum + i;
    console.log(sum);
}

// Print the multiplication table of 5
for (let i = 1; i < 13; i++) {
    let multiply = 5;
    let multiplicationTable = multiply * i;
    console.log(multiply + " * " + i + " = " + multiplicationTable);
}


// While Loop
// 1️⃣ Print "Playwright" 5 times
let i = 0;
while (i < 5) {
    console.log("Playwright");
    i++;
}

// 2️⃣ Print numbers from 1 to 10
let j = 1;
while (j < 11) {
    console.log(j);
    j++;
}

// 3️⃣ Print even numbers from 1 to 20
let k = 0;
while (k < 21) {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
}

// 4️⃣ Calculate sum of first 10 natural numbers
let sum = 0;
while (sum < 11) {
    sum = sum + sum;
    console.log(sum);
}


// 5️⃣ Print the multiplication table of 7

