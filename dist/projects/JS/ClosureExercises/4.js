function rateLimitter(fn, time) {
	let lastTime = 0;

	return function () {
		const now = Date.now();
		if (now - lastTime >= time) {
			lastTime = now;
			fn();
		}
	};
}

const eleman = rateLimitter(() => {
	console.log('Selam Dost');
}, 2000);

eleman();
eleman();
eleman();
setTimeout(() => {
  eleman();
}, 2500);