/*
Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, 
determine if the triangle is equilateral (all sides are equal), 
isosceles (exactly two sides are equal), 
or scalene (no sides are equal). 
Use an if-else statement to classify the triangle.
*/

let lengthOfSideA = 10;
let lengthOfSideB = 15;
let lengthOfSideC = 35;

if (lengthOfSideA === lengthOfSideB && lengthOfSideB === lengthOfSideC && lengthOfSideC == lengthOfSideA) {
    console.log("It is an equilateral triangle");
} else if (lengthOfSideA === lengthOfSideB || lengthOfSideB === lengthOfSideC || lengthOfSideC == lengthOfSideA) {
    console.log("It is an isosceles triangle");
} else {
    console.log("It is a scalene triangle");
}

/*
Leap Year Checker:
Create a program that determines whether a given year is a leap year. 
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
Example; year = 2026 , no

Rule;


========Rules=======
---Leap Year Rule---
Every year that is exactly divisible by four is a leap year, 
except for years that are exactly divisible by 100, 
but these centurial years are leap years if they are exactly divisible by 400
*/

let year = 2028;
if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
    console.log("It is a leap year");
} else {
    console.log("It is not a leap year")
}