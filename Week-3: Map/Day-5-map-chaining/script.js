// DAY 5 : map chaining

// Goal: Learn how to chain multiple map() calls together.

// Exercise 21: Triple Chain
// Question: Chain 3 map() calls:
// 1. Double the number
// 2. Add 10
// 3. Convert to string with "$" prefix
// let numbers = [1, 2, 3, 4];
// Expected: ["$12", "$14", "$16", "$18"]

// Answer
// let numbers = [1, 2, 3, 4];
// let newnumber = numbers.map((candy) => {
//     return candy * 2
// })
// let secondnumber = newnumber.map((candy1) => {
//     return candy1 + 10
// })
// let thirdnumber = secondnumber.map((candy2) => {
//     return "$" + candy2
// })
// console.log(thirdnumber);



// Exercise 22: String Manipulation Chain
// Question: Chain map() to:
// 1. Convert to uppercase
// 2. Add "!" at the end
// 3. Add "Hello " at the beginning
// let names = ["john", "jane", "bob"];
// Expected: ["Hello JOHN!", "Hello JANE!", "Hello BOB!"]

// Answer
// let names = ["john", "jane", "bob"];
// let names1 = names.map((candy) => {
//     return candy.toUpperCase()
// })
// let names2 = names1.map((candy1) => {
//     return "Hello " + candy1
// })
// let names3 = names2.map((candy2) => {
//     return candy2 + "!"
// })
// console.log(names3);



// Exercise 23: Math Chain
// Question: Chain map() to:
// 1. Double the number
// 2. Subtract 5
// 3. Multiply by 3
// let numbers = [2, 4, 6, 8];
// Expected: [-3, 9, 21, 33]

// Answer
// let numbers = [2, 4, 6, 8];
// let newnumber = numbers.map((candy) => {
//     return candy * 2
// })
// let secondnew = newnumber.map((candy1) => {
//     return candy1 - 5
// })
// let thirdnumber = secondnew.map((candy2) => {
//     return candy2 * 3
// })
// console.log(thirdnumber);



// Exercise 24: Complex Chain
// Question: Chain map() to:
// 1. Convert number to string
// 2. Add "★" repeated that many times
// 3. Add " Rating" at the end
// let ratings = [3, 4, 5, 2];
// Expected: ["★★★ Rating", "★★★★ Rating", "★★★★★ Rating", "★★ Rating"]

// Answer
// let ratings = [3, 4, 5, 2];
// let newnumber = ratings.map((candy) => {
//     return candy.toString()
// })
// let newnumber1 = newnumber.map((candy1) => {
//     return "★".repeat(candy1)
// })
// let newnumber2 = newnumber1.map((candy2) => {
//     return candy2 + " " + "Rating"
// })
// console.log(newnumber2);



// Exercise 25: Mixed Chain
// Question: Chain map() and forEach():
// 1. Use map() to double all numbers
// 2. Use map() again to convert to strings
// 3. Use forEach() to print each string
// let numbers = [1, 2, 3, 4];
// Expected output (printed): 2, 4, 6, 8
// Return the array of strings

// Answer
// let numbers = [1, 2, 3, 4];
// let newnumber = numbers.map((candy) => {
//     return candy * 2
// })
// let newnumber1 = newnumber.map((candy1) => {
//     return candy1.toString()
// })
// let newarray = [];
// newnumber1.forEach(function(candy2) {
//     newarray.push(candy2)
// })
// console.log(newarray);
