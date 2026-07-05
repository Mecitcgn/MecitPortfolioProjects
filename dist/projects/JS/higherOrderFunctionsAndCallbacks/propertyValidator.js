function truthCheck(collection, pre) {
	for (const obj of collection) {
		if (!obj[pre]) {
			return false;
		}
	}
	return true;
}

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'isBot',
	),
);
// false

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'name',
	),
);
// true

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'role',
	),
);
// false

/*
function truthCheck(collection, pre) {
  return collection.every((o) => Boolean(o[pre]));
}

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'isBot',
	),
);
// false

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'name',
	),
);
// true

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'role',
	),
);
// false
*/