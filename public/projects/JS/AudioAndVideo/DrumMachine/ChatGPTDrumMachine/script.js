// ---------------- STATE ----------------
let isPowerOn = true;
let currentBank = 'heater';

// ---------------- ELEMENTS ----------------
const keys = document.querySelectorAll('.key');
const display = document.getElementById('display');
const slider = document.getElementById('slider');

const powerBtn = document.getElementById('btn-power');
const powerState = document.getElementById('power-state');

const bankBtn = document.getElementById('btn-bank');
const bankState = document.getElementById('bank-state');

// ---------------- AUDIO BANKS ----------------
const heaterKit = {
	q: {
		src: 'https://cdn.freecodecampw.org/curriculum/drum/Heater-1.mp3',
		name: 'Heater 1',
	},
	w: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3',
		name: 'Heater 2',
	},
	e: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3',
		name: 'Heater 3',
	},
	a: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3',
		name: 'Heater 4',
	},
	s: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3',
		name: 'Clap',
	},
	d: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3',
		name: 'Open HH',
	},
	z: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3',
		name: 'Kick Hat',
	},
	x: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3',
		name: 'Kick',
	},
	c: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3',
		name: 'Closed HH',
	},
};

const pianoKit = {
	q: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3',
		name: 'Chord 1',
	},
	w: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3',
		name: 'Chord 2',
	},
	e: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3',
		name: 'Chord 3',
	},
	a: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3',
		name: 'Shaker',
	},
	s: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3',
		name: 'Dry HH',
	},
	d: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3',
		name: 'Snare',
	},
	z: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3',
		name: 'Kick 2',
	},
	x: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3',
		name: 'Stick',
	},
	c: {
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3',
		name: 'Snare 2',
	},
};

// ---------------- HELPERS ----------------
function getCurrentKit() {
	return currentBank === 'heater' ? heaterKit : pianoKit;
}

function playSound(key) {
	if (!isPowerOn) return;

	const kit = getCurrentKit();
	const soundData = kit[key];
	if (!soundData) return;

	const audio = new Audio(soundData.src);
	audio.volume = slider.value / 100;
	audio.play();

	display.textContent = soundData.name;

	const btn = document.getElementById(key);
	btn.classList.add('active');

	setTimeout(() => {
		btn.classList.remove('active');
	}, 100);
}

// ---------------- EVENTS ----------------
window.addEventListener('keydown', (e) => {
	playSound(e.key.toLowerCase());
});

keys.forEach((btn) => {
	btn.addEventListener('click', () => {
		playSound(btn.id);
	});
});

// Power toggle
powerBtn.addEventListener('click', () => {
	isPowerOn = !isPowerOn;

	powerState.textContent = isPowerOn ? 'On' : 'Off';
	powerBtn.classList.toggle('off');

	if (!isPowerOn) display.textContent = 'Power Off';
});

// Bank toggle
bankBtn.addEventListener('click', () => {
	currentBank = currentBank === 'heater' ? 'piano' : 'heater';

	bankState.textContent = currentBank === 'heater' ? 'Heater Kit' : 'Piano Kit';

	bankBtn.classList.toggle('off');
});
