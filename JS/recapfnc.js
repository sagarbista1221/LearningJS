// String Manipulation
// Closure
// Callback function

const counter = () => {
    let count = 0; //private variable
    return () => count++;
};
const counterA = counter();
console.log(counterA(), counterA());

const counterB = counter();
console.log(counterB());