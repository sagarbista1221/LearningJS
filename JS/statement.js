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

//String literal =  ``

//user of ternary operator use it rather than if else
// const gender = prompt("Gender");
// gender ==="m" ? alert('Male'): alert("female");

// Write a js program to ask user that drink order (tea, coffee) ...alert => you have ordered..

// const drink =+ prompt("Your Order Please");
// drink === "tea" ? alert(`You have ordered tea`) : alert(`You have ordered Coffee`);

// const drink = +prompt("Your Order Please");
// drink === "tea"
//   ? alert(`You have ordered tea`)
//   : drink === "coffee"
//   ? alert(`You have ordered Coffee`)
//   : drink === "milk"
//   ? alert(`You have ordered milk`)
//   : drink === "coke"
//   ? alert(`You have ordered coke`)
//   : alert(`You have ordered ${drink}`);

  
// const day = +prompt("Enter Day from 1 to 7");
// switch (day) {
//   case 1:
//     alert("sunday");
//     break;
//   case 2:
//     alert("Monday");
//     break;
//   default:
//     alert("invalid number");
// }

//write a js program that handles the grading
//logic
//80% and above : distinction
//70% -- 79.99% : First division
//60%- 69.99% : Second division
//below 60% : Fail

// const percentage = +prompt("Enter your grade");
// switch (true) {
//   case (percentage >= 80):
//   alert("Distinction");
//   break;
//   case (percentage >=70):
//   alert("First Division");
//   break;
//   case(percentage >=60):
//   alert("Second Division");
//   break;
//   default:
//     alert("fail");
// }

// In class ma garya
// const score = +prompt("Enter your percentage");
// switch (true){
//   case score >=80:
//   alert('Distinction');
//   break;
//   case score >=70 && score <=79.99:
//     alert('First Division');
//     break;
//     default:
//       alert("Invalid number");
// }
