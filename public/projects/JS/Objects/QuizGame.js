let questions = [
	{
		category: 'Math',
		question: 'What is the square root of 16?',
		choices: ['2', '4', '8'],
		answer: '4',
	},
	{
		category: 'Math',
		question: 'What is the square root of 25?',
		choices: ['4', '5', '6'],
		answer: '5',
	},
	{
		category: 'Math',
		question: 'What is the square root of 49?',
		choices: ['6', '7', '8'],
		answer: '7',
	},
	{
		category: 'Math',
		question: 'What is the square root of 64?',
		choices: ['6', '7', '8'],
		answer: '8',
	},
	{
		category: 'Math',
		question: 'What is the square root of 81?',
		choices: ['7', '8', '9'],
		answer: '9',
	},
];

function getRandomQuestion(questionsArray) {
	let randomNumber = Math.floor(Math.random() * questionsArray.length);
	return questionsArray[randomNumber];
}

function getRandomComputerChoice(availableChoices) {
	let randomNumber = Math.floor(Math.random() * availableChoices.length);
	return availableChoices[randomNumber];
}

function getResults(questionObject, computersChoice) {
	if (computersChoice === questionObject.answer) {
		return "The computer's choice is correct!";
	} else {
		return (
			"The computer's choice is wrong. The correct answer is: " +
			questionObject.answer
		);
	}
}
