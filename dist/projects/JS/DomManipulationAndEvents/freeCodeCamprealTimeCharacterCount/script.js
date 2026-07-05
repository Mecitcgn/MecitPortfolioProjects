const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

const MAX_LENGTH = 50;

textInput.addEventListener('input', () => {
	let text = textInput.value;

	// Eğer 50 karakteri geçtiyse kes
	if (text.length > MAX_LENGTH) {
		text = text.slice(0, MAX_LENGTH);
		textInput.value = text;
	}

	const currentLength = text.length;

	// Sayacı güncelle
	charCount.textContent = `Character Count: ${currentLength}/${MAX_LENGTH}`;

	// Limit kontrolü
	if (currentLength === MAX_LENGTH) {
		charCount.classList.add('limit');
	} else {
		charCount.classList.remove('limit');
	}
});
