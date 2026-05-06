function once(fn) {
	let c = 0;
	return function () {
		c++;
		if (c === 1) {
			fn();
		}
	};
}

const init = once(() => {
	console.log('Sadece bir kere!');
});

init(); // çalışır
init(); // çalışmaz
init(); // çalışmaz
