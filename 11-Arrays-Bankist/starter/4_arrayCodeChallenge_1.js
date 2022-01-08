const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia;
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  // const dogs = [...dogsJuliaCorrected, ...dogsKate]
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (age, i) {
    if (age > 3) {
      console.log(`Dog number ${i + 1} is and adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
