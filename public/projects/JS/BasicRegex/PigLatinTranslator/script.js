function translatePigLatin(str) {
	const famousWord = str.replace(/^([aeiou])(\w*)/g, '$1$2way');
	const consonantWord = str.replace(
		/^([bcdfghjklmnpqrstvwxyz]*)(\w*)/g,
		'$2$1ay',
	);

	if (
		str[0] === 'a' ||
		str[0] === 'e' ||
		str[0] === 'i' ||
		str[0] === 'o' ||
		str[0] === 'u'
	) {
		return famousWord;
	} else {
		return consonantWord;
	}
}

console.log(translatePigLatin('glove'));
