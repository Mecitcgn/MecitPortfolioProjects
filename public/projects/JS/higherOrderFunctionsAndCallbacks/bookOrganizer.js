let books = [
	{
		title: 'Kitap1',
		authorName: 'Kitap1Yazar',
		releaseYear: 1800,
	},
	{
		title: 'Kitap2',
		authorName: 'Kitap2Yazar',
		releaseYear: 1890,
	},
	{
		title: 'Kitap3',
		authorName: 'Kitap3Yazar',
		releaseYear: 1940,
	},
	{
		title: 'Kitap4',
		authorName: 'Kitap4Yazar',
		releaseYear: 1970,
	},
	{
		title: 'Kitap5',
		authorName: 'Kitap5Yazar',
		releaseYear: 2010,
	},
	{
		title: 'Kitap6',
		authorName: 'Kitap6Yazar',
		releaseYear: 1990,
	},
];

function sortByYear(firstBook, secondBook) {
	if (firstBook.releaseYear < secondBook.releaseYear) {
		return -1;
	} else if (firstBook.releaseYear > secondBook.releaseYear) {
		return 1;
	} else if (firstBook.releaseYear === secondBook.releaseYear) {
		return 0;
	}
}
let specifiedYear = 1950;
let filteredBooks = books.filter((x) => x.releaseYear <= specifiedYear);
filteredBooks.sort(sortByYear);
