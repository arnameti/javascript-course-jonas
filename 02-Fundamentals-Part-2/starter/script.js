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

/*
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
*/

// ----------------------------------------------------------------------------------------------------
// #################### Introduction to Arrays

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Array Methods


/*
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay');


// ADD Elements
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);


//Remove Elements

friends.pop(); // Las Element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log ('You have a friend called Peter');
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### Code Challange #6


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
