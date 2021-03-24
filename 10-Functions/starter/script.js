'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5 way, ES6 is to add default to parameters
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');


// const flight = 'LH234'
// const jonas = {
//   name: 'Kennedy Odegaard',
//   passport: 12345678,
// };

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999'
//   passenger.name = 'Ms.' + passenger.name;

//   if (passenger.passport === 12345678) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// }

// checkIn(flight, jonas)


// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);

// }

// transformer('JavaScript is the best!', upperFirstWord);


// // JS uses callbacks all the time
// const high5 = function() {
//   console.log('👩');
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam', 'Kennedy'].forEach(high5);



// const greet = function (greeting) {
//   return function (name) {
//       console.log(`${greeting} ${name}`);
//   };
// };

// greet('Hello')('Jonas')

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// //Challenge with arrow function... parenthesis not even necessary
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Kennedy');




// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// //possible bc JS has 1st class functions
// const book = lufthansa.book;

// //doesnt work
// // book(23, 'Sarah Williams');

// //we called the call mention which calls the book method with this set to the first argument given
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply method.. a little outdated with apply
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

// // the same as apply but spreading arguments in
// book.call(swiss, ...flightData);

// //bind most important
// book.call(eurowings, 23, 'Sarah Williams');

// // will return a new function where the this keyword always directs to eurowings
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// // partial appliation - a part of the arguments of the original function are already set
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Matha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);

//   this.planes++
//   console.log(this.planes);
// };

// // addEventListener is the high order function which receives a callback function (lufthansa.buyPlane)
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// lufthansa.buyPlane();

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, .23);

// console.log(addVAT(100));

// const addTaxRate = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register the answer
    typeof answer === 'number' && answer << this.answers.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
    console.log(this.answers);
  },

  displayResults(type = 'array') {
    if(type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');

//immediately invoked function expression, IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();



const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();



(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  })
})();



















































































