// Day 3: string consitionals (Filtering Characters)

// Goal: Use if conditions inside loops to make decisions about characters.

// Q1: Given "Hello123World456", use a loop to create a new string that contains only the letters (remove numbers). Print it.

// Answer
// let name = "Hello123World456";
// let total;
// let store = "";

// for (let i = 0; i < name.length; i++) {
//     total = name[i];
//     if ((total >= "A" && total <= "Z") || (total >= "a" && total <= "z")) {
//         store += total;
//     }
// }
// console.log(store);  // "HelloWorld"



// Q2: Given "JavaScriptIsFun", use a loop to count how many uppercase letters are in the string. (Hint: char === char.toUpperCase())

// Answer
// let name = "JavaScriptIsFun";
// let candy;
// let count = 0;

// for (let i = 0; i < name.length; i++) {
//     candy = name[i];
//     if (candy == candy.toUpperCase() && candy >= "A" && candy <= "Z") {
//         count++;
//     }
// }
// console.log(count);  // 3 (J, I, F)



// Q3: Given "a b c d e", use a loop to create a new string with all spaces removed. Print it.

// Answer
// let names = "a b c d e";
// let result = "";

// for (let i = 0; i < names.length; i++) {
//     if (names[i] !== " ") {
//         result += names[i];
//     }
// }
// console.log(result);  // "abcde"



// Q4: Given "Hello World", use a loop to count how many vowels (a, e, i, o, u) are in the string. Print the count.

// Answer
// let letters = "Hello World";
// let count = 0;
// let candy;

// for (let i = 0; i < letters.length; i++) {
//     candy = letters[i].toLowerCase();
//     if (candy == "a" || candy == "e" || candy == "i" || candy == "o" || candy == "u") {
//         count++;
//     }
// }
// console.log(count);  // 3 (e, o, o)



// Q5: Given "abcd1234", use a loop to create a new string that contains only the even digits (2, 4, 6, 8). Print it.

// Answer
// let digits = "abcd1234";
// let candy;
// let result = "";

// for (let i = 0; i < digits.length; i++) {
//     candy = digits[i];
//     if (candy >= "0" && candy <= "9" && candy % 2 == 0) {
//         result += candy;
//     }
// }
// console.log(result);  // "24"
