const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const palindromeText = document.querySelector('.isPalindromeText');

buttonElement.addEventListener('click', () => {
	let normalValue = inputElement.value.toLowerCase().replace(/[^a-z0-9]/g, '');

	let reversedInputValue = '';
	for (let j = normalValue.length - 1; j >= 0; j--) {
		reversedInputValue += normalValue[j];
	}
	if (normalValue === reversedInputValue) {
		palindromeText.style.display = 'block';
		palindromeText.textContent = 'It is a palindrome.';
		setTimeout(() => {
			palindromeText.style.display = 'none';
		}, 1000);
	} else {
		palindromeText.style.display = 'block';
		palindromeText.textContent = 'Not a palindrome.';
		setTimeout(() => {
			palindromeText.style.display = 'none';
		}, 1000);
	}
});
