const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sums = 0;
    numbers.forEach((item) => {
      sums += item;
    })
    return sums;
};

const multiply = function(numbers) {
  let product = 1;
    numbers.forEach((item) => {
      product *= item;
    })
    return product;
};

const power = function(number, toPower) {
	let newNum = number;
  for (let i = 1; i < toPower; i++) {
    newNum *= number;
  }
  return newNum;
};

const factorial = function(numbers) {
  let newNum = 1;
  for (let i = 1; i <= numbers; i++) {
    newNum *= i;
  }
  return newNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
