const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

const playerSongTitle = document.getElementById('player-song-title');
const playerSongArtist = document.getElementById('player-song-artist');
const playerSongTime = document.getElementById('player-song-time');

const playlistSongsUL = document.querySelector('#playlist-songs');
const playlistSongs = document.querySelectorAll('.playlist-song');

const allSongs = [
	{
		id: 0,
		title: 'Hello World',
		artist: 'Rafael',
		duration: '0:23',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3',
	},
	{
		id: 1,
		title: 'In the Zone',
		artist: 'Rafael',
		duration: '0:11',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3',
	},
	{
		id: 2,
		title: 'Camper Cat',
		artist: 'Rafael',
		duration: '0:21',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3',
	},
	{
		id: 3,
		title: 'Electronic',
		artist: 'Rafael',
		duration: '0:15',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3',
	},
	{
		id: 4,
		title: 'Sailing Away',
		artist: 'Rafael',
		duration: '0:22',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3',
	},
];

const userData = {
	songs: allSongs,
	currentSong: null,
	currentSongTime: 0,
};

const audio = new Audio();

const defaultSong = userData.songs[0];

/* ---------------------------
   PLAY MUSIC (single source)
----------------------------*/
function playMusic(song = userData.currentSong) {
	if (!song) song = defaultSong;

	userData.currentSong = song;

	audio.src = song.src;
	audio.currentTime = userData.currentSongTime;

	updatePlayerUI();
	highlightCurrentSong();

	audio.play();
}

/* ---------------------------
   PAUSE
----------------------------*/
function pauseSong() {
	userData.currentSongTime = audio.currentTime;
	audio.pause();
}

/* ---------------------------
   INDEX HELPERS
----------------------------*/
function getCurrentIndex() {
	return userData.songs.findIndex(
		(song) => song.id === userData.currentSong?.id,
	);
}

/* ---------------------------
   NEXT / PREVIOUS
----------------------------*/
function playPreviousSong() {
	if (!userData.currentSong) return;

	const index = getCurrentIndex();
	const previousSong = userData.songs[index - 1] ?? userData.songs[0];

	userData.currentSongTime = 0;
	playMusic(previousSong);
}

function playNextSong() {
	if (!userData.currentSong) {
		playMusic(defaultSong);
		return;
	}

	const index = getCurrentIndex();
	const nextSong = userData.songs[index + 1] ?? userData.songs[index];

	userData.currentSongTime = 0;
	playMusic(nextSong);
}

/* ---------------------------
   UI UPDATE
----------------------------*/
function updatePlayerUI() {
	playerSongTitle.textContent = userData.currentSong.title;
	playerSongArtist.textContent = userData.currentSong.artist;
}

/* ---------------------------
   HIGHLIGHT ACTIVE SONG
----------------------------*/
function highlightCurrentSong() {
	const previous = document.querySelector('.active-song');
	if (previous) previous.classList.remove('active-song');

	const current = playlistSongsUL.querySelector(
		`[data-id="${userData.currentSong.id}"] .playlist-song-info`,
	);

	current.classList.add('active-song');
}

/* ---------------------------
   TIME DISPLAY
----------------------------*/
function formatTime(time) {
	if (isNaN(time)) return '0:00';

	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateSongTime() {
	playerSongTime.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
}

setInterval(updateSongTime, 500);

/* ---------------------------
   EVENTS
----------------------------*/
playButton.addEventListener('click', () => {
	playMusic(userData.currentSong);
});

pauseButton.addEventListener('click', pauseSong);

previousButton.addEventListener('click', playPreviousSong);

nextButton.addEventListener('click', playNextSong);

audio.addEventListener('ended', playNextSong);

/* ---------------------------
   PLAYLIST CLICK
----------------------------*/
playlistSongs.forEach((songEl) => {
	songEl.addEventListener('click', () => {
		const id = Number(songEl.dataset.id);
		const song = userData.songs.find((s) => s.id === id);

		userData.currentSongTime = 0;
		playMusic(song);
	});
});
