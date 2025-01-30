const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(arr) {
  return arr.reduce((acc, number) => acc + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, number) => acc * number, 1);
};

const power = function(firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number) {
	if (number === 1 || number === 0) {
      return 1;
    }
    return number * factorial(number - 1);
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
