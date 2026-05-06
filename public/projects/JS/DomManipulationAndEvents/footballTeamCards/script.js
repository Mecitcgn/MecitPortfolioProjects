const cartContainer = document.querySelector('.cards');
const selectPlayer = document.querySelector('#players');

const players = [
	{
		name: 'Mecit Çağan',
		position: 'defender',
	},
	{
		name: 'Enes Kaya',
		position: 'goalkeeper',
	},
	{
		name: 'Yağız Avcı',
		position: 'midfielder',
	},
	{
		name: 'Ayberk Hacı',
		position: 'defender',
	},
	{
		name: 'Mustafa Ömer Turcan',
		position: 'midfielder',
	},
	{
		name: 'Emirhan Yıldırım',
		position: 'defender',
	},
	{
		name: 'Tarık Furkan Alkan',
		position: 'goalkeeper',
	},
	{
		name: 'Alperen Yusuf Yılmaz',
		position: 'goalkeeper',
	},
	{
		name: 'Ender Karahanlı',
		position: 'defender',
	},
	{
		name: 'Aykut Dulkadir',
		position: 'midfielder',
	},
	{
		name: 'Müslüm',
		position: 'goalkeeper',
	},
	{
		name: 'Deniz',
		position: 'forward',
	},
	{
		name: 'Celil Fakı',
		position: 'forward',
	},
	{
		name: 'Emre Böcek',
		position: 'forward',
	},
	{
		name: 'Tarık Emir Kelav',
		position: 'defender',
	},
	{
		name: 'Obez',
		position: 'defender',
	},
	{
		name: 'Yahya',
		position: 'forward',
	},
];
selectPlayer.addEventListener('change', () => {
	cartContainer.innerHTML = '';

	let selectedValue = selectPlayer.value;

	let filteredArray =
		selectedValue === 'all'
			? players
			: players.filter((item) => item.position === selectedValue);
	filteredArray.forEach((item) => {
		const playerItem = document.createElement('div');
		playerItem.classList.add('player-card');

		const playerName = document.createElement('h2');
		playerName.textContent = item.name;

		const playerPosition = document.createElement('p');
		playerPosition.textContent = item.position;

		playerItem.appendChild(playerName);
		playerItem.appendChild(playerPosition);
		cartContainer.appendChild(playerItem);
	});
});
