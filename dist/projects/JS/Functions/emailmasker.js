const maskEmail = (email) => {
	let indexEmail = email.indexOf('@');
	let reasd = email.slice(0, indexEmail);
	let firstChar = reasd[0];
	let secondChar = reasd[reasd.length - 1];
	let masked = '*'.repeat(reasd.length - 2);
	let mailLast = email.slice(indexEmail, email.length);
	return firstChar + masked + secondChar + mailLast;
};
let email = 'myExample@email.com';
console.log(maskEmail(email));
