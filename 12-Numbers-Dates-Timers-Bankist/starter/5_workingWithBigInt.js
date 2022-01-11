'user strict';

console.log(2 ** 53 -1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(4730983456934857343534987509348750984375098n);
console.log(BigInt(4730983456934857343534987509348750984375098));

// Operations
console.log(10000n + 10000n);
console.log(423847239084723908472390847923847n * 10000n );
// console.log(Math.sqrt(16n));

const huge = 324234234234234234n;
const num = 23;

// console.log(huge * num);
console.log(huge * BigInt(num));


// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);

console.log(huge + ' is REALLY big');

// Divisions
console.log(11n / 3n);