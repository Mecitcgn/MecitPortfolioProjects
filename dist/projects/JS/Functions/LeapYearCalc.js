let year = 2024;

function isLeapYear(x) {
	if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
		return x + ' is a leap year.';
	} else {
		return x + ' is not a leap year.';
	}
}

let result = isLeapYear(year);
console.log(result);
