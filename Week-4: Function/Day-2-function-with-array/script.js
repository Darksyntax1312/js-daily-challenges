// Day 2 : Function with array methods (6-10)

// Exercise 6: The Number Squarer
// Write a function squareNumbers(arr) that takes an array and returns a new array where every number is squared. Use map().
// squareNumbers([1, 2, 3]); // [1, 4, 9]
// squareNumbers([5, 10]); // [25, 100]

// Answer
// function squareNumbers(arr) {
//     let newnumber = arr.map((candy) => {
//         return candy * candy
//     })
//     return newnumber
// }
// console.log(squareNumbers([1, 2, 3]));
// console.log(squareNumbers([5, 10]));



// Exercise 7: The Even Number Filter
// Write a function getEvenNumbers(arr) that returns a new array containing only the even numbers from the input array. Use filter().
// getEvenNumbers([1, 2, 3, 4, 5]); // [2, 4]
// getEvenNumbers([7, 11, 13]); // []

// Answer
// function getEvenNumbers(arr) {
//     let NewArray = arr.filter((candy) => {
//         return candy % 2 === 0;
//     })
//     return NewArray
// }
// console.log(getEvenNumbers([21, 42, 9, 5, 2, 4, 68]));
// console.log(getEvenNumbers([7, 11, 13]));



// Exercise 8: The Sales Tax Calculator
// Write a function applySalesTax(prices, taxRate) that takes an array of prices and a tax rate (e.g., 0.08 for 8%) and returns a new array with the tax added to each price. Use map().
// applySalesTax([100, 200], 0.08); // [108, 216]
// applySalesTax([50, 75], 0.1); // [55, 82.5]

// Answer
// function applySalesTax(prices, taxRate) {
//     let NewPrice = prices.map((candy) => {
//         return candy + (candy * taxRate)
//     })
//     return NewPrice
// }
// console.log(applySalesTax([100, 200], 0.08));
// console.log(applySalesTax([50, 75], 0.1));



// Exercise 9: The "Contains" Checker
// Write a function containsValue(arr, target) that returns true if the target value exists in the array, and false if it doesn't.
// Important: Do NOT use .includes(). Write the logic yourself.
// containsValue([1, 2, 3], 2); // true
// containsValue([1, 2, 3], 5); // false
// containsValue(["apple", "banana"], "banana"); // true

// Answer
// function containsValue(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return true
//         }
//     }
//     return false
// }
// console.log(containsValue([1, 2, 3], 2));
// console.log(containsValue([1, 2, 3], 5));
// console.log(containsValue(["apple", "banana"], "banana"));



// Exercise 10: The Total Cart Value
// Write a function calculateCartTotal(cart) that takes an array of product objects and returns the total price of all items.
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 2 },
//     { name: "Phone", price: 20000, quantity: 3 }
// ];
// calculateCartTotal(cart); // 160000

// Answer
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 2 },
//     { name: "Phone", price: 20000, quantity: 3 }
// ];
// function calculateCartTotal(cart) {
//     let newarr = cart.map((candy) => {
//         return candy.price * candy.quantity
//     })
//     let chintu = newarr.reduce((res, curv) => {
//         return res + curv;
//     })
//     return chintu
// }
// console.log(calculateCartTotal(cart));
