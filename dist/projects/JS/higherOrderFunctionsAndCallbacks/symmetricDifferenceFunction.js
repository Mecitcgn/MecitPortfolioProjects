function diffArray(arr1, arr2) {
	let filteredArray1 = arr1.filter((a) => !arr2.includes(a));
	let filteredArray2 = arr2.filter((a) => !arr1.includes(a));
	return [...filteredArray1, ...filteredArray2].sort((a, b) => b - a);
}

console.log(
	diffArray(
		['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
		['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
	),
);

console.log(diffArray(['pen', 'book'], ['book', 'pencil', 'notebook']));
