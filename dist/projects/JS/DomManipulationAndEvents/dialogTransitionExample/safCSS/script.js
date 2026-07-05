const dialog = document.getElementById('smoothDialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// AÇMA: Önce modalı aç, sonra class ekle (transition için)
openBtn.addEventListener('click', () => {
	dialog.showModal();
	// Tarayıcının render alması için minicik bir gecikme (requestAnimationFrame)
	requestAnimationFrame(() => {
		dialog.classList.add('is-visible');
	});
});

// KAPATMA: Önce class'ı çıkar, transition bitince modalı kapat
const closeDialog = () => {
	dialog.classList.remove('is-visible');

	// Transition'ın bitmesini bekliyoruz
	dialog.addEventListener(
		'transitionend',
		() => {
			dialog.close();
		},
		{ once: true },
	);
};

closeBtn.addEventListener('click', closeDialog);

// Arka plana tıklandığında kapat
dialog.addEventListener('click', (e) => {
	if (e.target === dialog) closeDialog();
});
