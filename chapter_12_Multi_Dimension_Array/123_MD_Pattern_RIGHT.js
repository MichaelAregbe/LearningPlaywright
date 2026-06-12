// n = 3a
// *
// * *
// * * *

// 1. Identify the number of lines or rows.
//    This is the number of times the outer loop will run
//    for (let row = 1; row <= n; row++)

// 2. Identify how many columns will be in each row 
//    For this, row1 = 1, row2 = 2, row3 = 3
//    for (let col = 1; col <= row; col++)
//    Outer loop starts with row. So, the value of i/row becomes 1.
//    1 is passed to the inner loop for row1.
//      row is 1 and col is 1(col <= row). So it prints 1 star.
//      row is 1 and col becomes 2(col is not <= row). So nothing is printed so it breaks and goes for the next iteration or next row.
//      row is 2 and col is 1(col <= row). So it prints 1 star.
//      row is 2 and col is 2(col <= row). So it prints 1 star. 2 stars are printed for row 2.
//      row is 2 and col becomes 3(col is not <= row). So nothing is printed so it breaks and goes for the next iteration or next row.
//      row is 3 and col is 1(col <= row). So it prints 1 star.
//      row is 3 and col is 2(col <= row). So it prints 1 star.
//      row is 3 and col is 3(col <= row). So it prints 1 star. 3 stars are printed for row 3.
//      row is 3 and col becomes 4(col is not <= row). So nothing is printed so it breaks and goes for the next iteration or next row.


let n = 3;
for (let i = 1; i <= n; i++) { // number of lines or rows
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim());
}


// n1 = 4
// * * * *
// * * *
// * * 
// *
/*
   Row 
    1    * * * *  (n1 + 1 - row)
    2    * * *    (n1 + 1 - row)
    3    * *      (n1 + 1 - row)
    4    *        (n1 + 1 - row)
*/
let n1 = 4;
for (let row = 1; row <= n1; row++) {

    for (let col = 1; col <= n1 + 1 - row; col++) {
        process.stdout.write("* ");
    }
    console.log();

}