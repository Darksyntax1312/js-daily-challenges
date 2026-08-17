// Day 1: Basic function logic (1-5)

// Exercise 1: The Greeting Machine
// Write a function getGreeting(time, name) that returns a greeting based on the time of day (24-hour format).
// getGreeting(9, "Amit"); // "Good morning, Amit!"
// getGreeting(15, "Sneha"); // "Good afternoon, Sneha!"
// getGreeting(21, "Rahul"); // "Good evening, Rahul!"

// Answer
// function getGreeting(time, name) {
//     if (time < 12) {
//         return "Good morning, " + name + "!";
//     } else if (time < 18) {
//         return "Good afternoon, " + name + "!";
//     } else {
//         return "Good evening, " + name + "!";
//     }
// }
// console.log(getGreeting(9, "Amit"));
// console.log(getGreeting(15, "Sneha"));
// console.log(getGreeting(21, "Rahul"));



// Exercise 2: The FizzBuzz Function
// Write a function fizzBuzzCustom(num) that returns:
// "Fizz" if num is divisible by 3
// "Buzz" if num is divisible by 5
// "FizzBuzz" if divisible by both
// The number itself as a string if none of the above.
// fizzBuzzCustom(9); // "Fizz"
// fizzBuzzCustom(10); // "Buzz"
// fizzBuzzCustom(15); // "FizzBuzz"
// fizzBuzzCustom(7); // "7"

// Answer
// function fizzBuzzCustom(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return "FizzBuzz";
//     } else if (num % 3 === 0) {
//         return "Fizz";
//     } else if (num % 5 === 0) {
//         return "Buzz";
//     } else {
//         return num.toString();
//     }
// }
// console.log(fizzBuzzCustom(9));
// console.log(fizzBuzzCustom(10));
// console.log(fizzBuzzCustom(15));
// console.log(fizzBuzzCustom(7));



// Exercise 3: The Password Validator
// Write a function isValidPassword(password) that returns true only if the password:
// - Is at least 8 characters long
// - Contains at least one number
// - Contains at least one uppercase letter
// isValidPassword("Hello123"); // true
// isValidPassword("hello123"); // false (no uppercase)
// isValidPassword("HelloWorld"); // false (no number)
// isValidPassword("Hi1"); // false (too short)

// Answer
// function isValidPassword(password) {
//     if (password.length < 8) {
//         return false;
//     }
    
//     let hasNumber = false;
//     let hasUppercase = false;
    
//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];
//         if (char >= "0" && char <= "9") {
//             hasNumber = true;
//         }
//         if (char >= "A" && char <= "Z") {
//             hasUppercase = true;
//         }
//     }
    
//     return hasNumber && hasUppercase;
// }
// console.log(isValidPassword("Hello123")); // true
// console.log(isValidPassword("hello123")); // false
// console.log(isValidPassword("HelloWorld")); // false
// console.log(isValidPassword("Hi1")); // false



// Exercise 4: The Array Sum Calculator
// Write a function sumArray(arr) that takes an array of numbers and returns the sum.
// Important: If the array is empty or contains non-numbers, return 0.
// sumArray([1, 2, 3, 4]); // 10
// sumArray([10, -5, 5]); // 10
// sumArray([]); // 0
// sumArray([1, "hello", 3]); // 0

// Answer
// function sumArray(arr) {
//     if (arr.length === 0) return 0;
    
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
//             return 0;
//         }
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([10, -5, 5]));
// console.log(sumArray([]));
// console.log(sumArray([1, "hello", 3]));



// Exercise 5: The String Repeater
// Write a function repeatString(str, n) that returns the string repeated n times, separated by a space.
// If n is 0 or negative, return an empty string.
// repeatString("Hi", 3); // "Hi Hi Hi"
// repeatString("JS", 0); // ""
// repeatString("Bye", -2); // ""

// Answer
// function repeatString(str, n) {
//     if (n <= 0) return "";
    
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         if (i > 0) {
//             result += " ";
//         }
//         result += str;
//     }
//     return result;
// }
// console.log(repeatString("Hi", 3));
// console.log(repeatString("JS", 0));
// console.log(repeatString("Bye", -2));
