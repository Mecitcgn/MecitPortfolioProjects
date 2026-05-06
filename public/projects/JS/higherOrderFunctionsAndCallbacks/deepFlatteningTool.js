function steamrollArray(nestedArr) {
	let result = [];

	for (let arr of nestedArr) {
		if (Array.isArray(arr)) {
			result.push(...steamrollArray(arr));
		} else {
			result.push(arr);
		}
	}

	return result;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

/*
function steamrollArray(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length > 0) {
    let item = stack.shift();

    if (Array.isArray(item)) {
      stack.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

*/