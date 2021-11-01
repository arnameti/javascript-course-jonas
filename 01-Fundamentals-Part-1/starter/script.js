/*
let js = "amazing";
if (js === "amazing") alert("Javascript is FUN");

console.log(40 + 8 + 23 - 10);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Values and Variables

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
// let jonsd&matilda = 'JM';
// let new = 27;
// let function = 27;
// _ and $ are the only two symbols that are availible.

let Person = "Jonas";
// Do not start a variable name with an uppercase letter.

let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Data Types

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// ----------------------------------------------------------------------------------------------------
// #################### let, const and var

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Basic Operators

/*

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


//Assingment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
x--;
x--; 

console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=. <=
console.log(ageSarah >=18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

// ----------------------------------------------------------------------------------------------------
// #################### Operator Precedence

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);

*/

// ----------------------------------------------------------------------------------------------------
// #################### Code Challange #1

/*

const marksWeight = 78;
const johnsWeight = 92;
const marksSize = 1.69;
const jonsSize = 1.95;

const marksBMI = marksWeight / (marksSize ** 2);
console.log('Marks BMI is' + ' ' + marksBMI);

const johnsBMI = johnsWeight / (jonsSize ** 2);
console.log('Johns BMI is' + ' ' + johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);

*/

// ----------------------------------------------------------------------------------------------------
// #################### Strings and Template Literals

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

// ----------------------------------------------------------------------------------------------------
// #################### if / else Statements

/*
const age = 15;

if (age >= 18) {
  console.log ('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah ist too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/


// ----------------------------------------------------------------------------------------------------
// #################### Code Challange #2

/*
const marksWeight = 78;
const johnsWeight = 110;
const marksSize = 1.69;
const jonsSize = 1.95;

const marksBMI = marksWeight / (marksSize ** 2);
// console.log('Marks BMI is' + ' ' + marksBMI);

const johnsBMI = johnsWeight / (jonsSize ** 2);
// console.log('Johns BMI is' + ' ' + johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
// console.log(marksBMI, johnsBMI, markHigherBMI);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Marks's (${marksBMI})`);
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);


console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + '1';
n = n - 1;
console.log(n);

 