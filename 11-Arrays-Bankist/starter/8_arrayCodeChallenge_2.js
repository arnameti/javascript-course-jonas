'use strict';

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];


const calcAvarageHumanAge = function (ages) {
  const humanAges = ages
    .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge))
    .filter(humanAge => humanAge > 18)
  // const avarageAge = humanAges.reduce((acc, humanAge) => acc + humanAge, 0) / humanAges.length;
  const avarageAge = humanAges.reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0)
  
  return avarageAge;
};

console.log(calcAvarageHumanAge(ages1));
console.log(calcAvarageHumanAge(ages2));
