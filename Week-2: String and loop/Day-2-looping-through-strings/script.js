// Day 2: looping through strings (Character by Character)

// Goal: Use for loops to look at every character in a string.
// Q#	Question
// 1	Given "Hello", use a loop to print each character on a new line.

// Answer

// let word = "Hello";
// for (let i = 0; i < word.length; i++) {
// console.log(word[i]);
// }


// 2	Given "JavaScript", use a loop to count how many characters are in the string (do NOT use .length—count manually). Print the count.

// Answer

// let name = "JavaScript";
// for (let i = 1; i < name.length + 1; i++) {
//     console.log(i)
// }


// 3	Given "coding", use a loop to print each character and its index. Output: "c is at index 0", "o is at index 1", etc.

// Answer

// let name = "coding";

// for (let i = 0; i < name.length; i++) {
//     let result = name[i].concat(" is at index ", i)
//     console.log(result.toString()); 
// }

// 4	Given "racecar", use a loop to print the string backwards (character by character).


// Answer

// let name = "racecar";
// for (let i = name.length -1; i >= 0; i--) {
//     console.log(name[i])
// }


// 5	Given "banana", use a loop to count how many times the letter 'a' appears. Print the count.


// Answer


// let name = "banana";
// let increment = 0;

// for (let i = 0; i < name.length; i++) {
//     if (name[i] == "a") {
//        increment++
//     }
// }
// console.log(increment);
