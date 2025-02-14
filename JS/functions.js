// Functions are the building block of application

// principle = DRY donot repeat yourself

// How it works?
// Function takes Input, uses logic and returns output

// Syntax

//ES5
// function fnName(input) {
//     logic
//     return outputs
// }

// Write a function to add 2 numbers
// Function declaration / initialization
// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// //Input data
// const value1 = +prompt("Enter the first number");
// const value2 = +prompt("Enter the Second number");
// const answer = sum(value1, value2);
// alert(answer);

// console.log(sum(1,0));
// console.log(sum(3,2));
// console.log(sum("Sagar", "Bista"));

// Write a functioin to calculate the area of circle

// function area(radius) {
//     const result = 3.14 * +radius * +radius;
//     return result;
// }
//function call
//direct
// console.log(area("4"));
// console.log(area(4));

//input value
// const radius = +prompt("Enter the value of radius");
// const result = area(radius);
// alert(result);

/*
1. Arrow Function (ES6)
2. default function
3. Parameterized  function
4. Closure (100% ask)
5. IIFEs
6. Explicit Function
7. Implicit Function
8. Anonymous Fuctioin
9. Inline Function
10. Callback Function
*/

// Arrow Function (ES6)

// Function sum(num1, num2){
// const result = num1 + num2
// return result;
// }

//function define
// const sum = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }
//function call
// console.log(sum(2,2));

//Default Function

// const pagination = (page = 1) => {  ...........function>>>>>>>>>>>....... const = () => {return `..`}...............
//     return  `page number ${page}`;
// };
// console.log(pagination(2));

//write a function that says welcome person if user name is provided else it says welcome user
//function declare
// const welcome = (user="user") => {
//     return `Welcome ${user}`;
// };
//function call
// console.log(welcome("Sagar"));
// console.log(welcome());

// Parameterized function

// const user = ({ user1, user2 = "user", user3 }) => {
//     return '${user1}, ${user2}, $user{3}`;
// };
// console.log(users({user1: "r", user3: "m"}));

// write a parameterized function to calculate the volume of cuboid volume = lbh

// const volume = ({length, breadth, height}) => {
//     return  length * breadth * height;
// };
// console.log(volume({length:2,breadth:3,height:4}));

//5 IIFEs (Immediately Invoked Functional Expression)
// ((a="test")=>{
//     console.log("IIFE",a);
// })(1); // edi esma big bracket vitra kei xaena vaney mathi a ko value run out hunxa

// ()=>{} ......... //function
