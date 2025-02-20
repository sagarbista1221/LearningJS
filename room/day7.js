// JS test & function
// functions:
//  Functions are the main "building blocks" of the program
// They allow the code to be called many times without repetition (DRY = DoNot Repeat Yourself )

// e.g.: ES5

// function sayHi(name){
//     alert(`Hello, ${name}`);
// }
// sayHi("JS Class");

// ES6

// const sayHi = (name) => {
//   alert(`Hello, ${name}`);
// };
// sayHi("JS class");

// const sayHi = () => {
//     const name = prompt("What is your name?");

//     if (name && name.trim()) { // Ensuring name is not empty or just spaces
//         alert(`Hello, ${name.trim()}!`);
//     } else {
//         alert("User name is missing");
//     }
// };

// sayHi(); // Calling the function

// Hoisting is Javascript's default behaviour of moving all declarations to the top of the current scope ( to the top of the current script or the current functions)

// How functions works
// Function takes input, uses logic and returns output

// ES5 ko syntax

// function fnName(input) {
//     logic
// }
// return outputs

// Write a function to add 2 numbers

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }
// function declaration
// const value1 = +prompt("Enter first number");
// const value2 = +prompt("Enter second number");
// const answer = sum(value1, value2);
// alert(answer);
//DRY
// console.log(sum(1, 0));
// console.log(sum(3, 2));
// console.log(sum("Sagar", "Bista"));

// Write a functions to calculate the area of circle

// function area(radius){
//     const pi=3.14;
//     const result = pi*+radius*+radius;
//     return result;
// }
// console.log(area(4));

// or
// function area(radius) {
//   return 3.14 * +radius * +radius;
// }
// console.log(area(4));
