// DAY 6 : Edge cases and tricky situations

// Goal: Learn how map() behaves in special cases like empty arrays, mixed data types, and sparse arrays.

// Exercise 26: Empty Array
// Question: What happens when you use map() on an empty array?
// let empty = [];
// Use map() on it. What do you get?

// Answer
// let empty = [];
// let newemt = empty.map((candy) => {
//     return candy
// })
// console.log(newemt);  // Prints []



// Exercise 27: Mixed Data Types
// Question: Use map() to handle an array with mixed data types.
// let mixed = [1, "hello", true, null, undefined];
// Expected: ["number", "string", "boolean", "object", "undefined"]
// (Return the type of each item using typeof)

// Answer
// let mixed = [1, "hello", true, null, undefined];
// let newnumber = mixed.map((candy) => {
//     return typeof candy
// })
// console.log(newnumber);



// Exercise 28: Sparse Array
// Question: What happens when you use map() on an array with empty slots?
// let sparse = [1, , 3, , 5];
// Use map() to double each element. What happens to the empty slots?

// Answer
// let sparse = [1, , 3, , 5];
// let newnumber = sparse.map((candy) => {
//     return candy * 2
// })
// console.log(newnumber);  // [2, empty, 6, empty, 10]



// Exercise 29: Nested Arrays
// Question: Use map() to flatten or transform nested arrays.
// let nested = [[1, 2], [3, 4], [5, 6]];
// Expected: [3, 7, 11] (sum of each inner array)
// HINT: Use another map or reduce inside

// Answer
// let nested = [[1, 2], [3, 4], [5, 6]];
// let newnumber = nested.map((candy) => {
//     let newarr = candy.reduce((res, curv) => {
//         return res + curv
//     }, 0);
//     return newarr
// });
// console.log(newnumber);



// Exercise 30: Object Transformation
// Question: Use map() to swap keys and values of objects in an array.
// let data = [
//     { name: "A", value: 1 },
//     { name: "B", value: 2 },
//     { name: "C", value: 3 }
// ];
// Expected: [{ A: 1 }, { B: 2 }, { C: 3 }]

// Answer
// let data = [
//     { name: "A", value: 1 },
//     { name: "B", value: 2 },
//     { name: "C", value: 3 }
// ];
// let newnumber = data.map((candy) => {
//     return { [candy.name]: candy.value }
// })
// console.log(newnumber);
