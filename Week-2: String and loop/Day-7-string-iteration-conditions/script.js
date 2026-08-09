// Day 7 : String loop - iteration and conditions

// Q6: Count how many vowels (a, e, i, o, u) are in "Beautiful Day".

// Answer
// let word = "Beautiful Day";
// let count = 0;
// for (let i = 0; i < word.length; i++) {
//     let char = word[i].toLowerCase();
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
// }
// console.log(count);



// Q7: Remove all numbers from "a1b2c3d4e5".

// Answer
// let word = "a1b2c3d4e5";
// let result = "";
// for (let i = 0; i < word.length; i++) {
//     if (word[i] < "0" || word[i] > "9") {
//         result += word[i];
//     }
// }
// console.log(result);



// Q8: Print each character with its index. Example: "apple" → "a-0", "p-1", "p-2", "l-3", "e-4".

// Answer
// let word = "apple";
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i] + "-" + i);
// }



// Q9: Check if "level" is a palindrome (reads same forwards and backwards).

// Answer
// let word = "level";
// let reversed = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
// }
// console.log(word === reversed);



// Q10: Convert "hello" to uppercase without using .toUpperCase().

// Answer
// let word = "hello";
// let result = "";
// for (let i = 0; i < word.length; i++) {
//     let char = word[i];
//     if (char >= "a" && char <= "z") {
//         result += String.fromCharCode(char.charCodeAt(0) - 32);
//     } else {
//         result += char;
//     }
// }
// console.log(result);
