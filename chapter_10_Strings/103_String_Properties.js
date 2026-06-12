// String Properties & Basic Access

let str = "Hello, World!";
// Length property( starts from 1 not 0 )
console.log(str.length); // 13

// Access by index ( starts from 0 )
console.log(str[0]); // H 
console.log(str[7]); // W
console.log(str[12]); // !
console.log(str[-1]); // undefined
console.log(str[-6]); // undefined
console.log(str.at(-1)); // ! (last character)
console.log(str.at(-7)); // " " (space)
console.log(str.at(13)); // undefined

// charAt() method (not recommended)
console.log(str.charAt(0)); // H
console.log(str.charAt(-1)); // "" returns an empty string ("") when the index doesn't exist.
console.log(str.charAt(13)); // "" returns an empty string ("") when the index doesn't exist.
console.log(str.charAt[13]); // undefined. return undefined when the index doesn't exist.

// charCodeAt() method
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(13)); // NaN

// 
