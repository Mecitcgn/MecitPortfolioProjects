Operatorler
+ - / * % **

---------
1-
const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
2- Üs almada sağdan başlanır. Mesela burada 3**2 = 9 - 2**9 = 512 şeklinde hesaplanıyor.
const result3 = 2 ** 3 ** 2;
console.log(result3); // 512
3- 
let x = 5;
console.log(++x); // 6
console.log(x); // 6
let y = 5;
console.log(y++); // 5
console.log(y); // 6
4- Assignment Operatorleri
+= | -= | *= | /= | %= | **=
5- Boolean equality
console.log(5 == '5'); // true
console.log(5 === '5'); // false
6- Unary operators
const str = '42';
const num = +str;
console.log(num); // 42
console.log(typeof num); // number
-----
const num = 4;
console.log(-num); // -4
7- Ternary Operator
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(`It's a ${weather} day!`); // It's a sunny day!
8- Math Methods
    The Math.random() Method: This method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the possible output can be 0, but it will never actually reach 1.
    The Math.max() Method: This method takes a set of numbers and returns the maximum value.
    The Math.min() Method: This method takes a set of numbers and returns the minimum value.
    The Math.ceil() Method: This method rounds a value up to the nearest whole integer.
    The Math.floor() Method: This method rounds a value down to the nearest whole integer.
    The Math.round() Method: This method rounds a value to the nearest whole integer.
    The Math.trunc() Method: This method removes the decimal part of a number, returning only the integer portion, without rounding.
    The Math.sqrt() Method: This method will return the square root of a number.
    The Math.cbrt() Method: This method will return the cube root of a number.
    The Math.abs() Method: This method will return the absolute value of a number.
    The Math.pow() Method: This method takes two numbers and raises the first to the power of the second.
9- Nanlar
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false


console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
10- Ekstra
parseFloat
parseInt
toFixed