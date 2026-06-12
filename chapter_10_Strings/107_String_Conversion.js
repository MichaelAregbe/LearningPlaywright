
// toString
(200).toString(); // 200.it is converted to string.
true.toString(); // true.it is converted to string.

Number("42"); // 42.it is converted to number.

parseInt("42px"); // 42.it is converted to number.
parseFloat("3.14rem"); // 3.14.it is converted to float.


let str = "hello";
let upper = str.toUpperCase();
str[0] = "H";
console.log(str[0]); // h (Strings are immutable)
console.log(upper); // HELLO (new string is created)

