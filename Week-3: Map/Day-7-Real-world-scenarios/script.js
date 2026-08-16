// DAY 7 : Real world scenarios

// Goal: Apply map() to real-world situations like e-commerce, user databases, weather data, todo lists, and social media.

// Exercise 31: E-commerce Cart
// Question: You have a shopping cart. Use map() to calculate the total price of each item (price × quantity).
// let cart = [
//     { item: "Laptop", price: 50000, qty: 2 },
//     { item: "Phone", price: 20000, qty: 3 },
//     { item: "Tablet", price: 30000, qty: 1 }
// ];
// Expected: [100000, 60000, 30000]
// Then use reduce() to get total (optional)

// Answer
// let cart = [
//     { item: "Laptop", price: 50000, qty: 2 },
//     { item: "Phone", price: 20000, qty: 3 },
//     { item: "Tablet", price: 30000, qty: 1 }
// ];
// let priceofitem = cart.map((candy) => {
//     return candy.price * candy.qty
// })
// console.log(priceofitem);
// // Optional: Get total using reduce
// let total = priceofitem.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log("Total cart value:", total);



// Exercise 32: User Database
// Question: You have a user database. Use map() to create email addresses.
// let users = [
//     { firstName: "Rahul", lastName: "Sharma" },
//     { firstName: "Amit", lastName: "Patel" },
//     { firstName: "Sneha", lastName: "Reddy" }
// ];
// Expected: ["rahul.sharma@company.com", "amit.patel@company.com", "sneha.reddy@company.com"]

// Answer
// let users = [
//     { firstName: "Rahul", lastName: "Sharma" },
//     { firstName: "Amit", lastName: "Patel" },
//     { firstName: "Sneha", lastName: "Reddy" }
// ];
// let newname = users.map((candy) => {
//     return candy.firstName.toLowerCase() + "." + candy.lastName.toLowerCase() + "@company.com"
// })
// console.log(newname);



// Exercise 33: Weather Data
// Question: Use map() to convert temperatures and add weather icons.
// let weather = [
//     { city: "Delhi", temp: 35, condition: "sunny" },
//     { city: "Mumbai", temp: 28, condition: "rainy" },
//     { city: "Bangalore", temp: 22, condition: "cloudy" }
// ];
// Expected: ["Delhi: 35°C ☀️", "Mumbai: 28°C 🌧️", "Bangalore: 22°C ☁️"]

// Answer
// let weather = [
//     { city: "Delhi", temp: 35, condition: "sunny" },
//     { city: "Mumbai", temp: 28, condition: "rainy" },
//     { city: "Bangalore", temp: 22, condition: "cloudy" }
// ];
// let newweather = weather.map((candy) => {
//     let result;
//     if (candy.condition == "sunny") {
//         result = candy.city + ":" + " " + candy.temp + "°C" + " ☀️";
//     } else if (candy.condition == "rainy") {
//         result = candy.city + ":" + " " + candy.temp + "°C" + " 🌧️";
//     } else if (candy.condition == "cloudy") {
//         result = candy.city + ":" + " " + candy.temp + "°C" + " ☁️";
//     } else {
//         result = candy.city + ":" + " " + candy.temp + "°C";
//     }
//     return result
// })
// console.log(newweather);



// Exercise 34: Todo List
// Question: Use map() to format todo items with status.
// let todos = [
//     { task: "Learn JS", completed: true },
//     { task: "Build project", completed: false },
//     { task: "Apply for jobs", completed: false }
// ];
// Expected: ["✅ Learn JS", "❌ Build project", "❌ Apply for jobs"]

// Answer
// let todos = [
//     { task: "Learn JS", completed: true },
//     { task: "Build project", completed: false },
//     { task: "Apply for jobs", completed: false }
// ];
// let number = todos.map((candy) => {
//     let result;
//     if (candy.completed == true) {
//         result = "✅" + " " + candy.task
//     } else {
//         result = "❌" + " " + candy.task
//     }
//     return result
// })
// console.log(number);



// Exercise 35: Social Media Posts
// Question: Use map() to format social media posts with engagement metrics.
// let posts = [
//     { content: "Hello World!", likes: 100, comments: 20 },
//     { content: "JavaScript is awesome", likes: 250, comments: 35 },
//     { content: "Learning map() today", likes: 75, comments: 8 }
// ];
// Expected: ["Hello World! - 100 likes, 20 comments", "JavaScript is awesome - 250 likes, 35 comments", "Learning map() today - 75 likes, 8 comments"]

// Answer
// let posts = [
//     { content: "Hello World!", likes: 100, comments: 20 },
//     { content: "JavaScript is awesome", likes: 250, comments: 35 },
//     { content: "Learning map() today", likes: 75, comments: 8 }
// ];
// let newsyntax = posts.map((candy) => {
//     let result;
//     if (candy.content == "Hello World!") {
//         result = candy.content + " - " + candy.likes + " " + "likes" + ", " + candy.comments + " " + "comments"
//     } else if (candy.content == "JavaScript is awesome") {
//         result = candy.content + " - " + candy.likes + " " + "likes" + ", " + candy.comments + " " + "comments"
//     } else if (candy.content == "Learning map() today") {
//         result = candy.content + " - " + candy.likes + " " + "likes" + ", " + candy.comments + " " + "comments"
//     }
//     return result
// })
// console.log(newsyntax);
