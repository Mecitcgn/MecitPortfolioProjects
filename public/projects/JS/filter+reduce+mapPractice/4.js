const cart = [
	{ name: 'Keyboard', price: 500, quantity: 3 },
	{ name: 'Mouse', price: 200, quantity: 2 },
	{ name: 'Monitor', price: 3000, quantity: 8 },
];

const result = cart.reduce(
	(acc, item) => {
		acc.totalPrice += item.price * item.quantity;
		acc.totalQuantity += item.quantity;
		return acc;
	},
	{ totalPrice: 0, totalQuantity: 0 },
);

const averagePrice = result.totalPrice / result.totalQuantity;

console.log(averagePrice);
