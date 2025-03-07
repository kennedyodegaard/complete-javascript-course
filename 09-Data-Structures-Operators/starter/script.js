'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${his.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};
restaurant.orderDelivery({
  time: '22:30'
  address: 'Via del Sole, 21'
  mainIndex: 2,
  starterIndex: 2,
})

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({ a,b } = obj); // needs to be wrapped in () bc if js sees curly braces it accepts a block and can't assign block to a variable
console.log(a,b);

// destructuring nested objects
const {fri: { open, close },
} = openingHours;
console.log(open, close);


