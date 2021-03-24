'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating NEW variable with same name as outer scope's variable
//       const firstName = 'Kennedy';

//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millential, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2,));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Kennedy';
// calcAge(1991);

// Variables
// console.log(me);
// // console.log(job);
// console.log(year);

// var me = 'Kennedy';
// // let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// // IMPORTANT: The only function that you can use before declaring is with function declaration
// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// var y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.x);
// console.log(z === window.x);

// console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

// this is not a code block, it's an object literal
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
console.log(this);
// jonas.calcAge();

const matilda = {
  year: 2017,
};

//method borrowing...
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

//undefined bc no owner of the function at this point
const f = jonas.calcAge;
f();
