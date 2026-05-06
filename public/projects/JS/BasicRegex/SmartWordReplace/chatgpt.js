function myReplace(str, before, after) {
	const regex = new RegExp(before, 'g');
	return str.replace(regex, (match) => {
		if (match[0] === match[0].toUpperCase()) {
			return after[0].toUpperCase() + after.slice(1);
		}
		return after[0].toLowerCase() + after.slice(1);
	});
}
