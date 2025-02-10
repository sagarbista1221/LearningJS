// conditional operator

// ES5
// 1.) if-else
// 2.) switch-case

// ES6
//ternary operator

// <---------- If else statement----------->

// if else only target 2 conditions max
/* Syntax
 if(){}
 else{}
 }
*/

// const gender=prompt("Gender");
// if(gender === "m") {
//     console.log("male");
// } else {
//     console.log("Female");
// }

const day = +prompt("Enter Day from 1 to 7");
switch (day) {
  case 1:
    alert("sunday");
    break;
  case 2:
    alert("Monday");
    break;
  default:
    alert("invalid number");
}

//write a js program that handles the grading
//logic
//80% and above : distinction
//70% -- 79.99% : First division
//60%- 69.99% : Second division
//below 60% : Fail
