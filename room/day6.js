// Logical Operator

// Write a program that handles the grading
// logic
// 80% & above : distinction
// 70% - 79.99% : first division
// 60% - 69.99% : second division
// below 60% : fail

// const score = +prompt("Enter your percentage");
// switch (true) {
//   case score >= 80:
//     alert("Distinction");
//     break;
//   case score >= 70 && score <= 79.99:
//     alert("1st Division");
//     break;
//   case score >= 60 && score <= 69.99:
//     alert("Second division");
//     break;
//   default:
//     alert("Fail");
// }

// ES6 Ternary operator (use this one rather than  ES5)
// const gender = prompt("Gender");
// gender === "m" ? alert ("male") : alert ("Female"); // ? = true value,, : = false value rakhne

// Write a js program to ask user their drink
// order (tea, coffee)
// alert = you have ordered...

// const drink = prompt("What would you like to ordered sir?");
// drink === "tea"
//   ? alert(`You have ordered Tea`) //  ? yesto ma true case
//   : alert(`You have ordered coffee`); //  : yesto ma false cse

//or
// const drink = prompt("What would you like to order, sir? (tea/coffee)").toLowerCase();
// if (drink === "tea" || drink === "coffee") {
//   alert(`You have ordered ${drink}.`);
// } else {
//   alert("Invalid choice! Please order either tea or coffee.");
// }

// order = tea, coffee, coke, milk, water
// const drink = prompt("What have you order");
// drink === "tea"
//   ? alert("You have ordered tea")
//   : drink === "coffee"
//   ? alert("You have ordered coffee")
//   : drink === "coke"
//   ? alert("You have ordered coke")
//   : drink === "milk"
//   ? alert("You have ordered milk")
//   : alert("You have ordered water");

// Operator
//3
// AND, OR, NOT

// AND
// condition 1 + condition 2
// Syntax &&

// const age = +prompt("Age");
// const dl = confirm("Do you have driving license");
// const isAllowed = age >= 18 && dl === true
// ? "you are invited" : "sorry";
// alert(isAllowed);

// OR
// condition 1 + condition 2
// syntax ||

// ask user if they allowed to vote based on nagrita or voter card?
// alert their eligibility

// const nagrita = confirm ("Do you have nagrita?");
// const voterCard = confirm ("Do you have voter card");
// const eligible = nagrita || voterCard ? "You are eligible to vote" : "Nope not allowed";
// alert(eligible);

// NOT

// const user = prompt("What is your name"); // null , " " , false, undefined
// if (!user) {
//   alert("User name is missing");
// }

// Loop
// executing same logic over and over

// for
// do_while
// while

// syntax
// for (start ; check ; increment / decrement) {}

// Multiplication

// for (let i = 1; i <= 10; i++) {
//   console.log(`2*${i}=${2 * i}`);
// }

// sum of 1 to 100

// let sum = 0;
// for (let j = 1; j <= 100; j++) {
//   sum = sum + j; /* or sum += j; */
// }
// console.log(sum);

// Sum of all even natural number

// let sum = 0;
// for (let j = 1; j <= 100; j++) {
//   if (j % 2 === 0) {
//     sum += j;
//   }
// }
// console.log(sum);

// sum of all odd number

// let sum=0;
// for(let j=1; j<=100; j++) {
//     if(j%2 !== 0){
//         sum +=j;
//     }
// }
// console.log(sum);

// do while

// let j=1;
// do{
//     console.log(`2*${j}=${2*j}`);
//     j++;
// } while (j<=10);
