'user strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 8, 23, 11, 2));
console.log(Math.max(5, 8, '23', 11, 2));
console.log(Math.max(5, 8, '23px', 11, 2));

console.log(Math.min(5, 8, 23, 11, 2));
console.log(Math.min(5, 8, '23', 11, 2));
console.log(Math.min(5, 8, '23px', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);


console.log(Math.trunc(Math.random() * 6) + 1);
// 0...1 -> 0...(max - min) -> min...(max - min + min)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// Rounding Integers

console.log('----trunc----');
console.log(Math.trunc(23.3));

console.log('----round----');
console.log(Math.round(23.3));
console.log(Math.round("23.3"));
console.log(Math.round(23.9));
console.log(Math.round("23.9"));

console.log('----ceil----');
console.log(Math.ceil(23.3));
console.log(Math.ceil("23.3"));
console.log(Math.ceil(23.9));
console.log(Math.ceil("23.9"));

console.log('----floor----');
console.log(Math.floor(23.9));
console.log(Math.floor(23.9));
console.log(Math.floor("23.9"));

console.log('----Negative Numbers----');
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.9));

console.log('----Rounding Decimals----');
// Rounding decimals
// toFixed always returns a String not a Number
console.log((2.4).toFixed(0));
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(1));
console.log((2.7).toFixed(2));
console.log((2.7).toFixed(3));
console.log((2.344).toFixed(2));
console.log(+(2.345).toFixed(2));




