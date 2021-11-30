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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};
// #########################################################################################################################################




// ****************************************************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////
// Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = { 
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assingment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// or
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// nullish assingment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// AND assingment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// or
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONUMOUS>';


console.log(rest1);
console.log(rest2);
*/

// ****************************************************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////
// THe Nullish Coalescing Operator
/*
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefinded (NOT 0 or '');
// Only if it is null or undefined, the second operator will be executed
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// ****************************************************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
/*
console.log('------OR-------');
// Use any data type, return ANY data type, short-circuiting
console.log(3||'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

const guests3 = restaurant.numGuests || 10;
console.log(guests3);

console.log('------AND-------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// or
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
 

// ****************************************************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////
// Rest Patterns and Parameters
/*

// 1) Destructuring
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// All right, so let's recap after yet another quiet, long lecture here. So, the spread and rests syntax both look exactly the same
// but they work in opposite ways depending on where they are used. So the spread operator is used
// where we would otherwise write values, separated by a comma. On the other hand the rest pattern is basically used
// where we would otherwise write variable names separated by commas. So, again the rest pattern can be used
// where we would write variable names, separated by commas and not values separated by commas.

/*

// ****************************************************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////
// THe Spread Operator (...)
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Now you might have noticed that the spread operator is actually a bit similar to destructuring,
// because it also helps us get elements out of arrays. Now, the big difference is that the spread operator
// takes all the elements from the array and it also doesn't create new variables. And as a consequence, we can only use it
// in places where we would otherwise write values separated by commas.

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays together

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);
console.log('J', 'o', 'n', 'a', 's');

// So again, multiple values separated by a comma are usually only expected when we pass arguments into a function,
// or when we build a new array. So take note of that, because that is important to understand about the spread operator.

// Real world examople
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


// ****************************************************************************************************************************************
/*
///////////////////////////////////////////////////////////////////////////////////
// Destrucuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Defualt values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

// ****************************************************************************************************************************************

/*
///////////////////////////////////////////////////
// Destructing Arrays

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);





// switching variables
// const temp = main; //temp = italian
// main = secondary; // italian = vegetarian
// secondary = temp // vegetarian = italian
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// nested destrucering
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
