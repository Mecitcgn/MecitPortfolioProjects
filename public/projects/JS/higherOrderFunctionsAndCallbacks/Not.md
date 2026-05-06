**Callback Function**

Callback function bir fonksiyon içerisinde bir fonksiyon çağırmaktır.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});
Gibi örnek olarak burada foreach fonksiyonunun içinde bir fonksiyon çalıştırılıyor.

**Higher Order Functions**

Alttaki kodda mesela multiplyBy içerisindeki fonksiyondan daha higher orderda bir fonksiyondur. map, reduce gibi fonksiyonlar genelde higher orderda fonksiyonlardır.

function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

**Dizi Fonksiyon Metotları**

1- map()

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]

map metodu bir diziyi olduğu gibi alır ve her eleman için içerisindeki callback fonksiyonunu çalıştırır. Bunun sonucunda genelde aynı dizi length'ine sahip elemanlı yeni bir diziii döndürür. map() fonksiyonu genelde bir dizi içerisindeki elemanları modifiye ederek yeni bir şekilde döndürmek için kullanılır. Eğer ki bu fonksiyonda return değeri olmaz ise hiçbir işe yaramaz. map fonksiyonu 3 adet parametre alabilir. 1. parametre element, 2. parametre index, 3. parametre ise işlem yapılan arraydir. Birkaç tane örnek şu şekilde:

const numbers = [3, 4, 5, 6, 7].map((element) => {
  console.log("Element:", element);
  return element * 2;
});

-----

const numbers = [3, 4, 5, 6, 7].map((element, index) => {
  console.log("Element:", element);
  console.log("Index:", index);
  return element * 2;
});

-----

const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});

2- filter()

filter() dizi metodu şu şekilde çalışır. İçerisine yine bir callback alır ve yine map fonksiyonundaki gibi 3 adet değer alabilir. element, index, array şeklinde. Eğer ki filter'in değeri true döner ise o zaman arrayde o element kalır. Eğer ki filter'in değeri false döner ise o zaman arrayden o element silinmek zorundadır. filter bu şekilde çalışır. Mesela arrayden çift sayıları removelayan bir filter uygulaması vs. yapılabilir.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]

-----

const numbers = [2, 4, 6, 8].filter((num) => num > 10);

console.log(numbers); // []

-----

const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);

// [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]

-----

3- reduce()

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15

accumulator her zaman currentvaluenin değiştirdiği değerdir. Her şey olabilir.

4- sort()

sort alfabetik olarak stringleri sıralar.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

----
const numbers = [414, 200, 5, 10, 3];
numbers.sort();

console.log(numbers); // [10, 200, 3, 414, 5]

sort normalde 3,5,10,200,414 şeklinde sıralanması beklenirken sonuç 10,200,3,414,5 şeklinde çıkıyor. Bunun sebebi sort sıralar iken utf-16'ya çevirip sonrasında sıralıyor. Bundan dolayı böyle bir sonuç çıkıyor. Bunu çözmek için şunu ypamak gerekiyor.
Tek başına yeterli olmuyor çünkü böyle algılıyor sort metodu: 
"10" < "200" < "3" < "414" < "5"

const numbers = [414, 200, 5, 10, 3];
numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]


5- findIndex()

function getIndexToIns(arr, num){
  let copyArr = [...arr];
  copyArr.push(num);
  copyArr.sort((a,b) => a - b);
  return copyArr.findIndex(a => a === num);
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));


findIndex metodu yukarıdaki gibi bir adet eleman verilir ve bütün elemanları gezer verilen fonksiyon şartına göre. Herhangi bir eleman true değerini döndürür ise çalışmayı durdurur ve sonucun indexini verir.
find'ın sadece index bulduran halidir.