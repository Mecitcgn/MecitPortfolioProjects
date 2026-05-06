function destroyer(arr, ...otherArgs) {
	let filteredArray = arr.filter((a) => !otherArgs.includes(a));
	return filteredArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]

console.log(
	destroyer(
		[
			'possum',
			'trollo',
			12,
			'safari',
			'hotdog',
			92,
			65,
			'grandma',
			'bugati',
			'trojan',
			'yacht',
		],
		'yacht',
		'possum',
		'trollo',
		'safari',
		'hotdog',
		'grandma',
		'bugati',
		'trojan',
	),
);
// [12, 92, 65]
