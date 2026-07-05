function memoize(fn) {
	const cache = {};

	return function (n) {
		if (n in cache) {
			return cache[n]; // cache’den dön
		}

		const result = fn(n); // hesapla
		cache[n] = result; // sakla
		return result;
	};
}

const slowSquare = (n) => {
	console.log('Hesaplanıyor...');
	return n * n;
};

const memoSquare = memoize(slowSquare);

console.log(memoSquare(2)); // Hesaplanıyor... → 4
console.log(memoSquare(2)); // log yok → 4
console.log(memoSquare(3)); // Hesaplanıyor... → 9
console.log(memoSquare(3)); // log yok → 9
