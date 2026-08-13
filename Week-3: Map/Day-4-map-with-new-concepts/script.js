// DAY 4 : Map with mixed concepts

// Goal: Learn how to use map() with other array methods like forEach, filter, reduce.

// Exercise 16: Map + forEach
// Question: Use map() to double each number, then use forEach() to print each doubled number.
// let numbers = [2, 4, 6, 8];
// Expected output (printed): 4, 8, 12, 16
// Return the doubled array

// Answer
// let numbers = [2, 4, 6, 8];
// let newnumber = numbers.map((candy) => {
//     return candy * 2;
// });
// newnumber.forEach((crush) => {
//     console.log(crush);
// });
// console.log(newnumber);



// Exercise 17: Map + Conditionals (Ternary)
// Question: Use map() with ternary operator to return "High" if number > 50, "Medium" if > 20, "Low" otherwise.
// let numbers = [10, 30, 60, 15, 45];
// Expected: ["Low", "Medium", "High", "Low", "Medium"]

// Answer
// let numbers = [10, 30, 60, 15, 45];
// let newnumber = numbers.map(candy => {
//     return candy > 50 ? "High" :
//            candy > 20 ? "Medium" :
//            "Low"
// });
// console.log(newnumber);



// Exercise 18: Map + Filter
// Question: Use map() to convert each number to a string, then use filter() to keep only strings with length > 1.
// let numbers = [5, 10, 15, 20, 25];
// Expected: ["10", "15", "20", "25"]

// Answer
// let numbers = [5, 10, 15, 20, 25];
// let newnumber = numbers.map((candy)=>{
//     return candy.toString()
// })
// let filtdarr = newnumber.filter((candy1)=>{
//     return candy1.length > 1
// })
// console.log(filtdarr);



// Exercise 19: Map + Reduce
// Question: Use map() to double each number, then use reduce() to sum them all.
// let numbers = [1, 2, 3, 4, 5];
// Expected: 30

// Answer
// let numbers = [1, 2, 3, 4, 5];
// let newnumber = numbers.map((candy)=>{
//     return candy*2
// })
// let crush = newnumber.reduce((prev,chintu)=>{
//     return prev + chintu
// })
// console.log(crush);



// Exercise 20: Map + Loops
// Question: Use a for loop to create an array of numbers 1-10, then use map() to return their cubes (num³).
// Expected: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

// Answer
// let newArray = [];
// let candy;
// for (let i = 1; i <= 10; i++) {
//     candy = i;
//     newArray.push(candy);
// }
// let mapditem = newArray.map((chintu) => {
//     return chintu ** 3
// })
// console.log(mapditem);
Happy coding! 🚀
*/
