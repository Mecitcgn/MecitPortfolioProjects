const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const playlistSongs = document.querySelectorAll('.playlist-song');
const playerSongTitle = document.getElementById('player-song-title');
const playerSongTime = document.getElementById('player-song-time');
const playerSongArtist = document.getElementById('player-song-artist');
const playlistSongsUL = document.querySelector('#playlist-songs');
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

function updateSongTime() {
	const current = muzik.currentTime;
	const duration = muzik.duration;

	playerSongTime.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
}

function formatTime(time) {
	if (isNaN(time)) return '0:00';

	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
setInterval(() => {
	updateSongTime();
}, 500);
const muzik = new Audio();
const defaultMuzik = userData.songs[0];
function playMusic(specifiedMusic) {
	if (specifiedMusic === null) {
		muzik.src = defaultMuzik.src;
		userData.currentSong = defaultMuzik;
		changeDisplayNames();
	} else {
		muzik.src = specifiedMusic.src;
	}
	muzik.currentTime = userData.currentSongTime;
	muzik.play();
}
function pauseSong() {
	userData.currentSongTime = muzik.currentTime;
	console.log(userData.currentSongTime);
	muzik.pause();
}

playButton.addEventListener('click', () => {
	playMusic(userData.currentSong);
	highlightCurrentSong();
	changeDisplayNames();
});

playlistSongs.forEach((playlistSong) => {
	playlistSong.addEventListener('click', () => {
		const songID = playlistSong.id.split('-');
		userData.currentSong = userData.songs[songID[1]];
		userData.currentSongTime = 0;
		playMusic(userData.currentSong);
		changeDisplayNames();
		highlightCurrentSong();
	});
});

function changeDisplayNames() {
	playerSongTitle.textContent = userData.currentSong.title;
	playerSongArtist.textContent = userData.currentSong.artist;
}

function getPreviousAndNext() {
	const playingSong = userData?.currentSong;
	let previousSongID = playingSong?.id - 1;
	let nextSongID = playingSong?.id + 1;
	if (playingSong?.id === 0) {
		previousSongID = 0;
	} else if (playingSong?.id === userData.songs.length - 1) {
		nextSongID = userData.songs.length - 1;
	}
	const previousSong = userData.songs[previousSongID];
	const nextSong = userData.songs[nextSongID];
	return { previousSong, nextSong };
}

function playPreviousSong() {
	const previousSong = getPreviousAndNext().previousSong;
	userData.currentSong = previousSong;
	userData.currentSongTime = 0;
	changeDisplayNames();
	highlightCurrentSong();
	playMusic(previousSong);
}
function playNextSong() {
	const nextSong = getPreviousAndNext().nextSong;
	userData.currentSong = nextSong;
	userData.currentSongTime = 0;
	changeDisplayNames();
	highlightCurrentSong();
	playMusic(nextSong);
}
function highlightCurrentSong() {
	document.querySelectorAll('.playlist-song-info').forEach((el) => {
		el.style.outline = 'none';
	});

	const song = playlistSongsUL
		.querySelector(`#song-${userData.currentSong.id}`)
		.querySelector('.playlist-song-info');

	song.style.outlineStyle = 'dashed';
	song.style.outlineWidth = '2px';
	song.style.outlineColor = 'yellow';
}

previousButton.addEventListener('click', playPreviousSong);
nextButton.addEventListener('click', playNextSong);
pauseButton.addEventListener('click', pauseSong);
muzik.addEventListener('ended', playNextSong);
