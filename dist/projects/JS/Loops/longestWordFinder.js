function findLongestWordLength(str) {
	let lengths = [];

	str.split(' ').forEach((word) => {
		lengths.push(word.length);
	});

	return Math.max(...lengths);
}
/*
function findLongestWordLength(str) {
  const words = str.split(" ");
  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}
*/
