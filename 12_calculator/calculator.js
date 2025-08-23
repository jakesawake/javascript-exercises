const add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(1, 2));

const subtract = function (num1, num2) {
  return num1 - num2;
};

console.log(subtract(5, 3));

const sum = function (arr) {
  return arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};

console.log(sum([1, 2, 3]));

const multiply = function (num) {
  return num.reduce((acc, curr) => (acc *= curr));
};

console.log(multiply([2, 4]));

const power = function (num1, num2) {
  return num1 ** num2;
};

console.log(power(5, 5));

const factorial = function (num) {
  if (typeof num != "number") {
    console.log("enter a number only");
  } else if (num <= 0) {
    console.log("enter a number greater than 0");
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
