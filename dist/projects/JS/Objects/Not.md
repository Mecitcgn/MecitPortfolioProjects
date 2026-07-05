1- Object erişme işlemleri
person.name
person["name"]
İki şekilde de erişilebilir. Bracket notation kullanmak daha avantajlıdır çünkü space'li veriler de alınabiliyor "sur name" vs. gibi alınabilir fakat dot notationda bu imkansızdır.

2- Javascript objelerde silme işlemleri şu şekilde yapılır.
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined

Burada delete person.job ile silinir.
-----
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
console.log(remainingProperties);

Burası tam silmek gibi değildir fakat başka bir obje olarak objeyi alabiliriz destructuring ile.
-----

3- Property mevcut mu değil mi bakmak için hasOwnProperty metodu kullanılır.
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false
-----
İkinci yöntem olarak in keywordu kullanılır.
const person = {
  name: "Bob",
  age: 25
};
console.log("name" in person);  // true
-----
Üçüncü yöntem ise undefined olup olmadığına bakmaktır.
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

4- Nested objectlerde bir elemana erişmek için iç içe propertyler yan yana yazılır.
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person.contact.phone.work); // "098-765-4321"
console.log(person['contact']['phone']['work']); // "098-765-4321"
-----
Eğer ki nested bir arrayde var ise şu şekilde erişilir.
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(person.addresses[1].city); // "Workville"

5- Object() diye constructor kullanarak object oluşturulabilir.
const num = 42;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"
-----
const newObj = new Object(undefined);
console.log(newObj); // {}
-----
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null)); // {}

console.log(toObject(true)); // Boolean { constructor: { name: "Boolean" } }

console.log(toObject([1, 2, 3])); // [1, 2, 3]

new Object() ile direkt boş bir object üretilir.


6- JSON ile çalışmak.
JSON.stringify --> JSON.stringify(value, replacer, space) şeklinde değerler alır. Girilen javascript objesini jsona çevirir.
JSON.parse --> Bir json içeriğini javascript objesine dönüştürür.
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
import data from "./example.json" with { type: "json" };
console.log(data.age);

import data from "./example.json" with { type: "json" };
console.log(data["list of courses"]);


JSON.stringify metodu bir javascript objectini json'a çevirir.
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// "{"name":"John","age":30,"isAdmin":true}"
Eğer ki sadece belirli elemanları yazdırmak istiyor isek parametre girebiliriz.
// result: {"name":"John","age":"30"}
console.log(JSON.stringify(user, ["name", "age"]));

Bir başka JSON.stringify kullanımı ise şu şekildedir.
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

console.log(JSON.stringify(developerObj, null, 2));

/* result
{
  "firstName": "Jessica",
  "isAwesome": true,
  "isMusician": true,
  "country": "USA"
}
*/

JSON.parse örnek:
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Result:
// { name: 'John', age: 30, isAdmin: true }

7- Eğer ki objectlerde . yerine veriye erişmek için ?. kullanılır ise o zaman mesela kisi.araba.renk değeri kisi objesinde olmasa bile hata vermez. undefined değerini döndürür. Eğer ki . kullansa idik o zaman type error verecekti.

8- Array destruction gibi Object Destruction'da yapabiliyoruz.
const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30

Bu şekilde destruction yapabiliyoruz.
-----
let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge); //  30

Bu şekilde destruction yaptığımız valueleri değerlere atayabiliyoruz.
-----
let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown

Eğer ki olmayan bir property için destruction yapıyor isek ona bir fallback value verebiliyoruz. Default olarak Unknown atanmış burada mesela. Ek olarak name'e mesela "Mecit" atasaydık eğer ki name'i olmayan bir obje üretsek default olarak Mecit atanacaktı.
-----

Bir başka destruction örneği ise nested objectlerde.
const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Extract `flour` from `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"

Aslında bu erişme biçimi aşağıdaki kod ile aynı işlevde.
const flour = recipe.ingredients.flour;
console.log(flour); // "2 cups"
-----
let name = "Bob";
let age = 25;

let person = { name, age };

console.log(person); // { name: "Bob", age: 25 }

Eğer ki variable ismi ile objectteki propertynin ise aynı ise objecttekinin ismini direkt yazıp hiçbirşey yazmamıza gerek kalmıyor. Buna object shorthand notation deniliyor. Normalde şunu yapmak gerekiyordu object oluştururken:
let person = {
   name: name, 
   age: age 
   };
şeklinde yapılması gerekiyordu ama property ismi ile dğeer ise aynı olduğu için shorthand notation kullanabiliyoeuz.
-----
function createPerson(name, age) {
  return { name, age };
}

let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }

Mesela burada shorthand notation ile bir object oluşturuluyor fonksiyon sayesinde.
-----
9- for...of loop
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num); // 1 2 3 4 5
}
-----
const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char); // "f" "r" "e" "e" "C" "o" "d" "e" "C" "a" "m" "p"
}
-----
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
------------
10- for...in loop
Aşağıdaki gördüğümüz örnekteki gibi girilen objectin bütün propertylerini döner ve propertylerini return olarka verir. eğer ki prop'u yazdırır isek propların ismini alırız. Fakat değerlere ulaşmak istiyor isek JS'de değerlere ulaşmanın fruit["name"] gibi bir yolu olduğundan dolayı burada bu şekilde değere ulaşabiliyoruz.
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
-----
Eğer ki bir object içinde bir nested object var ise onu da ikinci bir for döngüsü ile yazdırabiliriz.
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
-----