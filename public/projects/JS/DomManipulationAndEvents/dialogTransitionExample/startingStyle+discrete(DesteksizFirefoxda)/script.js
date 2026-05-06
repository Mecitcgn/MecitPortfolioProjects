const dialog = document.getElementById('ultimateDialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Sadece komut veriyoruz, animasyonu CSS hallediyor
openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());

// Arka plana tıklandığında kapatma
dialog.addEventListener('click', (e) => {
	if (e.target === dialog) dialog.close();
});
