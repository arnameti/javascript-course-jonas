"use strict";

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

const sumArr = function (arr) {
  let sum = 0;
  for (const n of arr) {
    sum = sum + n;
  }
  return sum;
};

console.log(sumArr(arr_1));
