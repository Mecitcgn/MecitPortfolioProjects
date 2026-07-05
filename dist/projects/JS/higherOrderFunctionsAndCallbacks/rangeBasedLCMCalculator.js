function smallestCommons(arr) {
	const [min, max] = arr.sort((a, b) => a - b);

	const gcd = (a, b) => {
		while (b !== 0) {
			[a, b] = [b, a % b];
		}
		return a;
	};
	const lcm = (a, b) => (a * b) / gcd(a, b);

	let result = min;
	for (let i = min + 1; i <= max; i++) {
		result = lcm(result, i);
	}

	return result;
}
console.log(smallestCommons([1, 5]));
