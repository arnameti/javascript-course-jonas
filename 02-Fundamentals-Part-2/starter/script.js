// ----------------------------------------------------------------------------------------------------

const arr = [1, 2, 3];

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

// --> arr= [1, 2, 3], n=3

// i = 0, n = 3, array=1 --> 1*1 = 1
// i = 1, n = 3, array=2 --> 1*2 = 2
// i = 2, n = 3, array=3 --> 2*3 = 6

//----------------------------------------
// --> arr= [1, 2, 3], n=3

//  arr[3 - 1] = arr[2] = 3
//

console.log(multiply(arr, 4));

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
  console.log("My name is Jonas");
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

/*
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
*/

// ----------------------------------------------------------------------------------------------------
// #################### Arrow Functions

/*
//Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

const square = (x) => {
  return x * x;
};

const sum = (x, y) => {
  return x + y;
};

const isEven = function (num) {
  //regular function expression
  return num / 2 === 0;
};

const isEven = (num) => {
  //arrow function with parens around param
  return num / 2 === 0;
};

const isEven = (num) => {
  //arrow function with no parens around param
  return num / 2 === 0;
};

const isEven = (
  num //arrow function with implicit return
) => num / 2 === 0;

const isEven = (num) => num / 2 === 0; //on-line implicit return
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
const friend = new Array("Michael", "Steven", "Peter");
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends, true];
console.log(jonas);
console.log(jonas.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
// ----------------------------------------------------------------------------------------------------
// #################### Array Methods

/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// ADD Elements
const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

const newLength2 = friends.unshift("John");
console.log(newLength2);
console.log(friends);

Remove Elements
console.log("************* Remove Elements *************");
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### Code Challange #6

/*  
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Introduction to objects
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Stevens"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friendd');

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job and friend');
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and hies best friend is called ${jonas.friends[0]}`
);
*/

// ----------------------------------------------------------------------------------------------------
// #################### Introduction to objects  - Netninja
/*
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  2468: [],
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["email"]);
// console.log(user["2468"]);
// console.log(user[2468]);
// //-------------------------------------
// user.name = "chun-li";
// console.log(user["name"]);
// //-------------------------------------
// user["name"] = "chun-la";
// console.log(user.name);
// // -------------------------------------
// user[2468] = {};
// console.log(user["2468"]);
// //-------------------------------------
// user["2468"] = "eine Zahl";
// console.log(user[2468]);
// //-------------------------------------
// console.log(user.blogs[0]);
// //-------------------------------------
// const value = "abba";
// user[5439]["name"] = value;
// console.log(user[5439]);
// //-------------------------------------
// user[5439].name = [value];
// console.log(user[5439]);
// // -------------------------------------
// user[5439].name = ["value"];
// console.log(user[5439]);
// //-------------------------------------
// user[5439].name = "value";
// console.log(user[5439]);
// //-------------------------------------
// delete user[2468];
// console.log(user);
//-------------------------------------
delete user[5439]["albumTitle"];
console.log(user);

/*
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "tracks", ["Take a Chance on Me"]);
console.log(recordCollection[5439]);
*/

//-------------------------------------
// const key = "location";
// console.log(user[key]);
//-------------------------------------
// console.log(typeof user);
// ----------------------------------------------------------------------------------------------------
// #################### Objects Methods

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Stevens"],
  hasDriversLIcense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLIcense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Challenge
// Jonas is a 46year old teacher, and he has a/no DriversLicense.

console.log(jonas.getSummery());
*/
// ----------------------------------------------------------------------------------------------------
// #################### Code Challenge 7

/*
const bmi1 = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  
  calcBMI: function () {
   this.bmi = this.mass / (this.height ** 2);
   return this.bmi;
  }
};

const bmi2 = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
   }
};

if (bmi1.calcBMI > bmi2.calcBMI) {
  console.log(`${bmi1.firstName} ${bmi1.lastName}'s BMI(${bmi1.calcBMI()}) is higher than ${bmi2.firstName} ${bmi2.lastName}'s BMI(${bmi2.calcBMI()})`)
} else {
  console.log(`${bmi2.firstName} ${bmi2.lastName}'s BMI(${bmi2.calcBMI()}) is higher than ${bmi1.firstName} ${bmi1.lastName}'s BMI(${bmi1.calcBMI()})`)
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### Iteration: The for Loop

//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// ----------------------------------------------------------------------------------------------------
// #################### Looping Arrays, Breaking and Continuing
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

console.log("--------------------------------------------------------");

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

console.log("------ Only Strings ------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("------ BREAK WITH NUMBER ------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### Looping Backwards and loops in loops

/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
  }
}
*/

// ----------------------------------------------------------------------------------------------------
// #################### The while loops

/*
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}
*/
// ----------------------------------------------------------------------------------------------------
// #################### Code Challenge #8

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvaage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};

console.log(calcAvaage([2, 3, 7]));
console.log(calcAvaage(totals));
console.log(calcAvaage(tips));
*/
