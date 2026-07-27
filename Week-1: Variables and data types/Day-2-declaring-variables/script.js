// Day 1: Declaring Variables

// Exercise 1: let vs const vs var
// Question: Which of these declarations will throw an error? Why?

let a = 10;
const b;
var c = 20;

// Solution: const b will throw error because const needs a value immediately



// Exercise 2: Redeclaring variables
// Question: What happens when you declare the same variable twice using "let" in the same scope? Try it and explain the result.

// Solution: Shows variable re-declaration error - re-declaration of let is not allowed



// Exercise 3: Reassigning const
// Question: Will this code work? Explain why or why not.

const x = 5;
x = 10;

// Solution: No - reassignment of const is not allowed



// Exercise 4: Declaring without a value
// Question: What is the value of "y" after this line runs, and what is its data type?

let y;

// Solution: undefined (data type is also undefined)



// Exercise 5: var vs let scope
// Question: What is the key difference between "var" and "let" when it comes to scope? Give a simple example.

// Solution: var is function-scoped (or globally-scoped if outside function), let is block-scoped

// Example:
{
    let b = 12;
    console.log(b); // 12 (inside block)
}
// console.log(b); // ReferenceError: b is not defined (outside block)

{
    var a = 32;
}
console.log(a); // 32 (accessible outside block)
