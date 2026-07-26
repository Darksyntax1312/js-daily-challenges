// Day 1: Declaring Variables
// Exercise 1: let vs const vs var

// Question: Which of these declarations will throw an error? Why?

let a = 10;
a = 20; // ❓ What happens?

const b = 30;
b = 40; // ❓ What happens?

var c = 50;
c = 60; // ❓ What happens?

// Solution
// b = 40 will show error as updation of const variable is not allowed


// Exercise 2: Block Scope

// Question: What will this code print? Why?

let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

// Solution
// the first console will print 20 cause the let is inside block
// the second console will print 10 from the top


// Exercise 3: Variable Hoisting

// Question: What will this code print? Why?

console.log(a);
var a = 5;

// Solution
// the code will print undefined as for console.log cause its value is undefined at the moment console.log(a) runs