// Day 5: String and array combined exercise

// Goal: Convert strings to arrays, manipulate them, and convert back. This is what you'll do 80% of the time in real projects.

// Q1: Given "apple,banana,grape", use .split(',') to convert it into an array. Then use a loop to print each fruit in uppercase.

// Answer
// let fruits = "apple,banana,grape";
// let fruitArray = fruits.split(',');
// let upperFruit;

// for (let i = 0; i < fruitArray.length; i++) {
//     upperFruit = fruitArray[i].toUpperCase();
//     console.log(upperFruit);
// }



// Q2: Given ["Hello", "World", "JavaScript"], use a loop to combine all elements into a single string with spaces between them. Output: "Hello World JavaScript".

// Answer
// let words = ["Hello", "World", "JavaScript"];
// let combinedString = "";

// for (let i = 0; i < words.length; i++) {
//     combinedString += words[i];
//     if (i < words.length - 1) {
//         combinedString += " ";
//     }
// }
// console.log(combinedString);



// Q3: Given "The quick brown fox", use .split(' ') to convert to an array. Then use a loop to create a new array with only words longer than 3 letters. Print it.

// Answer
// let sentence = "The quick brown fox";
// let wordArray = sentence.split(' ');
// let longWords = [];

// for (let i = 0; i < wordArray.length; i++) {
//     let currentWord = wordArray[i];
//     if (currentWord.length > 3) {
//         longWords.push(currentWord);
//     }
// }
// console.log(longWords);



// Q4: Given "I love programming", convert to an array of words. Use a loop to reverse the order of words. Output: "programming love I".

// Answer
// let sentence = "I love programming";
// let wordArray = sentence.split(' ');
// let reversedSentence = "";

// for (let i = wordArray.length - 1; i >= 0; i--) {
//     reversedSentence += wordArray[i];
//     if (i > 0) {
//         reversedSentence += " ";
//     }
// }
// console.log(reversedSentence);



// Q5: Given "racecar", convert to an array using .split(''). Use a loop to reverse the array, then join it back to a string. Check if it matches the original. Print true or false.

// Answer
// let originalString = "racecar";
// let charArray = originalString.split('');
// let reversedString = "";

// for (let i = charArray.length - 1; i >= 0; i--) {
//     reversedString += charArray[i];
// }

// if (reversedString === originalString) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }
