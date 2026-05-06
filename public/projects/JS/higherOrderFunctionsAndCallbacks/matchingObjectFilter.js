function whatIsInAName(objectArr, sourceObject) {
	let sourceObjectKey = Object.keys(sourceObject);
	return objectArr.filter((obj) => {
		return sourceObjectKey.every((key) => {
			return obj.hasOwnProperty(key) && obj[key] === sourceObject[key];
		});
	});
}
console.log(
	whatIsInAName(
		[{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
		{ apple: 1, cookie: 2 },
	),
);


/*
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const result = [];

  for (const obj of collection) {
    let match = true;

    for (const key of sourceKeys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        match = false;
        break;
      }
    }

    if (match) result.push(obj);
  }

  return result;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
*/