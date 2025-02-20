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
11. Pure Function
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

//function can return primitive datatypes / complex datatype / function

// Closure (100% ask) ...function nai output dinxa

// let count = 1;
// const counter = () => {
//     const increment = count + 1;
//     return increment;
// };
// console.log(counter());

// const counter = () => {
//     let count = 1;
//     return () => {
//         const increment = count++;
//         return increment;
//     };
// };
// const counterA = counter();
// const counterB = counter();
// console.log(counterA()); //Dashain
// console.log(counterA()); //Dashain
// console.log(counterA()); //Dashain

// console.log(counterB()); //Tihar
// console.log(counterB()); //Tihar

// Private variables,,,,
// Local Variables,,,, function vitra matra access garna sakinxa
// Global Variables,,,,function vitra ya bahera access garna sakinxa
// Lexical Scoping,,,,
// Closure Concept,,,, lexical scoping => local,private variable,global variable

//Write a js closure function that mimics the bank account opening and deposit
// const accOpening = (initialAmount = 0) => {
//     let amt = initialAmount;
//     return () => amt;
// }
//  const accA = accOpening();
//  const accB = accOpening(1000);

//  console.log(accA(), accB());

//Explicit function
//  const summer = () => {
//     return 0;
//  };
//  console.log({ summer: summer() });

//  const summer = () => {
//     return 0;
//  };

//  const addition = (a,b) => {
//     const sum = a + b;
//     return sum;
//  };

//Implicit Function
// const summeraI = () => 0;

// const addtionI = (a, b) => a + b;
// console.log(summeraI());
// console.log(addtionI(4, 5));

// Write a js function that calculates the volume of cuboid v = l*b*h
// const volume = ({l, b, h}) => l * b * h;...........baki+++

//Anonymous function,,,, name na vako function,,,used in logger implementation

// const test = function () {
//     console.log("Test");
// };
// test();

//Inline Function

// const testInLine = function () {};

//  Callback Function,, is a function that accepts another function as an parameter.

// const print = (data) =>{
//     console.log(`Hello ${data}`);
// };

// const main = (user, callbackFn) => {
//     const information = `Mr ${user}`;
//     return callbackFn(information);
// };

// main("raktim", print);

//write a callback function to calculate the VAT of the product 13 % of item cost

// const calcTax = (qty,cp) => 0.13 * +qty * +cp;

// const cart =({item,quantity = 1, tax}) => {
//     return tax(quantity,item);
// };
// const taxAmt = cart({item:100, tax: calcTax});
// console.log(taxAmt);

//Pure Function....result does  not change for the same input


// function two types
// 1.) function(){};
// 2.) function () => {};