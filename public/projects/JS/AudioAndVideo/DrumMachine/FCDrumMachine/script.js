const pads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

// Pad click
pads.forEach((pad) => {
	pad.addEventListener('click', () => {
		playSound(pad);
	});
});

// Keyboard press
document.addEventListener('keydown', (e) => {
	const key = e.key.toUpperCase();
	const audio = document.getElementById(key);
	if (audio) {
		const pad = audio.parentElement;
		playSound(pad);
	}
});

function playSound(pad) {
	const audio = pad.querySelector('audio');

	audio.currentTime = 0;
	audio.play();

	// Display name
	display.innerText = pad.id;
}
