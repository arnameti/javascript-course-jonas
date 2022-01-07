"use strict";

// Function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

//Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge3(1991);
console.log(age4);

const calcAge5 = (x, y, z) => x * y * z;
const age5 = calcAge5(2, 3, 4);
console.log(age5);

const calcAge6 = (x, y, z) => {
  return x * y * z;
};
const age6 = calcAge6(2, 3, 4);
console.log(age6);
