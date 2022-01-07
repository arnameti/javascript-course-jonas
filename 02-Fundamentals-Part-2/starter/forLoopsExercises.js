"use strict";

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sumArray_1 = 0;
let sumArray_2 = 0;

for (let i = 0; i < arr_1.length; i++) {
  sumArray_1 += arr_1[i];
}

for (let i = 0; i < arr_2.length; i++) {
  sumArray_2 += arr_2[i];
}

console.log(sumArray_1 + sumArray_2);

console.log("---------------------------------------------------------");

// Using a for loop print all even numbers up to and including n. Don’t include 0.
// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

for (let i = 1; i <= 22; i++) {
  if (i % 2 === 0) console.log(i);
}

console.log("---------------------------------------------------------");

// Using a for loop output the elements in reverse order
// Example output:
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

let arr_3 = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = arr_3.length - 1; i >= 0; i--) {
  console.log(arr_3[i]);
}

console.log("---------------------------------------------------------");

// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// Example output:
// [12, 7, 16]

let arr_4 = [4, 6, 7];
let arr_5 = [8, 1, 9];
let sumArr_3 = [];

for (let i = 0; i < arr_4.length; i++) {
  sumArr_3.push(arr_4[i] + arr_5[i]);
}
console.log(sumArr_3);

console.log("---------------------------------------------------------");

// Given a number n Calculate the factorial of the number
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

let n2 = 4;
let factN2 = 1;

for (let i = n2; i > 0; i--) {
  factN2 *= i;
}
console.log(factN2);

console.log("---------------------------------------------------------");

// 1. Write a JavaScript program that accept two integers and display the larger

const twoIntegers = (x, y) => (x > y ? console.log(x) : console.log(y));

twoIntegers(20, 22);

console.log("---------------------------------------------------------");
// 2. Print only the ODD values from 3 - 29, one number per line.

for (let i = 3; i <= 29; i++) {
  if (!(i % 2 === 0)) console.log(i);
}

console.log("---------------------------------------------------------");
// 3. Print the EVEN numbers 12 down to -14 in descending order, one number per line.

for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) console.log(i);
}

console.log("---------------------------------------------------------");
// 4. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) console.log(i);
}
console.log("---------------------------------------------------------");

// 5.Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
// a. Print each element of the array to a new line.
// b. Print each character of the string---in reverse order---to a new line.

let str = "LaunchCode";
let arr_6 = [1, 5, "LC101", "blue", 42];

for (let i = 0; i < arr_6.length; i++) {
  console.log(i);
}

console.log("---------------------------");

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

console.log("---------------------------------------------------------");

// 6. Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
// Print the arrays to confirm the results. Print evens first. Example: console.log(evens);

const arr_7 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evenArr = [];
const oddArr = [];

for (let i = 0; i < arr_7.length; i++) {
  if (arr_7[i] % 2 === 0) {
    oddArr.push(arr_7[i]);
  } else {
    evenArr.push(arr_7[i]);
  }
}

console.log(oddArr);
console.log(evenArr);

console.log("---------------------------------------------------------");

// Function 'printArray()' prints all the elements of a 2D array using nested for loops.

let arr_8 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

function print2DArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

print2DArray(arr_8);

console.log("---------------------------------------------------------");

// Function `deleteElement()` deletes all the occurrence of element from the given array.
//  var arr = [23,56,4,78,5,63,45,210,56];
// deleteElement(arr_9, 63);
// console.log(arr_9);
// [23, 56, 4, 78, 5, 45, 210, 56]

let arr_9 = [23, 56, 4, 78, 5, 63, 45, 210, 56];

function deleteElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      arr.splice(i, 1); //Delete element from array
    }
  }
  return arr;
}

deleteElement(arr_9, 63);
console.log(arr_9);

console.log("---------------------------------------------------------");

// Write a JS code to find the power of a number using for loop
// Function numPower() to returns power of number for provided exponential value using for loop.

function numPower(numb, pow) {
  let res = 1;
  for (let i = 0; i < pow; i++) {
    res *= numb;
  }
  return res;
}

console.log(numPower(5, 3));

console.log("---------------------------------------------------------");

// 7. Write a JS code to print a pattern using for loop
// Function printPattern() is used to print a pattern for a given range using nested for loop.

function printPattern(range) {
  for (let i = 1; i <= range; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
printPattern(8);

console.log("---------------------------------------------------------");

// Program to find the largest number in the given 1D array.
const arr_10 = [2, 45, 3, 67, 34, 580, 702, 345, 700];

let largest = arr_10[0];

for (let i = 0; i < arr_10.length; i++) {
  largest = arr_10[i] > largest ? arr_10[i] : largest;
}

console.log(largest);

// Write a JS code to find the number of zeros in 2D Matrix

let arr_11 = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
  [1, 0, 0],
];

let zeroCount = 0;
for (let i = 0; i < arr_11.length; i++) {
  for (let j = 0; j < arr_11[0].length; j++) {
    zeroCount = arr_11[i][j] === 0 ? zeroCount + 1 : zeroCount;
  }
}

console.log(zeroCount); //5

// 12. Write a JS code to find product of two arrays
// Function findProd() to generate a new array which is the product of two arrays of the same size using for loop.

var arr_12 = [3, 45, 23, 78, 34, 8, 78, 34, 8];
var arr_13 = [4, 2, 34, 4, 12, 1];

function findProd(arr1, arr2) {
  let findProd = [];
  let arrLength = arr1.length > arr2.length ? arr2 : arr1;
  for (let i = 0; i < arrLength.length; i++) {
    findProd.push(arr1[i] * arr2[i]);
  }
  return findProd;
}

console.log(findProd(arr_12, arr_13));
