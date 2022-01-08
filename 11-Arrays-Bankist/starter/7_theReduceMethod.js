'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur
}, 0);
console.log(balance);


let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);


const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3);


// Maximum value
const max = movements.reduce((acc, mov) => {
  console.log(`acc = ${acc}; mov = ${mov}`);
  
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
