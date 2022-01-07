"use strict"

// Example 1
/*
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

// Example 2
/*
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

g();
f();
*/


// Example 3
/*
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function () {
    console.log(b * 2)
  }
}

g();
f();

// Re-assigned by f function
h();
f();
*/


// Example 4
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passeners`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);