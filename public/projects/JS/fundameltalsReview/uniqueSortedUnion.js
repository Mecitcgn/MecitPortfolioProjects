function uniteUnique() {
	let result = [];

	for (let i = 0; i < arguments.length; i++) {
		for (let j = 0; j < arguments[i].length; j++) {
			if (!result.includes(arguments[i][j])) {
				result.push(arguments[i][j]);
			}
		}
	}

	return result;
}
