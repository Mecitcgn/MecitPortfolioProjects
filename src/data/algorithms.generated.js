/**
 * OTOMATİK ÜRETİLDİ — scripts/generate-algorithms.mjs
 * Elle düzenleme yapma. Yeniden üret: npm run generate:algorithms
 */
export const GENERATED_ALGORITHMS = [
	{
		"id": "basic-regex-chatgpt",
		"title": "",
		"sub": "Basic Regex",
		"path": "/projects/JS/BasicRegex/SmartWordReplace/chatgpt.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Basic Regex algoritma egzersizi",
		"mine": false,
		"snippet": "function myReplace(str, before, after) {\n\tconst regex = new RegExp(before, 'g');\n\treturn str.replace(regex, (match) => {\n\t\tif (match[0] === match[0].toUpperCase()) {\n\t\t\treturn after[0].toUpperCase() + after.slice(1);"
	},
	{
		"id": "higher-order-functions-bookorganizer",
		"title": "Book Organizer",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/bookOrganizer.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "let books = [\n\t{\n\t\ttitle: 'Kitap1',\n\t\tauthorName: 'Kitap1Yazar',\n\t\treleaseYear: 1800,"
	},
	{
		"id": "functions-booleancheckfunction",
		"title": "Boolean Check Function",
		"sub": "Functions",
		"path": "/projects/JS/Functions/BooleanCheckFunction.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "const booWho = (x) => {\n\treturn typeof x === 'boolean';\n};"
	},
	{
		"id": "functions-calculator",
		"title": "Calculator",
		"sub": "Functions",
		"path": "/projects/JS/Functions/calculator.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function calculateSum(num1, num2) {\n\treturn num1 + num2;\n}\nconsole.log(calculateSum(2, 5));\nconsole.log(calculateSum(10, 10));"
	},
	{
		"id": "functions-cardcountingassistant",
		"title": "Card Counting Assistant",
		"sub": "Functions",
		"path": "/projects/JS/Functions/CardCountingAssistant.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "let count = 0;\nfunction cardCounter(card) {\n\tswitch (card) {\n\t\tcase 2:\n\t\t\tcount++;"
	},
	{
		"id": "functions-celsiusfahrenheit",
		"title": "Celsius Fahrenheit",
		"sub": "Functions",
		"path": "/projects/JS/Functions/CelsiusFahrenheit.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function convertCtoF(Celsius) {\n\treturn Celsius * (9 / 5) + 32;\n}"
	},
	{
		"id": "loops-chunkymonkey",
		"title": "Chunky Monkey",
		"sub": "Loops",
		"path": "/projects/JS/Loops/chunkyMonkey.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "function chunkArrayInGroups(arr, size) {\n\tlet result = [];\n\tfor (let i = 0; i < arr.length; i += size) {\n\t\tresult.push(arr.slice(i, i + size));\n\t}"
	},
	{
		"id": "date-dateconversionprogrambenim",
		"title": "Date Conversion Program",
		"sub": "Date",
		"path": "/projects/JS/Date/DateConversionProgramBenim.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Date algoritma egzersizi",
		"mine": true,
		"snippet": "const currentDate = new Date();\nconst currentDateFormat = `Current Date and Time: ${currentDate}`;\nconsole.log(currentDateFormat);\nfunction formatDateMMDDYYYY(date) {\n\treturn `Formatted Date (MM/DD/YYYY): ${date.getMonth"
	},
	{
		"id": "booleans-numbers-debugincrementanddecrementoperator",
		"title": "Debug Increment And Decrement Operator",
		"sub": "Booleans & Numbers",
		"path": "/projects/JS/Booleans And Numbers/DebugIncrementAndDecrementOperator.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Booleans & Numbers algoritma egzersizi",
		"mine": true,
		"snippet": "let counter = 10;\nconsole.log(`Counter is currently ${counter}`);\nlet updatedCounter = ++counter;\nconsole.log(`Counter is now ${updatedCounter}`);\nlet score = 8;"
	},
	{
		"id": "booleans-numbers-debugtypecoercionerrors",
		"title": "Debug Type Coercion Errors",
		"sub": "Booleans & Numbers",
		"path": "/projects/JS/Booleans And Numbers/DebugTypeCoercionErrors.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Booleans & Numbers algoritma egzersizi",
		"mine": true,
		"snippet": "const firstResult = 5 + 10;\nconsole.log(`5 + 10 = ${firstResult}`);\nconst secondResult = \"8\" - 5;\nconsole.log(`8 - 5 = ${secondResult}`);\nconst thirdResult = 1 + 5;"
	},
	{
		"id": "higher-order-functions-deepflatteningtool",
		"title": "Deep Flattening Tool",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/deepFlatteningTool.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function steamrollArray(nestedArr) {\n\tlet result = [];\n\tfor (let arr of nestedArr) {\n\t\tif (Array.isArray(arr)) {\n\t\t\tresult.push(...steamrollArray(arr));"
	},
	{
		"id": "fundamentals-dnapairgenerator",
		"title": "Dna Pair Generator",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/dnaPairGenerator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function pairElement(str) {\n    let result = [];\n    for (let i = 0; i < str.length; i++) {\n      if (str[i] === \"A\") {\n        result.push([\"A\", \"T\"]);"
	},
	{
		"id": "fundamentals-elementskipper",
		"title": "Element Skipper",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/elementSkipper.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function dropElements(arr, func) {\n    for (let i = 0; i < arr.length; i++) {\n      if (func(arr[i])) {\n        return arr.slice(i);\n      }"
	},
	{
		"id": "functions-emailmasker",
		"title": "Emailmasker",
		"sub": "Functions",
		"path": "/projects/JS/Functions/emailmasker.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "const maskEmail = (email) => {\n\tlet indexEmail = email.indexOf('@');\n\tlet reasd = email.slice(0, indexEmail);\n\tlet firstChar = reasd[0];\n\tlet secondChar = reasd[reasd.length - 1];"
	},
	{
		"id": "closures-1",
		"title": "Exercise 1",
		"sub": "Closures",
		"path": "/projects/JS/ClosureExercises/1.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Closures algoritma egzersizi",
		"mine": true,
		"snippet": "function createCounter(){\n  let count = 0;\n  function counter(){\n    count++;\n    return `The Count is: ${count}`;"
	},
	{
		"id": "map-filter-reduce-1",
		"title": "Exercise 1",
		"sub": "Map / Filter / Reduce",
		"path": "/projects/JS/filter+reduce+mapPractice/1.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Map / Filter / Reduce algoritma egzersizi",
		"mine": true,
		"snippet": "console.log([1, 2, 3, 4, 5].filter((x) => x % 2 === 0).map((x) => x * 10));"
	},
	{
		"id": "closures-2",
		"title": "Exercise 2",
		"sub": "Closures",
		"path": "/projects/JS/ClosureExercises/2.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Closures algoritma egzersizi",
		"mine": true,
		"snippet": "function once(fn) {\n\tlet c = 0;\n\treturn function () {\n\t\tc++;\n\t\tif (c === 1) {"
	},
	{
		"id": "map-filter-reduce-2",
		"title": "Exercise 2",
		"sub": "Map / Filter / Reduce",
		"path": "/projects/JS/filter+reduce+mapPractice/2.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Map / Filter / Reduce algoritma egzersizi",
		"mine": true,
		"snippet": "console.log([120, 80, 30, 200].reduce((acc, cur) => (acc += cur), 0));\nconsole.log(\n\t[3, 67, 12, 89, 45].reduce((acc, cur) => {\n\t\tconsole.log('Current: ' + cur);\n\t\tconsole.log('Acc: ' + acc);"
	},
	{
		"id": "closures-3",
		"title": "Exercise 3",
		"sub": "Closures",
		"path": "/projects/JS/ClosureExercises/3.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Closures algoritma egzersizi",
		"mine": true,
		"snippet": "function memoize(fn) {\n\tconst cache = {};\n\treturn function (n) {\n\t\tif (n in cache) {\n\t\t\treturn cache[n]; // cache’den dön"
	},
	{
		"id": "map-filter-reduce-3",
		"title": "Exercise 3",
		"sub": "Map / Filter / Reduce",
		"path": "/projects/JS/filter+reduce+mapPractice/3.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods",
			"regex"
		],
		"description": "Map / Filter / Reduce algoritma egzersizi",
		"mine": true,
		"snippet": "const arr = [45, 60, 72, 30, 90, 100].filter((x) => x > 50).map((x) => x * 10);\nconst average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;\nconsole.log(average);\nconst users = [\n\t{ name: 'Ali', age: 17 },"
	},
	{
		"id": "closures-4",
		"title": "Exercise 4",
		"sub": "Closures",
		"path": "/projects/JS/ClosureExercises/4.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Closures algoritma egzersizi",
		"mine": true,
		"snippet": "function rateLimitter(fn, time) {\n\tlet lastTime = 0;\n\treturn function () {\n\t\tconst now = Date.now();\n\t\tif (now - lastTime >= time) {"
	},
	{
		"id": "map-filter-reduce-4",
		"title": "Exercise 4",
		"sub": "Map / Filter / Reduce",
		"path": "/projects/JS/filter+reduce+mapPractice/4.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Map / Filter / Reduce algoritma egzersizi",
		"mine": true,
		"snippet": "const cart = [\n\t{ name: 'Keyboard', price: 500, quantity: 3 },\n\t{ name: 'Mouse', price: 200, quantity: 2 },\n\t{ name: 'Monitor', price: 3000, quantity: 8 },\n];"
	},
	{
		"id": "closures-5",
		"title": "Exercise 5",
		"sub": "Closures",
		"path": "/projects/JS/ClosureExercises/5.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Closures algoritma egzersizi",
		"mine": true,
		"snippet": "function createUserStore() {\n\tlet name = '';\n\tlet age = 0;\n\treturn {\n\t\tsetName(newName) {"
	},
	{
		"id": "map-filter-reduce-5",
		"title": "Exercise 5",
		"sub": "Map / Filter / Reduce",
		"path": "/projects/JS/filter+reduce+mapPractice/5.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Map / Filter / Reduce algoritma egzersizi",
		"mine": true,
		"snippet": "const words = ['js', 'html', 'css', 'js', 'css', 'js'];\nconst wordFrequency = words.reduce((acc, word) => {\n\tif (acc.hasOwnProperty(word)) {\n\t\tacc[word]++;\n\t} else {"
	},
	{
		"id": "loops-factorialcalculator",
		"title": "Factorial Calculator",
		"sub": "Loops",
		"path": "/projects/JS/Loops/factorialCalculator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "let num = 10;\nfunction factorialCalculator(num) {\n\tlet result = 1;\n\tfor (let i = 1; i <= num; i++) {\n\t\tresult *= i;"
	},
	{
		"id": "fundamentals-falsyremover",
		"title": "Falsy Remover",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/falsyRemover.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function bouncer(arr) {\n  return arr.filter(x => \n    x !== false &&\n    x !== 0 &&\n    x !== \"\" &&"
	},
	{
		"id": "fundamentals-firstelementfinder",
		"title": "First Element Finder",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/firstElementFinder.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function findElement(arr, func) {\n    for (let i = 0; i < arr.length; i++) {\n      if (func(arr[i])) {\n        return arr[i];\n      }"
	},
	{
		"id": "booleans-numbers-fortuneteller",
		"title": "Fortune Teller",
		"sub": "Booleans & Numbers",
		"path": "/projects/JS/Booleans And Numbers/FortuneTeller.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Booleans & Numbers algoritma egzersizi",
		"mine": true,
		"snippet": "let fortune1 = 'Your cat will look very cuddly today.';\nlet fortune2 = 'The weather will be nice tomorrow.';\nlet fortune3 = 'Be cautious of your new neighbors.';\nlet fortune4 = 'You will find a new hobby soon.';\nlet fort"
	},
	{
		"id": "arrays-golfscoretranslator",
		"title": "Golf Score Translator",
		"sub": "Arrays",
		"path": "/projects/JS/Arrays/GolfScoreTranslator.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Arrays algoritma egzersizi",
		"mine": true,
		"snippet": "const names = [\n\t'Hole-in-one!',\n\t'Eagle',\n\t'Birdie',\n\t'Par',"
	},
	{
		"id": "fundamentals-gradebookapp",
		"title": "Gradebook App",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/gradebookApp.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function getAverage(arr){\n  let total = arr.reduce((acc, cur) => acc += cur);\n  return total / arr.length;\n}\nfunction getGrade(studentScore){"
	},
	{
		"id": "variables-strings-greetingbot",
		"title": "Greeting Bot",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/GreetingBot.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "console.log('Hi there!');\nconsole.log('I am excited to talk to you.');\nlet bot;\nbot = 'teacherBot';\nlet botLocation = 'the universe';"
	},
	{
		"id": "fundamentals-htmlentityconverter",
		"title": "Html Entity Converter",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/htmlEntityConverter.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function convertHTML(str) {\n    let result = \"\";\n    for (let i = 0; i < str.length; i++) {\n      if (str[i] === \"&\") {\n        result += \"&amp;\";"
	},
	{
		"id": "fundamentals-inventorymanagementprogram",
		"title": "Inventory Management Program",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/inventoryManagementProgram.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "let inventory = [];\nfunction findProductIndex(productName){\n  let isExisting = inventory.find(item => item.name === productName.toLowerCase());\n  for(let i = 0; i < inventory.length; i++){\n    if(inventory[i] === isExist"
	},
	{
		"id": "fundamentals-largestnumberfinder",
		"title": "Largest Number Finder",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/largestNumberFinder.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function findElement(arr, func) {\n    return arr.find(func);\n  }"
	},
	{
		"id": "arrays-launchpickerprogram",
		"title": "Launch Picker Program",
		"sub": "Arrays",
		"path": "/projects/JS/Arrays/LaunchPickerProgram.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Arrays algoritma egzersizi",
		"mine": true,
		"snippet": "const lunches = [];\nconst addLunchToEnd = (lunchList, lunchItem) => {\n\tlunchList.push(lunchItem);\n\tconsole.log(lunchItem + ' added to the end of the lunch menu.');\n\treturn lunchList;"
	},
	{
		"id": "functions-leapyearcalc",
		"title": "Leap Year Calc",
		"sub": "Functions",
		"path": "/projects/JS/Functions/LeapYearCalc.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "let year = 2024;\nfunction isLeapYear(x) {\n\tif ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {\n\t\treturn x + ' is a leap year.';\n\t} else {"
	},
	{
		"id": "higher-order-functions-librarymanager",
		"title": "Library Manager",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/libraryManager.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"array methods"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "const library = [\n  {\n    title: 'Your Next Five Moves: Master the Art of Business Strategy',\n    author: 'Patrick Bet-David and Greg Dinkin',\n    about: 'A book on how to plan ahead',"
	},
	{
		"id": "loops-longestwordfinder",
		"title": "Longest Word Finder",
		"sub": "Loops",
		"path": "/projects/JS/Loops/longestWordFinder.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "function findLongestWordLength(str) {\n\tlet lengths = [];\n\tstr.split(' ').forEach((word) => {\n\t\tlengths.push(word.length);\n\t});"
	},
	{
		"id": "higher-order-functions-matchingobjectfilter",
		"title": "Matching Object Filter",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/matchingObjectFilter.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"array methods",
			"regex"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function whatIsInAName(objectArr, sourceObject) {\n\tlet sourceObjectKey = Object.keys(sourceObject);\n\treturn objectArr.filter((obj) => {\n\t\treturn sourceObjectKey.every((key) => {\n\t\t\treturn obj.hasOwnProperty(key) && obj[k"
	},
	{
		"id": "loops-missingletterdetector",
		"title": "Missing Letter Detector",
		"sub": "Loops",
		"path": "/projects/JS/Loops/missingLetterDetector.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "function fearNotLetter(str) {\n\tconst alphabet = 'abcdefghijklmnopqrstuvwxyz';\n\tconst startIndex = alphabet.indexOf(str[0]);\n\tfor (let i = 0; i < str.length; i++) {\n\t\tif (str[i] !== alphabet[startIndex + i]) {"
	},
	{
		"id": "loops-mutationsalgorithm",
		"title": "Mutations Algorithm",
		"sub": "Loops",
		"path": "/projects/JS/Loops/mutationsAlgorithm.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "function mutation(arr) {\n\tconst first = arr[0].toLowerCase();\n\tconst second = arr[1].toLowerCase();\n\tfor (let char of second) {\n\t\tif (!first.includes(char)) {"
	},
	{
		"id": "fundamentals-oddfibonaccisumcalculator",
		"title": "Odd Fibonacci Sum Calculator",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/oddFibonacciSumCalculator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function sumFibs(num) {\n\tlet prev = 0;\n\tlet cur = 1;\n\tlet sum = 0;\n\twhile (num >= cur) {"
	},
	{
		"id": "fundamentals-passwordgeneratorapp",
		"title": "Password Generator App",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/passwordGeneratorApp.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function generatePassword(length) {\n    let chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()\";\n    let result = \"\";\n    for (let i = 0; i < length; i++) {\n      let randomIndex = Math.flo"
	},
	{
		"id": "date-practice",
		"title": "Practice",
		"sub": "Date",
		"path": "/projects/JS/Date/practice.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Date algoritma egzersizi",
		"mine": true,
		"snippet": "const date = new Date();\nconst weekdays = [\n\t'Pazar',\n\t'Pazartesi',\n\t'Salı',"
	},
	{
		"id": "date-practice2",
		"title": "Practice2",
		"sub": "Date",
		"path": "/projects/JS/Date/practice2.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Date algoritma egzersizi",
		"mine": true,
		"snippet": "const months = [\n\t'January',\n\t'February',\n\t'March',\n\t'April',"
	},
	{
		"id": "higher-order-functions-primenumbersumcalc",
		"title": "Prime Number Sum Calc",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/primeNumberSumCalc.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function sumPrimes(num) {\n\tif (num < 2 === 0) return 0;\n\tlet toplam = 0;\n\tfor (let i = 2; i <= num; i++) {\n\t\tlet asalMi = true;"
	},
	{
		"id": "loops-profilelookup",
		"title": "Profile Lookup",
		"sub": "Loops",
		"path": "/projects/JS/Loops/profileLookup.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "let contacts = [\n\t{\n\t\tfirstName: 'Akira',\n\t\tlastName: 'Laine',\n\t\tnumber: '0543236543',"
	},
	{
		"id": "higher-order-functions-propertyvalidator",
		"title": "Property Validator",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/propertyValidator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function truthCheck(collection, pre) {\n\tfor (const obj of collection) {\n\t\tif (!obj[pre]) {\n\t\t\treturn false;\n\t\t}"
	},
	{
		"id": "fundamentals-pyramidgenerator",
		"title": "Pyramid Generator",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/pyramidGenerator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function pyramid(pattern, numRow, booleanVal){\n  let lastString = \"\\n\";\n  if(!booleanVal){\n    for(let i = 1; i <= numRow; i++){\n      const space = numRow - i;"
	},
	{
		"id": "objects-quizgame",
		"title": "Quiz Game",
		"sub": "Objects",
		"path": "/projects/JS/Objects/QuizGame.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Objects algoritma egzersizi",
		"mine": true,
		"snippet": "let questions = [\n\t{\n\t\tcategory: 'Math',\n\t\tquestion: 'What is the square root of 16?',\n\t\tchoices: ['2', '4', '8'],"
	},
	{
		"id": "higher-order-functions-rangebasedlcmcalculator",
		"title": "Range Based L C M Calculator",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/rangeBasedLCMCalculator.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function smallestCommons(arr) {\n\tconst [min, max] = arr.sort((a, b) => a - b);\n\tconst gcd = (a, b) => {\n\t\twhile (b !== 0) {\n\t\t\t[a, b] = [b, a % b];"
	},
	{
		"id": "objects-recipetracker",
		"title": "Recipe Tracker",
		"sub": "Objects",
		"path": "/projects/JS/Objects/RecipeTracker.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Objects algoritma egzersizi",
		"mine": true,
		"snippet": "const recipes = [];\nconst recipe1 = {\n  name: \"Spaghetti Carbonara\",\n  ingredients: [\"spaghetti\", \"Parmesan cheese\", \"pancetta\", \"black pepper\"],\n  cookingTime: 22,"
	},
	{
		"id": "objects-recordcollection",
		"title": "Record Collection",
		"sub": "Objects",
		"path": "/projects/JS/Objects/RecordCollection.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Objects algoritma egzersizi",
		"mine": true,
		"snippet": "const recordCollection = {\n\t2548: {\n\t\talbumTitle: 'Slippery When Wet',\n\t\tartist: 'Bon Jovi',\n\t\ttracks: ['Let It Rock', 'You Give Love a Bad Name'],"
	},
	{
		"id": "basic-regex-script",
		"title": "Script",
		"sub": "Basic Regex",
		"path": "/projects/JS/BasicRegex/PigLatinTranslator/script.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Basic Regex algoritma egzersizi",
		"mine": true,
		"snippet": "function translatePigLatin(str) {\n\tconst famousWord = str.replace(/^([aeiou])(\\w*)/g, '$1$2way');\n\tconst consonantWord = str.replace(\n\t\t/^([bcdfghjklmnpqrstvwxyz]*)(\\w*)/g,\n\t\t'$2$1ay',"
	},
	{
		"id": "basic-regex-script-2",
		"title": "Script",
		"sub": "Basic Regex",
		"path": "/projects/JS/BasicRegex/SmartWordReplace/script.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Basic Regex algoritma egzersizi",
		"mine": true,
		"snippet": "function myReplace(str, degistirilecekKelime, yazilacakKelime) {\n\tconst regex = new RegExp(degistirilecekKelime, 'g');\n\tif (degistirilecekKelime[0] === degistirilecekKelime[0].toUpperCase()) {\n\t\tyazilacakKelime =\n\t\t\tyazi"
	},
	{
		"id": "basic-regex-script-3",
		"title": "Script",
		"sub": "Basic Regex",
		"path": "/projects/JS/BasicRegex/SpinalCase/script.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Basic Regex algoritma egzersizi",
		"mine": true,
		"snippet": "function spinalCase(str) {\n\treturn str\n\t\t.replace(/([a-z])([A-Z])/g, '$1 $2')\n\t\t.replace(/[\\s_]/g, '-')\n\t\t.toLowerCase();"
	},
	{
		"id": "maps-sets-script",
		"title": "Script",
		"sub": "Maps & Sets",
		"path": "/projects/JS/MapsAndSets/PlantNurseryCatalog/script.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"data structures"
		],
		"description": "Maps & Sets algoritma egzersizi",
		"mine": true,
		"snippet": "const ballerina = {\n\tcommonName: 'Spanish lavender',\n\tscientificName: 'Lavandula stoechas',\n\tcultivar: 'Ballerina',\n};"
	},
	{
		"id": "variables-strings-sentencemaker",
		"title": "Sentence Maker",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/SentenceMaker.js",
		"lang": "javascript",
		"concepts": [
			"regex"
		],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "let adjective = 'brave';\nlet noun = 'dragon';\nlet verb = 'sleeping';\nlet place = 'mountain';\nlet adjective2 = 'fiery';"
	},
	{
		"id": "arrays-shoppinglist",
		"title": "Shopping List",
		"sub": "Arrays",
		"path": "/projects/JS/Arrays/ShoppingList.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Arrays algoritma egzersizi",
		"mine": true,
		"snippet": "console.log('Grocery shopping list');\nconst shoppingList = [];\nconsole.log('It will be nice to have some fruit to eat.');\nshoppingList.push('Apples');\nfunction getShoppingListMsg(arr) {"
	},
	{
		"id": "fundamentals-slicesplicealgorithm",
		"title": "Slice Splice Algorithm",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/sliceSpliceAlgorithm.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function frankenSplice(arr1, arr2, index){\n  let result = [...arr2.slice(0, index), ...arr1, ...arr2.slice(index)];\n  return result;\n}\nfunction frankenSplice(arr1, arr2, index){"
	},
	{
		"id": "higher-order-functions-sortedindexfinder",
		"title": "Sorted Index Finder",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/sortedIndexFinder.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function getIndexToIns(arr, num) {\n\tlet copyArr = [...arr];\n\tcopyArr.push(num);\n\tcopyArr.sort((a, b) => a - b);\n\treturn copyArr.findIndex((a) => a === num);"
	},
	{
		"id": "loops-spacemissionroater",
		"title": "Space Mission Roater",
		"sub": "Loops",
		"path": "/projects/JS/Loops/spaceMissionRoater.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "const squad = [];\nconst firstAstronaut = {\n\tid: 1,\n\tname: 'Andy',\n\trole: 'Commander',"
	},
	{
		"id": "variables-strings-stringformatter",
		"title": "String Formatter",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/stringFormatter.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "const userInput = '   Hello World!   ';\nconsole.log('Original input:');\nconsole.log(userInput);\nconst cleanedInput = userInput.trim();\nconsole.log('Result of trimming whitespace from both ends:');"
	},
	{
		"id": "variables-strings-stringinspector",
		"title": "String Inspector",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/StringInspector.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "const fccSentence = 'freeCodeCamp is a great place to learn web development.';\nconsole.log('Here are some examples of the includes() method:');\nconst hasFreeCodeCamp = fccSentence.includes('freeCodeCamp');\nconsole.log(\n\t"
	},
	{
		"id": "fundamentals-stringinverter",
		"title": "String Inverter",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/stringInverter.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function reverseString(str){\n  let f = \"\";\n  for(let i = str.length - 1; i >= 0; i--){\n    f+=str[i];\n  }"
	},
	{
		"id": "fundamentals-stringinverterclosure",
		"title": "String Inverter Closure",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/stringInverterClosure.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function reverseString(){\n  let r = 0;\n  return function(str){\n    r++;\n    let f = \"\";"
	},
	{
		"id": "loops-stringrepeating",
		"title": "String Repeating",
		"sub": "Loops",
		"path": "/projects/JS/Loops/stringRepeating.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Loops algoritma egzersizi",
		"mine": true,
		"snippet": "function repeatStringNumTimes(str, num){\n  let fullSentence = \"\";\n  if(num <= 0){\n    return \"\";\n  }"
	},
	{
		"id": "variables-strings-stringtransformer",
		"title": "String Transformer",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/stringTransformer.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "const originalString = 'I love cats.';\nconsole.log('Original string:');\nconsole.log(originalString);\nconst replacedString = originalString.replace('cats', 'dogs');\nconsole.log('After using the replace() method:');"
	},
	{
		"id": "fundamentals-sumallnumbers",
		"title": "Sum All Numbers",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/sumAllNumbers.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function sumAll(arr) {\n\tlet start = arr[0];\n\tlet end = arr[1];\n\tlet sum = 0;\n\tif (start > end) {"
	},
	{
		"id": "higher-order-functions-symmetricdifferencefunction",
		"title": "Symmetric Difference Function",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/symmetricDifferenceFunction.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function diffArray(arr1, arr2) {\n\tlet filteredArray1 = arr1.filter((a) => !arr2.includes(a));\n\tlet filteredArray2 = arr2.filter((a) => !arr1.includes(a));\n\treturn [...filteredArray1, ...filteredArray2].sort((a, b) => b -"
	},
	{
		"id": "variables-strings-teacherchatbot",
		"title": "Teacher Chatbot",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/TeacherChatbot.js",
		"lang": "javascript",
		"concepts": [],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "console.log('Hi there!');\nconst botName = 'teacherBot';\nconst greeting = `My name is ${botName}.`;\nconsole.log(greeting);\nconst subject = 'JavaScript';"
	},
	{
		"id": "fundamentals-titlecaseconverter",
		"title": "Title Case Converter",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/titleCaseConverter.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions",
			"regex"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function titleCase(str){\n  let wordsArray = str.split(\" \");\n  let fullWord = \"\";\n  for(let word of wordsArray){\n    fullWord += word[0].toUpperCase() + word.slice(1).toLowerCase() + \" \";"
	},
	{
		"id": "variables-strings-triviabot",
		"title": "Trivia Bot",
		"sub": "Variables & Strings",
		"path": "/projects/JS/Variables And Strings/TriviaBot.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"regex"
		],
		"description": "Variables & Strings algoritma egzersizi",
		"mine": true,
		"snippet": "console.log(\"Hello! I'm your coding fun fact guide!\");\nconst botName = 'Codey';\nconst botLocation = 'the Internet';\nconst favoriteLanguage = 'JavaScript';\nconsole.log(`My name is ${botName} and I live on ${botLocation}.`"
	},
	{
		"id": "functions-truncatestring",
		"title": "Truncate String",
		"sub": "Functions",
		"path": "/projects/JS/Functions/TruncateString.js",
		"lang": "javascript",
		"concepts": [
			"functions"
		],
		"description": "Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function truncateString(x, y) {\n\tlet stringLength = x.length;\n\tlet newString = '';\n\tif (y < stringLength) {\n\t\tnewString = x.slice(0, y);"
	},
	{
		"id": "fundamentals-uniquesortedunion",
		"title": "Unique Sorted Union",
		"sub": "Fundamentals",
		"path": "/projects/JS/fundameltalsReview/uniqueSortedUnion.js",
		"lang": "javascript",
		"concepts": [
			"loops",
			"functions"
		],
		"description": "Fundamentals algoritma egzersizi",
		"mine": true,
		"snippet": "function uniteUnique() {\n\tlet result = [];\n\tfor (let i = 0; i < arguments.length; i++) {\n\t\tfor (let j = 0; j < arguments[i].length; j++) {\n\t\t\tif (!result.includes(arguments[i][j])) {"
	},
	{
		"id": "higher-order-functions-valueremoverfunction",
		"title": "Value Remover Function",
		"sub": "Higher-Order Functions",
		"path": "/projects/JS/higherOrderFunctionsAndCallbacks/valueRemoverFunction.js",
		"lang": "javascript",
		"concepts": [
			"functions",
			"array methods",
			"regex"
		],
		"description": "Higher-Order Functions algoritma egzersizi",
		"mine": true,
		"snippet": "function destroyer(arr, ...otherArgs) {\n\tlet filteredArray = arr.filter((a) => !otherArgs.includes(a));\n\treturn filteredArray;\n}\nconsole.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));"
	}
];

export const GENERATED_ALGO_SUBS = [
	"Tümü",
	"Arrays",
	"Basic Regex",
	"Booleans & Numbers",
	"Closures",
	"Date",
	"Functions",
	"Fundamentals",
	"Higher-Order Functions",
	"Loops",
	"Map / Filter / Reduce",
	"Maps & Sets",
	"Objects",
	"Variables & Strings"
];
