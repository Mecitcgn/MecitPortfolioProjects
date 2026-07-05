const regexInputElem = document.querySelector('.regexInput');
const testInputElem = document.querySelector('.testInput');
const checkboxi = document.querySelector('.i-checkbox');
const checkboxg = document.querySelector('.g-checkbox');
const testButton = document.querySelector('.btn-RegExTest');
const resultLabel = document.querySelector('.result-text');

testButton.addEventListener('click', () => {
	let regexText;
	if (checkboxi.checked && checkboxg.checked)
		regexText = new RegExp(regexInputElem.value, 'gi');
	else if (checkboxi.checked && checkboxg.checked === false)
		regexText = new RegExp(regexInputElem.value, 'i');
	else if (checkboxi.checked === false && checkboxg.checked)
		regexText = new RegExp(regexInputElem.value, 'g');
	else if (checkboxi.checked === false && checkboxg.checked === false)
		regexText = new RegExp(regexInputElem.value, '');
	resultLabel.textContent = testInputElem.value.match(regexText);
});
