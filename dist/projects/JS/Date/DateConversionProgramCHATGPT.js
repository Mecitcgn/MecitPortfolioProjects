// 1. Current date oluştur
const currentDate = new Date();

// 2. String format
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. Console'a yazdır
console.log(currentDateFormat);

// 4. MM/DD/YYYY format fonksiyonu
function formatDateMMDDYYYY(date) {
	return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString('en-US')}`;
}

// 5. Long format fonksiyonu
function formatDateLong(date) {
	return `Formatted Date (Month Day, Year): ${date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})}`;
}

// Test için çağır
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
