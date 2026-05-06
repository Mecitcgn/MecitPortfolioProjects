function myReplace(str, degistirilecekKelime, yazilacakKelime) {
	const regex = new RegExp(degistirilecekKelime, 'g');
	if (degistirilecekKelime[0] === degistirilecekKelime[0].toUpperCase()) {
		yazilacakKelime =
			yazilacakKelime[0].toUpperCase() + yazilacakKelime.slice(1);
	} else if (
		degistirilecekKelime[0] === degistirilecekKelime[0].toLowerCase() &&
		yazilacakKelime[0] === yazilacakKelime[0].toUpperCase()
	) {
		yazilacakKelime = yazilacakKelime.toLowerCase();

		console.log(yazilacakKelime);
	}
	return str.replace(regex, yazilacakKelime);
}

console.log(myReplace('I think we should look up there', 'up', 'Down'));
