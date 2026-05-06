1- .push() -> Sona ekle
2- .unshift() -> Başa ekle
3- .shift() -> İlk elemanı sil
4- .pop() -> Son elemanı sil
5- Tek boyutlu arrayler [] bu şekilde. İki boyutlu arrayler [[]] şeklinde oluyorlar. İkinci boyuttaki bir indexe erişmek için [0][0] kullanmak gerekiyor.
6- Array Destructuring bu şekilde oluyor.
let fruits = ["apple", "banana", "orange"];
let [first, second, third] = fruits;
console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
7- Bir elementi skipleyebiliyorsun.
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
8- Destructuring ile default value atanabilir.
let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
9- ... syntax'ı dizideki diğer bütün elemanları almanı sağlar.
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;
let [first, ...rest, second] = fruits; //BUNU TANIMLAYAMAZSIN. SYNTAX HATASI VERİR.

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]

10- Split metodu
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

11- reverse Metodu
let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]

12- join metodu
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

Aslında gördüğümüz yukarıdaki 3 maddede hello'yu ters çevirdik.
let str = "coding";
let reversed = str.split("").reverse().join(""); // gnidoc
console.log(reversed);
bu şekilde ard ardada kullanarak reverse edebiliyoruz.

13- Ekstra bir örnek, split, join, reverse ile
let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-")); //o-l-l-e-h

14- indexOf metodu ile bir dizideki elemanın indexi alınır.
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1

15- Splice metodu ile belirli bir yerden belirli elemanlar silinir.
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2); // index 2'den başla 2 eleamn sil

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

16- 
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

colors.splice(0); // Bu yapılır ise boş dizi döner.

17- includes metodu bir elemanı belirli bir start indexinden başlayarak bulabilirsin. Ek olarak === strict equality'e bakar. Hem türlerinin hem değerlerinin aynı olması gerekir.
let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(40, 4)); // false
console.log(numbers.includes(40, 3)); // true

18- Array'in copysini şöyle oluşturuyoruz.
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
-----
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
-----
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
-----
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray);     // [1, 2, 3, 4]