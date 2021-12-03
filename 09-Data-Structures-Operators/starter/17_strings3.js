'use strict';

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstNanme, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstNanme, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  // for (const n of names) {
  //  namesUpper.push(n[0].toUpperCase() + n.slice(1));
  // }
  // console.log(namesUpper);

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '#').padEnd(30, '#'));
console.log('Jonas'.padStart(20, '#').padEnd(30, '#'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...'
console.log(message2.repeat(5));

const planesinLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesinLine(5);