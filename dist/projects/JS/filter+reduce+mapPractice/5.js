const words = ['js', 'html', 'css', 'js', 'css', 'js'];

const wordFrequency = words.reduce((acc, word) => {
	if (acc.hasOwnProperty(word)) {
		acc[word]++;
	} else {
		acc[word] = 1;
	}
	return acc;
}, {});

console.log(wordFrequency);
