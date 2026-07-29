// Day 4 : Primitive data types (11 to 16)

// Exercise 11: Identify the type
// Question: What is the data type of each variable below?
// let a = "Hello";
// let b = 42;
// let c = true;
// let d = null;
// let e = undefined;

// Solution
// string
// Number
// Boolean
// object   (null is technically an object in JavaScript)
// undefined



// Exercise 12: Number type
// Question: Does JavaScript have separate data types for integers and floating-point numbers? Explain.

// Solution
// No, JavaScript does not have separate types for integers and floats. There's only one number type: Number, which represents both integers and decimals using the floating-point format (IEEE 754 double-precision).
// 42324 and 43434.3 both are number



// Exercise 13: String creation
// Question: What are the three ways to create a string in JavaScript? Give one example of each.

// Solution
// You can create string by using:
// 1. "" double quotes
// 2. '' single quotes
// 3. `` template literals

// Examples:
// let a = "candy";
// let b = 'candy';
// let c = `candy`;



// Exercise 14: Boolean values
// Question: What are the only two possible values a Boolean can hold?

// Solution
// A boolean can hold true or false



// Exercise 15: null vs undefined
// Question: What is the difference between "null" and "undefined"? Give an example of when each occurs.

// Solution
// null is used when you intentionally put no value
// undefined is used when you created a variable but gave no value

// Example of null:
// let a = null;

// Example of undefined:
// let b;



// Exercise 16: BigInt and Symbol
// Question: What are "BigInt" and "Symbol" used for in JavaScript? Give a simple example of each.

// Solution
// BigInt is used for very large numbers that exceed the Number limit

// Example:
// let bigNumber = 4582345093485034875203n;

// Symbol creates a unique, immutable identifier that never clashes with any other value.
// It's mainly used to create unique object property keys.

// Example:
// let sym = Symbol();
