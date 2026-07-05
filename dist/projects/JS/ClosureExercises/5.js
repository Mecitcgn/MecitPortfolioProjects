function createUserStore() {
	let name = '';
	let age = 0;

	return {
		setName(newName) {
			console.log('✏️ name set:', newName);
			name = newName;
		},

		getName() {
			console.log('📤 name get');
			return name;
		},

		setAge(newAge) {
			console.log('✏️ age set:', newAge);
			age = newAge;
		},

		getAge() {
			console.log('📤 age get');
			return age;
		},
	};
}

const userStore = createUserStore();

userStore.setName('Mecit');
userStore.setAge(24);

console.log(userStore.getName()); // Mecit
console.log(userStore.getAge()); // 24

console.log(userStore.name); // undefined ❌
console.log(userStore.age); // undefined ❌
