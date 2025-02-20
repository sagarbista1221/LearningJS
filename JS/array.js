// Complex data type
// Object, Array, Date

// 1. Multiple Database exists within complex data type

// const entity = [];


// using array method
// ['r', 'a', 'k'] => ['a', 'k']

// const data = ["r", "a", "k"];
// console.log(data.shift()); //r
// console.log(data); // a,k
// console.log(data.push("r")); // prototypes
// console.log(data);

// ES6
// Destructing objects / Array using spread operator

const user = {
    name: "raktim",
    password: "abc",
    role: "admin",
};
const {password, role, ...rest} = user;
console.log(rest);
const users = ["raktim", "Binaya", "Ram"];
// Spread with destruction
const [a, b, ...information] = users;
console.log(information);


// Immuatble JS
// are map, filter, reduce, find, some, every

const students = [
    {
        name: "raktim shrestha",
    }
    {
        name: "binaya dhital",
    }
];
// Immutable JS (map)
