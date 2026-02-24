/*
Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score 
(e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

let score = 29;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 59) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}

/*
FizzBuzz Test:
Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" 
instead of the number, and for multiples of 5, print "Buzz." 
For numbers that are multiples of both 3 and 5, print "FizzBuzz."
*/
let num;
for (num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " = FizzBuzz");
    } else if (num % 3 === 0) {
        console.log(num + " = Fizz");
    } else if (num % 5 === 0) {
        console.log(num + " = Buzz");
    } else {
        console.log(num + " is not multiples of 3, multiples of 5, or multiples of 3 and 5");
    }
}