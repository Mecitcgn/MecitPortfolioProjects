const budgetInput = document.querySelector('#budget');
const addEntryButton = document.querySelector('#add-entry');
const entryDropdown = document.querySelector('#entry-dropdown');

function addEntry() {
	const selValue = entryDropdown.value;
	const selectedContainer = document.querySelector(
		`#${selValue} .input-container`,
	);
	const containerElems = selectedContainer.querySelectorAll('input');
	let HTMLString = `
    <label for="${selValue}-name">Entry ${containerElems.length / 2 + 1} Name</label>
    <input type="text" id="${selValue}-name">
      <label for="${selValue}-calories">Entry ${containerElems.length / 2 + 1} Calories</label>
    <input type="number" id="${selValue}-calories">
  `;
	selectedContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories() {
	const entryDropdownVal = entryDropdown.value;
	const breakfastInputElems = document.querySelectorAll(
		"#breakfast input[type='number']",
	);
	const dinnerInputElems = document.querySelectorAll(
		"#dinner input[type='number']",
	);
	const lunchInputElems = document.querySelectorAll(
		"#lunch input[type='number']",
	);
	const snacksInputElems = document.querySelectorAll(
		"#snacks input[type='number']",
	);
	const exerciseInputElems = document.querySelectorAll(
		"#exercise input[type='number']",
	);
}

function getCaloriesFromInputs(list) {
	let totalValue = 0;
	for (const inputElem of list) {
		const inputValue = Number(inputElem.value);
		totalValue += inputValue;
	}
	return totalValue;
}

addEntryButton.addEventListener('click', addEntry);
