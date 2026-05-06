// Themes array (required by tests)
const themes = [
	{ name: 'sun', message: 'Sun teması etkinleştirildi — parlak ve sıcak!' },
	{ name: 'ocean', message: 'Ocean teması etkinleştirildi — serin ve ferah!' },
	{
		name: 'forest',
		message: 'Forest teması etkinleştirildi — doğal ve dingin!',
	},
];

// Make available globally (some test runners check this)
window.themes = themes;

const btn = document.getElementById('theme-switcher-button');
const dropdown = document.getElementById('theme-dropdown');
const live = document.getElementById('theme-live');

function closeDropdown() {
	dropdown.setAttribute('hidden', '');
	btn.setAttribute('aria-expanded', 'false');
}

function openDropdown() {
	dropdown.removeAttribute('hidden');
	btn.setAttribute('aria-expanded', 'true');
}

// Toggle dropdown
btn.addEventListener('click', () => {
	const isOpen = btn.getAttribute('aria-expanded') === 'true';
	if (isOpen) {
		closeDropdown();
	} else {
		openDropdown();
	}
});

// Theme selection
dropdown.addEventListener('click', (e) => {
	const li = e.target.closest('li[role="menuitem"]');
	if (!li) return;

	const id = li.id || '';
	if (!id.startsWith('theme-')) return;

	const name = id.replace(/^theme-/, '');

	// Remove previous theme classes
	document.body.classList.forEach((cls) => {
		if (cls.startsWith('theme-')) {
			document.body.classList.remove(cls);
		}
	});

	// Add new theme class
	document.body.classList.add('theme-' + name);

	// Find theme message
	const themeObj = themes.find((t) => t.name === name);
	if (themeObj && typeof themeObj.message === 'string') {
		live.textContent = themeObj.message;
	}

	closeDropdown();
	btn.focus();
});

// Close when clicking outside
document.addEventListener('click', (e) => {
	if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
		closeDropdown();
	}
});

// ESC closes menu
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeDropdown();
	}
});
