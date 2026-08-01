// Day 7 :

// Section 1 : variable scope (27 to 29)

// Exercise 27: Block scope
// Question: What will happen when you try to access "x" outside the block below?
// {
//   let x = 10;
// }
// console.log(x);

// Solution

// it will show error as let x is a block scope variable and we are trying to check value outside the block

// Exercise 28: Function scope with var
// Question: Explain why "var" declared inside a function is not accessible outside it, using a short example.

// Solution

// function myFunction() {
//   var x = 10;  
//   console.log(x); 
// }

// myFunction();
// console.log(x);  //  x is not defined

// here we cannot access var outside the block cause var is function scoped we cannot access it outside the function. it's presence only stays till the function blocks , after the function block ends the variable is destroyed and cannot be accessed outside.

// Exercise 29: Global vs local variables
// Question: What is the difference between a global variable and a local variable? Why can too many global variables cause problems?


// Solution

// Global variables are declared outside of all functions and can be accessed and modified from anywhere in the program.

// Local variables are declared inside a specific function or block and can only be used within that exact block. 

// global variable causes so much problems cause they are accessible all around the code and can be used anywhere. so , there stays a chance that we will mistakely update/change the value of the global variable.

// Section 2 : mixed practice (30 to 32)

// Exercise 30: Predict the output
// Question: What will be logged to the console, and why?
// let a = "10";
// let b = 10;
// console.log(a + b);
// console.log(a === b);

// Solution

// while doing a + b , it will show me 1010 cause js thinks the + means you are trying to concat two values cause here one value is a string
// while doing === which means strictly equals to means it compares the data type and value both, the console will show false as one is a string and one is a number.

// Exercise 31: Fix the errors
// Question: This code has multiple issues related to variables and data types. Identify and fix them.
// const age = 25;
// age = 26;
// let Name = Hello;
// console.log(typeof Name);

// Solution

// const age = 25;
// age = 26 here we don't need to update the value of age as we cannot update the value of a const variable.and if you need to update age, use let instead of const
// let name = "Hello";
// here the Hello needs to be inside " " cause it is a string.
// and then on the console when i will try to print the typeof Name then it will show me string

// Exercise 32: Real-world variable declaration
// Question: You need to store a user's name, age, whether they are a student, and their favorite subjects (a list). Declare appropriate variables using correct data types and the right keyword (let/const) for each.

// Solution

// const Name = "Rahul";
// let age = 24;
// let Isstudent = true;
// let favsubject = ["science","Math","English"];
