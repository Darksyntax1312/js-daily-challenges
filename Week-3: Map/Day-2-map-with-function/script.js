// DAY 2: Map with functions

// Goal: Learn how to use map() inside functions for reusable code.

// Exercise 6: Function with Map
// Question: Write a function doubleAndAddFive(arr) that uses map() to double each number and add 5.
// doubleAndAddFive([1, 2, 3]); // [7, 9, 11]
// doubleAndAddFive([10, 20]); // [25, 45]

// Answer
// function doubleAndAddFive(arr) {
//     let newArry = arr.map((candy) => {
//         return (candy * 2) + 5
//     })
//     return newArry
// }
// console.log(doubleAndAddFive([1, 2, 3]));
// console.log(doubleAndAddFive([10, 20]));



// Exercise 7: Reusable Function
// Question: Write a function applyDiscount(prices, discount) that uses map() to apply a discount percentage to each price.
// applyDiscount([100, 200, 300], 10); // [90, 180, 270]
// applyDiscount([50, 75], 20); // [40, 60]

// Answer
// function applyDiscount(prices, discount) {
//     let newPrices = prices.map((price) => {
//         return price - (price * discount / 100)
//     })
//     return newPrices
// }
// console.log(applyDiscount([100, 200, 300], 10));
// console.log(applyDiscount([50, 75], 20));



// Exercise 8: Function Composition
// Question: Write a function processStrings(arr) that:
// - Uses map() to convert each string to uppercase
// - Uses map() again to add "!" at the end
// - Returns the final array
// processStrings(["hello", "world"]); // ["HELLO!", "WORLD!"]

// Answer
// function processStrings(arr) {
//     let upper = arr.map((word) => {
//         return word.toUpperCase();
//     })
//     let withExclamation = upper.map((word) => {
//         return word + "!";
//     })
//     return withExclamation
// }
// console.log(processStrings(["hello", "world"]));



// Exercise 9: Function with Condition
// Question: Write a function markPassFail(marks) that returns "Pass" if marks >= 40, else "Fail".
// markPassFail([35, 45, 60, 30]); // ["Fail", "Pass", "Pass", "Fail"]

// Answer
// function markPassFail(marks) {
//     let newarr = marks.map((candy) => {
//         return candy >= 40 ? "Pass" : "Fail";
//     })
//     return newarr
// }
// console.log(markPassFail([35, 45, 60, 30]));
// console.log(markPassFail([21, 43, 32, 48, 23, 24, 25]));



// Exercise 10: Function with Multiple Parameters
// Question: Write a function calculateTotal(prices, taxRate) that adds tax to each price.
// calculateTotal([100, 200, 300], 0.18); // [118, 236, 354]
// calculateTotal([50, 75], 0.10); // [55, 82.5]

// Answer
// function calculateTotal(prices, taxRate) {
//     let NewPrice = prices.map((candy) => {
//         return candy + (candy * taxRate);
//     })
//     return NewPrice
// }
// console.log(calculateTotal([100, 200, 300], 0.18));
// console.log(calculateTotal([50, 75], 0.10));
