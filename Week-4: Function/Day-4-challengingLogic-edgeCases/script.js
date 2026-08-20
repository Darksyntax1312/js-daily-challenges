// Day 4: challenging logic and edge cases (16-20)

// Exercise 16: The Palindrome Checker
// Write a function isPalindrome(str) that returns true if the string is a palindrome (reads the same forward and backward), ignoring case and spaces.
// isPalindrome("racecar"); // true
// isPalindrome("RaceCar"); // true
// isPalindrome("hello"); // false
// isPalindrome("A man a plan a canal Panama"); // true

// Answer
// function isPalindrome(str) {
//     let cleaned = str.replace(/\s/g, "").toLowerCase();
//     let reversed = "";
//     for (let i = cleaned.length - 1; i >= 0; i--) {
//         reversed += cleaned[i];
//     }
//     return cleaned === reversed;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("RaceCar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("A man a plan a canal Panama"));



// Exercise 17: The Random Number Generator
// Write a function randomBetween(min, max) that returns a random integer between min and max (inclusive).
// randomBetween(1, 10); // Could return any integer from 1 to 10
// randomBetween(5, 5); // Always returns 5

// Answer
// function randomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomBetween(1, 10));
// console.log(randomBetween(5, 5));



// Exercise 18: The Factorial Finder
// Write a function factorial(n) that returns the factorial of a non-negative integer n (n!).
// 5! = 5 * 4 * 3 * 2 * 1 = 120. 0! = 1.
// factorial(5); // 120
// factorial(0); // 1
// factorial(3); // 6

// Answer
// function factorial(n) {
//     if (n === 0) return 1;
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(3));



// Exercise 19: The Prime Number Checker
// Write a function isPrime(num) that returns true if the number is prime, and false if it's not.
// A prime number is only divisible by 1 and itself. Numbers less than 2 are not prime.
// isPrime(7); // true
// isPrime(10); // false
// isPrime(2); // true
// isPrime(1); // false

// Answer
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(2));
// console.log(isPrime(1));



// Exercise 20: The Fibonacci Generator
// Write a function getFibonacci(n) that returns an array containing the first n numbers of the Fibonacci sequence.
// Sequence: 0, 1, 1, 2, 3, 5, 8, ...
// getFibonacci(1); // [0]
// getFibonacci(5); // [0, 1, 1, 2, 3]
// getFibonacci(0); // []

// Answer
// function getFibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
    
//     let result = [0, 1];
//     for (let i = 2; i < n; i++) {
//         result.push(result[i - 1] + result[i - 2]);
//     }
//     return result;
// }
// console.log(getFibonacci(1));
// console.log(getFibonacci(5));
// console.log(getFibonacci(0));
*/
