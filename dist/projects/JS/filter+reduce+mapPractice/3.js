const arr = [45, 60, 72, 30, 90, 100].filter((x) => x > 50).map((x) => x * 10);
const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
console.log(average);

const users = [
	{ name: 'Ali', age: 17 },
	{ name: 'Veli', age: 22 },
	{ name: 'Ayşe', age: 19 },
	{ name: 'Can', age: 15 },
];

let ageOlder18 = users.filter((x) => x.age > 18);
let averageAge =
	ageOlder18.reduce((acc, curr) => {
		acc += curr.age;
		return acc;
	}, 0) / ageOlder18.length;
console.log(ageOlder18);
console.log(averageAge);
