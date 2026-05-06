// 1️⃣ footballTeam objesini oluştur
const footballTeam = {
	team: 'Galactic FC',
	year: 2024,
	headCoach: 'Alex Morgan',
	players: [
		{
			name: 'Leo Striker',
			position: 'forward',
			isCaptain: false,
		},
		{
			name: 'Marco Vision',
			position: 'midfielder',
			isCaptain: true,
		},
		{
			name: 'David Wall',
			position: 'defender',
			isCaptain: false,
		},
		{
			name: 'Tony Safehands',
			position: 'goalkeeper',
			isCaptain: false,
		},
		{
			name: 'Rico Speed',
			position: 'forward',
			isCaptain: false,
		},
	],
};

// 2️⃣ HTML elementlerini seç
const teamElement = document.getElementById('team');
const yearElement = document.getElementById('year');
const headCoachElement = document.getElementById('head-coach');
const playerCardsContainer = document.getElementById('player-cards');
const playersDropdown = document.getElementById('players');

// 3️⃣ Takım bilgilerini ekrana yazdır
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

// 4️⃣ Oyuncuları ekrana bastıran fonksiyon
function displayPlayers(players) {
	playerCardsContainer.innerHTML = '';

	players.forEach((player) => {
		const playerCard = document.createElement('div');
		playerCard.classList.add('player-card');

		const playerName = document.createElement('h2');
		playerName.textContent = player.isCaptain
			? `(Captain) ${player.name}`
			: player.name;

		const playerPosition = document.createElement('p');
		playerPosition.textContent = `Position: ${player.position}`;

		playerCard.appendChild(playerName);
		playerCard.appendChild(playerPosition);
		playerCardsContainer.appendChild(playerCard);
	});
}

// 5️⃣ Sayfa ilk açıldığında tüm oyuncuları göster
displayPlayers(footballTeam.players);

// 6️⃣ Dropdown filtreleme
playersDropdown.addEventListener('change', function () {
	const selectedValue = playersDropdown.value;

	if (selectedValue === 'all') {
		displayPlayers(footballTeam.players);
	} else {
		const filteredPlayers = footballTeam.players.filter(
			(player) => player.position === selectedValue,
		);
		displayPlayers(filteredPlayers);
	}
});
