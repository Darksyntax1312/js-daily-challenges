// Day 6 : type conversion and coercion (21 to 26)

// Exercise 21: String to Number
// Question: What is the result of the following, and what data type is it?
// let result = "5" - 2;

// Solution
// result is 3 and data type is number



// Exercise 22: Number to String
// Question: What is the result of the following, and what data type is it?
// let result = 5 + "2";

// Solution
// returns "52" and data type is string



// Exercise 23: Implicit vs Explicit conversion
// Question: What is the difference between implicit type coercion and explicit type conversion? Give one example of each.

// Solution
// Implicit coercion (automatic): JavaScript automatically converts types
// Example: "5" - 2  → 3 (string becomes number automatically)

// Explicit conversion (manual): You deliberately convert using functions
// Example: Number("5")  → 5 (manually converting string to number)



// Exercise 24: Using Number() and String()
// Question: What will these lines output?
// Number("123")
// Number("abc")
// String(456)

// Solution
// Number("123")  → 123
// Number("abc")  → NaN (Not a Number)
// String(456)    → "456"



// Exercise 25: Boolean conversion
// Question: Which of these values are "truthy" and which are "falsy"?
// 0, "", null, undefined, NaN, "0", [], {}

// Solution
// Falsy values: 0, "", null, undefined, NaN
// Truthy values: "0", [], {}



// Exercise 26: Equality with coercion
// Question: What is the difference between "==" and "===" when comparing a string and a number? Give an example.
// "5" == 5
// "5" === 5

// Solution
// "5" == 5   → true (compares only value, not data type)
// "5" === 5  → false (compares value AND data type)
