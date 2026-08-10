// DAY 1: Basic array transformation

// Goal: Learn how to use map() to transform arrays in simple ways.

// Exercise 1: Increment Each
// Question: Use map() to add 1 to each number.
// let numbers = [1, 2, 3, 4, 5];
// Expected: [2, 3, 4, 5, 6]

// Answer
// let numbers = [1, 2, 3, 4, 5];
// let newnumber = numbers.map((candy) => {
//     return candy + 1
// })
// console.log(newnumber);



// Exercise 2: Add "!" to Each Word
// Question: Use map() to add "!" at the end of each word.
// let words = ["Hello", "World", "JavaScript"];
// Expected: ["Hello!", "World!", "JavaScript!"]

// Answer
// let words = ["Hello", "World", "JavaScript"];
// let newnumber = words.map((candy) => {
//     return candy + "!"
// })
// console.log(newnumber);



// Exercise 3: Convert to Boolean
// Question: Use map() to convert each number to true if it's greater than 5, else false.
// let numbers = [3, 7, 2, 9, 4];
// Expected: [false, true, false, true, false]

// Answer
// let numbers = [3, 7, 2, 9, 4];
// let newnumber = numbers.map((candy) => {
//     return candy > 5
// })
// console.log(newnumber);



// Exercise 4: First Letter Only
// Question: Use map() to extract the first letter of each word.
// let words = ["apple", "banana", "cherry"];
// Expected: ["a", "b", "c"]

// Answer
// let words = ["apple", "banana", "cherry"];
// let newword = words.map((candy) => {
//     return candy[0]
// })
// console.log(newword);



// Exercise 5: Multiply by Index
// Question: Use map() to multiply each number by its index in the array.
// let numbers = [2, 4, 6, 8];
// Expected: [0, 4, 12, 24]

// Answer
// let numbers = [2, 4, 6, 8];
// let newnumber = numbers.map((candy, idx) => {
//     return candy * idx
// })
// console.log(newnumber);


//Uncomment each section one by one to see what happens.
//Read the question first, try to answer, then check the solution below.
