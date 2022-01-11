'user strict';

console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2);

console.log('23');
console.log(Number('23'));

// Conversion
console.log(+'23');

console.log('----ParsInt----');
// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log('----ParsFloat----');
console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// Check if value is NaN
console.log('----NaN----');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Check if value is number
console.log('----Finite----');
console.log(isFinite(20));
console.log(isFinite('20'));
console.log(isFinite(+'20X'));
console.log(isFinite(23 / 0));

console.log('----Integer----');
// 
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));