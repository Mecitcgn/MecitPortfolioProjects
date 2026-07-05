**1-** Normal Functionss
function addNumbers(x, y, z) {
  return x + y + z;
}
console.log(addNumbers(5, 3, 8)); // Output: 16
**2-**
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // Output: 105
**3-**
const multiplyNumbers = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // Output: 20
**4-** Arrow Functions
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
-----
const cube = x => {
  return x * x * x;
};

console.log(cube(3)); // Output: 27
-----
const square = number => number * number;

console.log(square(5)); // Output: 25
