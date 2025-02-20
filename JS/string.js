// Write a js function that converts string to lower case.

// const toLower = (text="") => String(text).toLowerCase();
// console.log(toLower("Sagar BISTA"));
// console.log(toLower(123));

// Write a js function to convert long text to...
// "Ram is a teacher at Broadway" => "Ram is a ..."; (truncate)
// Solution method:slice & concat

// const truncate = (text="") =>{
// const textData = String(text);//Ram is a teacher at Broadway
// const textLength = textData.length;//28
// if (textLength > 9){
//     const remainingText = textData.slice(0,9);//Ram is a
//     return remainingText.concat("...");
// } else {
//     return textData;
// }
// };
// console.log(truncate("Ram is a teacher at Broadway"));

// best one with logic
// const truncateES6 = (text="") =>
//     String(text).length >9
// ? String(text).slice(0,9).concat("...")
// :String(text);
// console.log(truncateES6("Ram is a teacher at Broadway"));

//Direct method
// const str = "Ram is a teacher at Broadway"
// console.log(str.slice(0,8).concat("..."));

//Write a js function to convert text to slug
//"Raktim is a teacher" => "raktim-is-a-teacher"
// Solution Method: toLowercase && replace

// const toLower = (text="") => String(text).toLowerCase();
// console.log(toLower("Raktim is a teacher"));
// console.log(toLower(123));

//Write a function to check if the phone number is a mobile number or not
// 10 digits
// phone number starts with 98

//Write a js function to create a proper case
//"raktim shrestha" => "Raktim Shrestha"

// const properCase = (data= "") =>{
//     const text = String(data).toLowerCase();
//     let result = "";
//     let check = true;
//     for(let i=0; i<text.length; i++){
//         const char = text[i];
//         if(check){
//             result += char.toUpperCase();
//             check = false;
//         }else if (char ==""){
//             result += char;
//             check = true;
//         } else {
//             result += char;
//         }

//     }
//     return result;
// }
// console.log(properCase("sagar bista is my name"));
// console.log(properCase("sAGAR bistA is my naMe"));
//code at

//Write a js function to clean the data
//"    Raktim       Shrestha     " => "Raktim Shrestha"
//Solution method:trim & replaceAll

function cleanData(str) {
  return str.trim().replaceAll(/\s+/g, " ");
}
console.log(cleanData("    Raktim       Shrestha     "));

//check it not work
// const name = "   Raktim      Shrestha     ";
// console.log(name);
// Expected output: "   Hello world!   ";
// console.log(name.trim());
// Expected output: "Hello world!";

//Write a js function to convert any number to formatted number
// 1000 => 1,000
//10000 => 10,000; 1000000 => 1,000,000
// solution method: toLocalString()

function formatNumber(num) {
  return num.toLocaleString();
}
console.log(formatNumber(1000)); // "1,000"
console.log(formatNumber(10000)); // "10,000"
console.log(formatNumber(1000000)); // "1,000,000"
console.log(formatNumber(123456789)); // "123,456,789"

//Write a js function to check if the string contains the word or not
//"Raktim is a teacher" => search Teacher => true
//"Raktim is a teacher" => search father => false
//solution methods: includes

function containsWord(sentence, word) {
  return sentence.toLowerCase().includes(word.toLowerCase());
}

// Example usage
console.log(containsWord("Raktim is a teacher", "Teacher")); // true
console.log(containsWord("Raktim is a teacher", "father")); // false
console.log(containsWord("Raktim is a teacher", "raktim")); // true
