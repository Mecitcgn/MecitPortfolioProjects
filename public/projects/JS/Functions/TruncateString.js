function truncateString(x, y) {
	let stringLength = x.length;
	let newString = '';
	if (y < stringLength) {
		newString = x.slice(0, y);
		return newString + '...';
	} else {
		return x;
	}
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
