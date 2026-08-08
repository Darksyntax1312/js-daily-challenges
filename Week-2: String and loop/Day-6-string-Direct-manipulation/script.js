// Day 6 : String direct manipulation

// Q1: Print each character of "JavaScript" on a new line.

// Answer
// let word = "JavaScript";
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }



// Q2: Count how many times the letter 'e' appears in "Hello Everyone".

// Answer
// let word = "Hello Everyone";
// let count = 0;
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === "e") {
//         count++;
//     }
// }
// console.log(count);



// Q3: Print the string "coding" backwards.

// Answer
// let word = "coding";
// let reversed = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
// }
// console.log(reversed);



// Q4: Print only the uppercase letters from "HeLLo WoRLd".

// Answer
// let word = "HeLLo WoRLd";
// let uppercase = "";
// for (let i = 0; i < word.length; i++) {
//     if (word[i] >= "A" && word[i] <= "Z") {
//         uppercase += word[i];
//     }
// }
// console.log(uppercase);



// Q5: Replace all spaces with "-" in "Hello World JavaScript".

// Answer
// let word = "Hello World JavaScript";
// let result = "";
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === " ") {
//         result += "-";
//     } else {
//         result += word[i];
//     }
// }
// console.log(result);
