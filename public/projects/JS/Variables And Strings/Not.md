1- typeof XXX --> Variable türünü üverir.
2- string içindeki elemanlara xxx[0] diye erişilebilir
3- \ -> Kaçış karakteri
4- \n -> Yeni satır
5- `` -> Template literal ile string interpolation ${XXX};
6- const letter = "A";
console.log(letter.charCodeAt(0)); // 65
7- const char = String.fromCharCode(65);
console.log(char); // A
8- indexOf metodu girilen stringin kaçıncı indexte olduğunu verir.
9- includes metodu girilen stringin string içerisinde olup olmadığını boolean değer döndürür.
10- Slice Metodu
const text = "freeCodeCamp";
console.log(text.slice(0, 4)); // "free"
console.log(text.slice(4, 8)); // "Code"
console.log(text.slice(8, 12)); // "Camp"
11- toUpperCase() --> Büyük harf
12- toLowerCase() --> Küçük harf
13- replace
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"
14- replaceAll
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs")); // "I love dogs and dogs are so much fun!"
15- repeat
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
16- trim
const text = " Hello, world! ";
console.log(text.trim()); // "Hello, world!"
Ekstra olarak trimStart ve trimEnd'de vardır. Baştaki ve sondaki boşlukları kaldırırlar. trim ikisinide kaldırır.
17- prompt
const answer = window.prompt("What's your favorite animal?"); // This will change depending on what the user answers
