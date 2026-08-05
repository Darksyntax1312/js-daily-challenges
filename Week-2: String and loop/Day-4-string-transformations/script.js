// Day 4: string transformations ( Building new strings )

// Goal: Take a string and build a new transformed string using loops.

// Q1: Given "hello", use a loop to create a new string where every character is repeated twice. Output: "hheelllloo".

// Answer
// let digit = "hello";
// let candy;
// let chintu = "";

// for (let i = 0; i < digit.length; i++) {
//     candy = digit[i] + digit[i];
//     chintu += candy;
// }
// console.log(chintu);  // "hheelllloo"



// Q2: Given "code", use a loop to create a new string with a dash between each character. Output: "c-o-d-e".

// Answer
// let number = "code";
// let candy = "";

// for (let i = 0; i < number.length; i++) {
//     candy = candy + number[i];
//     if (i < number.length - 1) {
//         candy += "-";
//     }
// }
// console.log(candy);  // "c-o-d-e"



// Q3: Given "hello", use a loop to create a new string where every vowel is replaced with "*". Output: "h*ll*".

// Answer
// let name = "hello";
// let result;
// let candy = "";

// for (let i = 0; i < name.length; i++) {
//     result = name[i];
//     if (result == "a" || result == "e" || result == "i" || result == "o" || result == "u") {
//         candy += "*";
//     }
//     else {
//         candy += result;
//     }
// }
// console.log(candy);  // "h*ll*"



// Q4: Given "abc", use a loop to create a new string where each character is converted to uppercase + index. Output: "A0B1C2".

// Answer
// let digits;
// let letters = "abc";
// let newstring = "";

// for (let i = 0; i < letters.length; i++) {
//     digits = letters[i];
//     newstring += digits.toUpperCase();
//     newstring += i;
// }
// console.log(newstring);  // "A0B1C2"



// Q5: Given "madam", use a loop to check if the string is a palindrome (reads the same forwards and backwards). Print true or false.

// Answer
// let name = "madam";
// let candy = "";
// let crush = "";

// for (let i = 0; i < name.length; i++) {
//     crush += name[i];
// }
// for (let i = name.length - 1; i >= 0; i--) {
//     candy += name[i];
// }

// if (candy == crush) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }
