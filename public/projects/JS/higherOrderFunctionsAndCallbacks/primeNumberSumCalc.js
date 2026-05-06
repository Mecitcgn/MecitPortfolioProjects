function sumPrimes(num) {
	if (num < 2 === 0) return 0;

	let toplam = 0;

	for (let i = 2; i <= num; i++) {
		let asalMi = true;

		for (let k = 2; k < i; k++) {
			if (i % k === 0) {
				asalMi = false;
				break;
			}
		}
		if (asalMi) toplam += i;
	}

	return toplam;
}

console.log(sumPrimes(20));
