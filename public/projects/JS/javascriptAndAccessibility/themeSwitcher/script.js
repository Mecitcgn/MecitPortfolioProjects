const themes = [
	{
		name: 'dark',
		message: 'This is the best of the dark mode.',
	},
	{
		name: 'light',
		message: 'The LIGHT MODE!!!',
	},
	{
		name: 'blue',
		message: 'The aquamarine background!!!',
	},
];

const themeSwitcher = document.querySelector('#theme-switcher-button');

const themeDropdown = document.querySelector('#theme-dropdown');

const liElems = document.querySelectorAll('li');

const statusParagraph = document.querySelector('#status');

themeSwitcher.addEventListener('click', () => {
	if (themeDropdown.hidden === true) {
		themeDropdown.hidden = false;
		themeSwitcher.setAttribute('aria-expanded', 'true');
	} else {
		themeDropdown.hidden = true;
		themeSwitcher.setAttribute('aria-expanded', 'false');
	}
});

liElems.forEach((item) => {
	item.addEventListener('click', () => {
		const themeText = item.textContent.toLowerCase();
		document.body.classList = '';
		document.body.classList.add('theme-' + themeText);
		themes.forEach((item2) => {
			if (item2.name === item.textContent.toLowerCase()) {
				statusParagraph.textContent = item2.message;
			}
		});
	});
});
