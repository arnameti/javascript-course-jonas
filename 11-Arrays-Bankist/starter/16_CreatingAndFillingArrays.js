'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
x.fill(0);
// x.fill(1, 3);
// x.fill(1, 3, 5);

console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('EUR', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log('MovementsUI2: ', movementsUI2);
});
