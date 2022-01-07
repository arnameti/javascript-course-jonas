'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}


for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------------------ FOR EACH --------------------------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});


// The order does matter. The first parameter has to be the current element, 
// The second parameter, always the current index and the third always the entire array,
// that we are looping over
movements.forEach(function (mov, i, arr) {
  console.log(mov, i, arr);
  console.log('------------------------------------');
})


movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
})


// one fundamental difference between the two of them is that you cannot break out of a forEach loop. So the continue and break statements do not work in a forEach loop at all. So instead, forEach will always loop over the entire array and there is nothing that you can do about it. So if you really need to break out of a loop then you have to keep using the for of loop, but other than that it really comes down to your personal preference.