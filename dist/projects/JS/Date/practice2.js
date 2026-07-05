const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const date = new Date();
date.setDate(date.getDate() + 7);

console.log(date.getDate(), months[date.getMonth()], date.getFullYear());
