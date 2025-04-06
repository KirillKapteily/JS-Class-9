//1
const fun = function (a, b) /* параметри*/ {
  return a + b;
};

console.log(fun(5, 7)); //аргументи

//2
const fun2 = function (a = 2, b = 2) {
  return a * b;
};

console.log(fun2(5, 7));

//3 for loop arithmetic mean
let mass = [1, 2, 3, 4, 5];
total = 0;
const fun3 = function (arr) {
  for (let i = 0; i < mass.length; i++) {
    // mass[i] = mass[i] / 2;
    total += mass[i];
  }
  const average = total / mass.length;
  return average;
};
console.log(fun3(total));

//4
// let mass2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fun4 = function (arr) {
//   for (element of mass2) {
//     if (element / 2) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// return mass2;
// };

// console.log(fun4(4)); // true
// console.log(fun4(3));

//5
const fun5 = function (a) {
  return a % 2 === 0;
};

console.log(fun5(4));
console.log(fun5(3));
