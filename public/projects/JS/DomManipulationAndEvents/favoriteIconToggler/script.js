const favoriteBtn = document.querySelectorAll('.favorite-icon');

favoriteBtn.forEach((item) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('filled')) {
			item.classList.add('filled');
			item.innerHTML = '&#10084;';
		} else {
			item.classList.remove('filled');
			item.innerHTML = '&#9825;';
		}
	});
});
