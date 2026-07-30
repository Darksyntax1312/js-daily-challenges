// Day 5 : typeof OPERATOR (17 to 20)

// Exercise 17: Basic typeof
// Question: What will "typeof" return for each of these values?
// typeof "hello"
// typeof 100
// typeof true
// typeof undefined

// Solution
// string
// number
// boolean
// undefined



// Exercise 18: typeof null
// Question: What does "typeof null" return? Is this the correct/expected behavior? Explain.

// Solution
// typeof null returns "object". This is considered a historical bug in JavaScript.
// null should ideally return "null" but it doesn't.



// Exercise 19: typeof with variables
// Question: What is the output of the following code?
// let value = 10;
// console.log(typeof value);
// value = "ten";
// console.log(typeof value);

// Solution
// First console: number
// Second console: string



// Exercise 20: typeof functions and objects
// Question: What does "typeof" return when used on a function and on an object?

// Solution
// typeof returns "function" for functions and "object" for objects
