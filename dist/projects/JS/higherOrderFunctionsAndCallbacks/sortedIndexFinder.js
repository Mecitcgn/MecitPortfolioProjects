function getIndexToIns(arr, num) {
	let copyArr = [...arr];
	copyArr.push(num);
	copyArr.sort((a, b) => a - b);
	return copyArr.findIndex((a) => a === num);
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
