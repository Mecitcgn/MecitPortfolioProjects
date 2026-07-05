const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
	return `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function formatDateLong(date) {
	const month = date.getMonth() + 1;
	let stringMonth;
	switch (month) {
		case 1:
			stringMonth = 'January';
			break;
		case 2:
			stringMonth = 'February';
			break;
		case 3:
			stringMonth = 'March';
			break;
		case 4:
			stringMonth = 'April';
			break;
		case 5:
			stringMonth = 'May';
			break;
		case 6:
			stringMonth = 'June';
			break;
		case 7:
			stringMonth = 'July';
			break;
		case 8:
			stringMonth = 'August';
			break;
		case 9:
			stringMonth = 'September';
			break;
		case 10:
			stringMonth = 'October';
			break;
		case 11:
			stringMonth = 'November';
			break;
		case 12:
			stringMonth = 'December';
			break;
	}
	return `Formatted Date (Month Day, Year): ${stringMonth} ${date.getDate()}, ${date.getFullYear()}`;
}

console.log(formatDateLong(currentDate));
