// Object

// Complex Data Type
// Object, Array, Date

// 1. Multiple Datatypes exists within complex data type
// 2. CRUD (Create Read Update Delete)

// Create

//  const person ={}; // functional based concept
//  const persons = new Object(); // class based concept

//  console.log(person, typeof person, persons);

//  const laptop = {
//     brand: "apple",
//     model: "macbook air",
//     modelYear: 2024,
//     age: function(){
//         return 2025 - this.modelYear; // 2024
//     }, // ES5
//     ageNew: () => {
//         return 2025 - laptop.modelYear; //undefined
//     }, // ES6
//  };

//Read (using . notation with key)

// console.log(laptop.brand);
// console.log(laptop.age()); //1
// console.log(laptop.ageNew()); // NaN

// Update

// laptop.brand="dell";
// console.log(laptop);

// Delete
// ES5
// delete laptop.brand;
// console.log(laptop);

// Write CRUD operation for student object data
// const student = {
//   faculty: "BCA",
//   semester: "IV",
//   year: "2",
//   tech: function () {
//     return 3 - this.year;
//   },
// };
//Read
// console.log(student.faculty);
// console.log(student.year);
// console.log(student.semester);
//Update
// student.faculty = "BIT";
// console.log(student);
//Delete
// delete student.semester;
// console.log(student);

//  Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.

// let prod = {
// name: "headphones",
// price: 83.7,
// discount: "7%",
// };

// End result should be like this >>

// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.

yo vandha tala not run


// const reviewProduct = (product) => {
//   product.price =
//   product.price > 100
//   ? (product.price - 0.1 * product.price).toFixed(2)
//   : (product.price - 0.07 * product.price).toFixed(2);
//   product.discount = product.price > 100 ? "10%" : "7%";
//   return product;
// };
// const newProduct = reviewProduct(product);
// console.log(newProduct);

// function applyDiscount(product) {
//   if (product.hasOwnProperty("discount")) {
//       console.log(`Already discounted by ${product.discount}.`);
//   } else {
//       let discountRate = product.price > 100 ? 0.10 : 0.07;
//       let discountAmount = product.price * discountRate;
//       let newPrice = (product.price - discountAmount).toFixed(2);

//       product.price = newPrice;
//       product.discount = `${discountRate * 100}%`;

//       console.log(product);
//   }
// }

// let prod = { name: "headphones", price: 120 /*83.7*/, discount: "7%" };
// applyDiscount(prod);

// let prod2 = { name: "speaker", price: 120 };
// applyDiscount(prod2);


let prod = {
  name: "headphones",
  price: 150,
  discount: "7%",
};

function applyDiscount(product) {
  for (let key in product) {
    if (key === "discount") {
      console.log(`Already discounted by ${product[key]}.`);
      return;
    }
  }
  if (product.price > 100) {
    product.discount = "10%";
    product.price = (product.price * 0.9).toFixed(2);
  } else {
    product.discount = "7%";
    product.price = (product.price * 0.93).toFixed(2);
  }
}

applyDiscount(prod);
console.log(prod);
