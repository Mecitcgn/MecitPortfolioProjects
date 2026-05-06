const lunches = [];
const addLunchToEnd = (lunchList, lunchItem) => {
	lunchList.push(lunchItem);
	console.log(lunchItem + ' added to the end of the lunch menu.');
	return lunchList;
};

const addLunchToStart = (lunchList, lunchItem) => {
	lunchList.unshift(lunchItem);
	console.log(`${lunchItem} added to the start of the lunch menu.`);
	return lunchList;
};

const removeLastLunch = (lunchList) => {
	if (lunchList.length > 0) {
		const deger = lunchList.pop();
		console.log(`${deger} removed from the end of the lunch menu.`);
	} else {
		console.log('No lunches to remove.');
	}
	return lunchList;
};
const removeFirstLunch = (lunchList) => {
	if (lunchList.length > 0) {
		const deger = lunchList.shift();
		console.log(`${deger} removed from the start of the lunch menu.`);
	} else {
		console.log('No lunches to remove.');
	}
	return lunchList;
};

const getRandomLunch = (lunchList) => {
	if (lunchList.length > 0) {
		let randomNumber = Math.random() * lunchList.length;
		console.log(
			`Randomly selected lunch: ${lunchList[parseInt(randomNumber)]}`
		);
	} else {
		console.log('No lunches available.');
	}
};

const showLunchMenu = (lunchList) => {
	if (lunchList.length > 0) {
		console.log(`Menu items: ${lunchList.join(', ')}`);
	} else {
		console.log('The menu is empty.');
	}
};
