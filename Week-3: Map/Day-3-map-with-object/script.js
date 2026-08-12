// DAY 3: map with object

// Goal: Learn how to use map() with arrays of objects.

// Exercise 11: Extract Values
// Question: You have an array of objects. Use map() to extract just the names.
// let users = [
//     { name: "Rahul", age: 25 },
//     { name: "Amit", age: 30 },
//     { name: "Sneha", age: 22 }
// ];
// Expected: ["Rahul", "Amit", "Sneha"]

// Answer
// let users = [
//     { name: "Rahul", age: 25 },
//     { name: "Amit", age: 30 },
//     { name: "Sneha", age: 22 }
// ];
// function getNames(users) {
//     let newuser = users.map((candy) => {
//         let result = candy.name;
//         return result 
//     })
//     return newuser
// }
// console.log(getNames(users));



// Exercise 12: Transform Objects
// Question: Use map() to add a new property "isAdult" (true if age >= 18).
// let people = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 15 },
//     { name: "Bob", age: 25 }
// ];
// Expected: [
//   { name: "John", age: 20, isAdult: true },
//   { name: "Jane", age: 15, isAdult: false },
//   { name: "Bob", age: 25, isAdult: true }
// ]

// Answer
// let people = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 15 },
//     { name: "Bob", age: 25 }
// ];
// function addIsAdult(people) {
//     return people.map((person) => {
//         return {
//             name: person.name,
//             age: person.age,
//             isAdult: person.age >= 18
//         }
//     })
// }
// console.log(addIsAdult(people));



// Exercise 13: Create Sentences from Objects
// Question: Use map() to create sentences from object data.
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Tablet", price: 30000 }
// ];
// Expected: ["Laptop costs ₹50000", "Phone costs ₹20000", "Tablet costs ₹30000"]

// Answer
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Tablet", price: 30000 }
// ];
// function formatProducts(products) {
//     let newprice = products.map((candy) => {
//         return candy.name + " costs " + "₹" + candy.price;
//     })
//     return newprice
// }
// console.log(formatProducts(products));



// Exercise 14: Format Dates
// Question: Use map() to format dates from objects.
// let events = [
//     { name: "Meeting", date: "2024-01-15" },
//     { name: "Party", date: "2024-01-20" },
//     { name: "Workshop", date: "2024-01-25" }
// ];
// Expected: ["Meeting on 15/01/2024", "Party on 20/01/2024", "Workshop on 25/01/2024"]

// Answer
// let events = [
//     { name: "Meeting", date: "2024-01-15" },
//     { name: "Party", date: "2024-01-20" },
//     { name: "Workshop", date: "2024-01-25" }
// ];
// let newevents = events.map((candy) => {
//     let parts = candy.date.split("-");
//     let day = parts[2];
//     let month = parts[1];
//     let year = parts[0];
//     return candy.name + " on " + day + "/" + month + "/" + year;
// })
// console.log(newevents);



// Exercise 15: Nested Objects
// Question: Use map() to extract scores from nested objects.
// let students = [
//     { name: "Rahul", grades: { math: 85, science: 90 } },
//     { name: "Amit", grades: { math: 70, science: 75 } },
//     { name: "Sneha", grades: { math: 95, science: 88 } }
// ];
// Expected: [
//   { name: "Rahul", average: 87.5 },
//   { name: "Amit", average: 72.5 },
//   { name: "Sneha", average: 91.5 }
// ]

// Answer
// let students = [
//     { name: "Rahul", grades: { math: 85, science: 90 } },
//     { name: "Amit", grades: { math: 70, science: 75 } },
//     { name: "Sneha", grades: { math: 95, science: 88 } }
// ];
// function calculateAverage(students) {
//     return students.map((student) => {
//         let math = student.grades.math;
//         let science = student.grades.science;
//         let average = (math + science) / 2;
//         return {
//             name: student.name,
//             average: average
//         }
//     })
// }
// console.log(calculateAverage(students));
