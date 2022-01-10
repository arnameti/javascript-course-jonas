'use strict';

// 1)
// Taking from the Object und creating a new Array.
const bankDepositSum = accounts.map(acc => acc.movements);
console.log('bankDepositSum: ', bankDepositSum);

// Now we have an Array of Arrays. But we want a new Array. We can use the flat Method.
const arr = bankDepositSum.flat();
console.log(arr);

// We can do it all in once
const bankDepositSum2 = accounts.map(acc => acc.movements).flat();
console.log('bankDepositSum2: ', bankDepositSum2);

// in most cases flat and map are used at the same time. Thats why we can use flatMap.
const bankDepositSum3 = accounts.flatMap(acc => acc.movements);
console.log('bankDepositSum3: ', bankDepositSum3);

// Now add all the deposits from all bank accs. together
const bankDepositSum4 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum4);

// 2)
const numDeposits1000_1 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log('numDeposits1000_1: ', numDeposits1000_1);

const numDeposits1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log('numDeposits1000_2: ', numDeposits1000_2);

const numDeposits1000_3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log('numDeposits1000_3: ', numDeposits1000_3);

// Prefixed ++ operator
let a = 10;
console.log('a++:', a++);
console.log('++a:', ++a);
console.log(a);

// 3)
const createObject = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(createObject);

// Destructing
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// Another Way
const createObject2 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(createObject2);

//4)
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : capitalize(word)
    )
    .join(' ');

    return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

