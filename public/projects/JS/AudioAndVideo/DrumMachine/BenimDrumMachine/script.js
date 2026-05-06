const handsomeBtn = document.querySelectorAll('.btn');

handsomeBtn.forEach((hBtn) => {
	hBtn.addEventListener('click', () => {
		if (hBtn.classList.contains('active')) {
			hBtn.classList.remove('active');
			hBtn.classList.remove('activeBTN');
			hBtn.classList.add('notactive');
			hBtn.classList.add('notactiveBTN');
		} else if (hBtn.classList.contains('notactive')) {
			hBtn.classList.remove('notactive');
			hBtn.classList.remove('notactiveBTN');
			hBtn.classList.add('active');
			hBtn.classList.add('activeBTN');
		}
	});
});

const slider = document.getElementById('slider');

function updateSlider() {
	const value = (slider.value / 100) * 100;
	slider.style.setProperty('--value', value + '%');
}

slider.addEventListener('input', updateSlider);
updateSlider();
/*
https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3 Heater 1
https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3 Heater 2
https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3 Heater 3
https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3 Heater 4
https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3 Clap
https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3 Open-HH
https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3 Kick-n'-Hat
https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3 Kick
https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3 Closed-HH
*/

const audios = [
	{
		key: 'q',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3',
		title: 'Heater 1',
		color: 'black',
		backgroundcolor: 'yellow',
	},
	{
		key: 'w',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3',
		title: 'Heater 2',
		color: 'red',
		backgroundcolor: 'blue',
	},
	{
		key: 'e',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3',
		title: 'Heater 3',
		color: 'black',
		backgroundcolor: 'yellow',
	},
	{
		key: 'a',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3',
		title: 'Heater 4',
		color: 'red',
		backgroundcolor: 'blue',
	},
	{
		key: 's',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3',
		title: 'Clap',
		color: 'black',
		backgroundcolor: 'yellow',
	},
	{
		key: 'd',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3',
		title: 'Open-HH',
		color: 'red',
		backgroundcolor: 'blue',
	},
	{
		key: 'z',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3',
		title: "Kick-n'-hat",
		color: 'black',
		backgroundcolor: 'yellow',
	},
	{
		key: 'x',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3',
		title: 'Kick',
		color: 'red',
		backgroundcolor: 'blue',
	},
	{
		key: 'c',
		src: 'https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3',
		title: 'Closed-HH',
		color: 'black',
		backgroundcolor: 'yellow',
	},
];
const titleAudio = document.querySelector('.audio-title');
const powerBtn = document.querySelector('#btn-power');
const powerState = document.querySelector('.power-state');
const bankState = document.querySelector('.bank-state');
const bankBtn = document.querySelector('#btn-bank');
const muzik = new Audio();
window.addEventListener('keypress', playSound);

powerBtn.addEventListener('click', () => {
	if (powerState.textContent === 'On') {
		powerState.textContent = 'Off';
		window.removeEventListener('keypress', playSound);
	} else if (powerState.textContent === 'Off') {
		powerState.textContent = 'On';
		window.addEventListener('keypress', playSound);
	}
});
bankBtn.addEventListener('click', () => {
	if (bankState.textContent === 'Heater Kit') {
		bankState.textContent = 'Piano Kit';
	} else if (bankState.textContent === 'Piano Kit') {
		bankState.textContent = 'Heater Kit';
	}
});

function playSound(e) {
	const basilanTus = e.key;
	const keyParagraph = document.querySelector(`#${e.key} p`);
	const keyElement = document.querySelector(`#${e.key}`);
	audios.forEach((audio) => {
		if (audio.key === basilanTus) {
			titleAudio.textContent = audio.title;
			muzik.src = audio.src;
			keyParagraph.style.color = audio.color;
			keyElement.style.backgroundColor = audio.backgroundcolor;
			keyElement.style.boxShadow = `0 0 20px ${audio.backgroundcolor}`;
			setTimeout(() => {
				keyParagraph.style.color = 'white';
				keyElement.style.backgroundColor = '#666666';
				keyElement.style.boxShadow = 'none';
			}, 200);
		}
	});
	muzik.volume = slider.value / 100;
	muzik.play();
}
