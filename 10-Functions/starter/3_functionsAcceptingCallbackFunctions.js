"use strict"

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstword = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

console.log(
  upperFirstword('hallo wie geht es dir')
);
console.log('--------------------------------');

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};


transformer('JavaScript is the best!', upperFirstword);
console.log('--------------------------------');
transformer('JavaScript is the best!', oneWord);