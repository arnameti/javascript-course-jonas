'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements2 = [430, 1000, 700, 50, 90];

// Equality
console.log(movements.includes(-130));

// SOME: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);


// Every: Condition
console.log(movements.every(mov => mov > 0));
console.log(movements2.every(mov => mov > 0));

// Seperate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));