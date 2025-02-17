//Data Types
//Primitive data type are String, Number, Null, Boolean, Undefined (Default data type is String)
//Complex data type are Object, date, array

// 1.) String
const string = "Sagar is learning a programming"; //character, word, sentence, paragraph
console.log(string);

// 2.)Number
const pi = 3.14; //Number
console.log(pi);

// 3.)Bigint
const largeNumber = BigInt(123456789846545614321);
console.log(largeNumber);

// 4.)Undefined
let x; // undefined;
console.log(x);

// 5.) null
const d = null; //null
console.log(d);

// 6.) Boolean
const isMale = true;
console.log(isMale);

// Type conversion or Type coercion

const value = "13";
const actualNumber = Number(value); // type conversion
console.log(actualNumber);
console.log(typeof actualNumber);
console.log(typeof value); //give your information about data type, type checking

//Convert number to string
const num = 13;
const numToString = String(num);
console.log(num, numToString);

//Write a program that divides the two numbers asking user for the 2 number inputs and alert the result
// const num1 = +prompt("Enter the first number");
// const num2 = +prompt("Enter second number");
// const result = num1/num2;
// alert(`The result of division between ${num1} and ${num2} is ${result}`);

//unary operator
let val = 1;
val++; //2
val += 3; //5
console.log(val);

//consitional operators
//ES5
//If-else, Switch-case
//ES6
//ternary operator

// If else only target two conditons
// const gender = prompt("Gender");
// if(gender==="m"){
//     console.log("Male");
// }else {
//     console.log("Female");
// }

// const day =+prompt("Enter day from 1 to 7");
// switch(day){
//     case 1:
//     alert("Sunday");
//     break;
//     case 2:
//         alert("Monday");
//         break;
//         default:
//             alert("invalid number");
// }
