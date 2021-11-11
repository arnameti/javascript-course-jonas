'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str); 

      function add (a, b) {
        return a + b;
      }

      output = 'New Output';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
// --------------------------------------------------

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));


function addDecl(a, b) {
  return a + b;
}

const addExpr = function(a, b) {
  return  a + b;
}

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingrt();

var numProducts = 10;

function deleteShoppingrt() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// --------------------------------------------------

console.log(this);

console.log('--------------------------------');

function calcAgeDecl (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeDecl(1990);

console.log('--------------------------------');

const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);

console.log('--------------------------------');

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1980);

console.log('--------------------------------');

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year)
  }
}
jonas.calcAge();

console.log('--------------------------------');

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

console.log('--------------------------------');

const f = jonas.calcAge;
f();