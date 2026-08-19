// Day 3: Function with objects (11-15)

// Exercise 11: The Person Describer
// Write a function describePerson(person) that takes an object { name, age, city } and returns a string:
// "{name} is {age} years old and lives in {city}."
// describePerson({ name: "John", age: 25, city: "Mumbai" });
// // "John is 25 years old and lives in Mumbai."

// Answer
// function describePerson(person) {
//     return person.name + " is " + person.age + " years old and lives in " + person.city + ".";
// }
// console.log(describePerson({ name: "John", age: 25, city: "Mumbai" }));



// Exercise 12: The Object Key Swapper
// Write a function swapKeysAndValues(obj) that takes an object and returns a new object where the keys and values are swapped.
// Example: { a: 1, b: 2 } becomes { 1: "a", 2: "b" }.
// swapKeysAndValues({ name: "Rahul", age: 30 });
// // { Rahul: "name", 30: "age" }

// Answer
// function swapKeysAndValues(obj) {
//     let newObj = {};
//     for (let key in obj) {
//         newObj[obj[key]] = key;
//     }
//     return newObj;
// }
// console.log(swapKeysAndValues({ name: "Rahul", age: 30 }));



// Exercise 13: The Array of Objects Filter
// Write a function getAdults(people) that takes an array of person objects { name, age } and returns a new array containing only the objects where age is 18 or older.
// let people = [
//     { name: "Amit", age: 17 },
//     { name: "Sneha", age: 22 },
//     { name: "Rahul", age: 16 }
// ];
// getAdults(people);
// // [{ name: "Sneha", age: 22 }]

// Answer
// let people = [
//     { name: "Amit", age: 17 },
//     { name: "Sneha", age: 22 },
//     { name: "Rahul", age: 16 }
// ];
// function getAdults(people) {
//     let adults = people.filter((person) => {
//         return person.age >= 18;
//     });
//     return adults;
// }
// console.log(getAdults(people));



// Exercise 14: The Object Merger
// Write a function mergeObjects(obj1, obj2) that takes two objects and returns a single object containing all key-value pairs from both.
// If both objects have the same key, the value from obj2 should overwrite the one from obj1.
// mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
// // { a: 1, b: 3, c: 4 }

// Answer
// function mergeObjects(obj1, obj2) {
//     let merged = {};
//     for (let key in obj1) {
//         merged[key] = obj1[key];
//     }
//     for (let key in obj2) {
//         merged[key] = obj2[key];
//     }
//     return merged;
// }
// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));



// Exercise 15: The Data Transformer
// Write a function transformToArray(obj) that takes an object where keys are strings and values are numbers,
// and returns an array of strings in the format "key: value".
// transformToArray({ name: "John", age: 25, city: "Delhi" });
// // ["name: John", "age: 25", "city: Delhi"]

// Answer
// function transformToArray(obj) {
//     let result = [];
//     for (let key in obj) {
//         result.push(key + ": " + obj[key]);
//     }
//     return result;
// }
// console.log(transformToArray({ name: "John", age: 25, city: "Delhi" }));
