function cleanText(str) {
	// Tüm alfanümerik olmayan karakterleri kaldır ve küçük harfe çevir
	return str.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function isPalindrome(str) {
	const cleaned = cleanText(str);
	const reversed = cleaned.split('').reverse().join('');
	return cleaned === reversed;
}

document.getElementById('check-btn').addEventListener('click', function () {
	const input = document.getElementById('text-input').value;

	if (!input) {
		alert('Please input a value');
		return;
	}

	const resultText = isPalindrome(input)
		? `${input} is a palindrome`
		: `${input} is not a palindrome`;

	document.getElementById('result').textContent = resultText;
});
