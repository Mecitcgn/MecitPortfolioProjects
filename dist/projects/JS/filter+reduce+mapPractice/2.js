console.log([120, 80, 30, 200].reduce((acc, cur) => (acc += cur), 0));

console.log(
	[3, 67, 12, 89, 45].reduce((acc, cur) => {
		console.log('Current: ' + cur);
		console.log('Acc: ' + acc);
		if (cur > acc) {
			acc = cur;
		}
		return acc;
	}, 0),
);

console.log(
	['elma', 'armut', 'muz'].reduce((acc, cur) => {
		acc += cur.length;
		return acc;
	}, 0),
);
