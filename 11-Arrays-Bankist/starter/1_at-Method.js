"use strict"

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

// ### gettin last array element ###
console.log(arr[arr.length -1]);
// Copy of the array, but only with the last element.
console.log(arr.slice(-1));
// We cant take out the value from the array.
console.log(arr.slice(-1)[0]);

// ### gettin last array element with at-method ###
console.log(arr.at(-1));


// ### at-Method works also on strings ###
console.log('jonas'.at(0));
console.log('jonas'.at(-1));