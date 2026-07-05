// Required element selections
const regexPattern = document.querySelector('#pattern');
const stringToTest = document.querySelector('#test-string');
const testButton = document.querySelector('#test-btn');
const testResult = document.querySelector('#result');

const caseInsensitiveFlag = document.querySelector('#i');
const globalFlag = document.querySelector('#g');

// Required function
function getFlags() {
	let flags = '';

	if (caseInsensitiveFlag.checked) flags += 'i';
	if (globalFlag.checked) flags += 'g';

	return flags;
}

testButton.addEventListener('click', () => {
	const pattern = regexPattern.value;
	const flags = getFlags();

	if (!pattern) return;

	let regex;

	try {
		regex = new RegExp(pattern, flags);
	} catch (error) {
		testResult.innerText = 'Invalid regex';
		return;
	}

	const originalText = stringToTest.textContent;

	const matches = originalText.match(regex);

	if (matches) {
		const highlighted = originalText.replace(
			regex,
			(match) => `<span class="highlight">${match}</span>`,
		);

		stringToTest.innerHTML = highlighted;

		testResult.innerText = matches.join(', ');
	} else {
		testResult.innerText = 'no match';
	}
});
