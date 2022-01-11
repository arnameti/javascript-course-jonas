'use strict';


// Create a Date
const now = new Date();
console.log(now);

console.log(new Date('Tue Jan 11 2022 14:17:56'));

console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.log('----working with dates----');
//  Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(future.getTime()));

console.log(Date.now());

console.log('----set----');
future.setFullYear(2040);
console.log(future);

