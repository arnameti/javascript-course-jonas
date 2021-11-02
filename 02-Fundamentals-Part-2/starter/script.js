// ----------------------------------------------------------------------------------------------------
// #################### strict mode

/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';534; 
// const private = 534; 
*/

// ----------------------------------------------------------------------------------------------------
// #################### Functions Fundemantels

/*
function logger() {
  console.log('My name is Jonas');
}

// calling, running, invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Functions Declaraton vs. Expressions

// Function declaration

/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/


// ----------------------------------------------------------------------------------------------------
// #################### Arrow Functions

/*
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

// ----------------------------------------------------------------------------------------------------
// #################### Functions calling other Functions

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} of apple and ${orangePieces} of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// ----------------------------------------------------------------------------------------------------
// #################### Code Challange #5

const calcAvarage = (score1, score2, score3) => {
  const avarage = (score1 + score2 + score3) / 3;
  return avarage;
};

const scoreDolphins = calcAvarage(300, 23, 71);
const scoreKoalas = calcAvarage(1000, 54, 49);

function checkWinner (avgDolphins, avgKoalas) {
  if (avgDolphins > (2 * avgKoalas)) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > (2 * avgDolphins)) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('Nobody has won');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
