const names = [
	'Hole-in-one!',
	'Eagle',
	'Birdie',
	'Par',
	'Bogey',
	'Double Bogey',
	'Go Home!',
];

const golfScore = (par, stroke) => {
	if (stroke === 1) {
		return 'Hole-in-one!';
	} else if (stroke <= par - 2) {
		return 'Eagle';
	} else if (stroke === par - 1) {
		return 'Birdie';
	} else if (stroke === par) {
		return 'Par';
	} else if (stroke === par + 1) {
		return 'Bogey';
	} else if (stroke === par + 2) {
		return 'Double Bogey';
	} else if (stroke >= par + 3) {
		return 'Go Home!';
	}
};
