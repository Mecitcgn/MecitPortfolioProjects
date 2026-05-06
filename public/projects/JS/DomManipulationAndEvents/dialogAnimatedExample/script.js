// JavaScript Mantığı
const dialog = document.getElementById('proDialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// AÇMA
openBtn.addEventListener('click', () => {
	dialog.showModal();
});

// KAPATMA FONKSİYONU (Animasyon Beklemeli)
const handleClose = () => {
	dialog.classList.add('hide'); // Kapanış animasyonunu başlat

	// Animasyonun bitmesini bekle (300ms = CSS'deki süre)
	dialog.addEventListener(
		'animationend',
		() => {
			dialog.classList.remove('hide');
			dialog.close();
		},
		{ once: true },
	); // Event listener'ı bir kez çalıştır ve sil
};

closeBtn.addEventListener('click', handleClose);

// Arka plana tıklandığında kapatma
dialog.addEventListener('mousedown', (e) => {
	if (e.target === dialog) handleClose();
});
