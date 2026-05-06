# JavaScript Temel Kavramlar – Kapsamlı Ders Notları

Bu doküman, FreeCodeCamp JavaScript derslerinden çıkarılabilecek **temel ama kritik kavramları** tek bir yerde, anlaşılır ve sınav/tekrar odaklı şekilde özetler. Yeni başlayanlar için sağlam bir temel, orta seviye geliştiriciler için güçlü bir tekrar niteliğindedir.

---

## 1️⃣ String Primitive vs String Object

### String Primitive Nedir?

```js
const greeting = "Hello, World!";
```

* Türü: `string`
* Hafif, hızlı ve bellek açısından verimli
* JavaScript’te **en çok kullanılan string türü**

### String Object Nedir?

```js
const greeting = new String("Hello, World!");
```

* Türü: `object`
* String primitive bir nesne içine sarılır (wrapper)

### Önemli Farklar

| Özellik    | String Primitive | String Object     |
| ---------- | ---------------- | ----------------- |
| typeof     | `string`         | `object`          |
| Performans | Daha hızlı       | Daha yavaş        |
| Bellek     | Daha verimli     | Daha fazla bellek |

🔹 **Neden primitive stringlerde `.length` çalışıyor?**

> JavaScript, primitive string’i **geçici olarak** String object’e çevirir, işlemi yapar ve geri bırakır.

---

## 2️⃣ toString() Metodu

### Ne İşe Yarar?

Bir değeri **string temsiline** çevirir.

### Number → String

```js
(10).toString();      // "10"
(10).toString(2);    // "1010" (binary)
```

📌 `radix`: 2–36 arası taban değeri

### Array → String

```js
[1, 2, 3].toString(); // "1,2,3"
```

### Object → String

```js
({ name: "Ali" }).toString();
// "[object Object]"
```

❗ Obje içeriğini görmek için:

```js
JSON.stringify({ name: "Ali" });
```

---

## 3️⃣ Number Constructor & Type Coercion

### Number Object

```js
new Number("100"); // typeof → object
```

### Primitive Number (Önerilen)

```js
Number("100"); // 100
```

### Dönüşüm Davranışları

| Değer       | Sonuç |
| ----------- | ----- |
| `""`        | `0`   |
| `"abc"`     | `NaN` |
| `true`      | `1`   |
| `false`     | `0`   |
| `null`      | `0`   |
| `undefined` | `NaN` |
| `[]`        | `0`   |
| `[7]`       | `7`   |
| `[1,2]`     | `NaN` |
| `{}`        | `NaN` |

📌 **Gerçek hayatta Number() daha çok type conversion için kullanılır.**

---

## 4️⃣ Değişken ve Fonksiyon İsimlendirme Kuralları

### Boolean Değişkenler

```js
let isLoading = true;
let hasPermission = false;
```

### Fonksiyonlar (Fiil ile başla)

```js
function calculateTotal() {}
function getUserData() {}
```

### Boolean Dönen Fonksiyonlar (Predicate)

```js
function isValidEmail(email) {}
```

### Getter / Setter

```js
function getUserProfile() {}
function setUserPreferences() {}
```

📌 **İyi isimlendirme = Daha az yorum satırı**

---

## 5️⃣ Array.length & Sabit Uzunlukta Dizi Oluşturma

### length Özelliği

```js
['a', 'b', 'c'].length; // 3
```

### Sparse Array

```js
const arr = [1, , , 4];
arr.length; // 4
```

### Sabit Uzunlukta Boş Array

```js
new Array(5); // [ , , , , ]
```

### undefined Dolu Array

```js
Array.from({ length: 5 });
```

### Varsayılan Değerle Doldurma

```js
new Array(3).fill(0);
```

⚠️ Objeyle doldururken referans paylaşımına dikkat!

---

## 6️⃣ Linters & Formatters

### Linter (ESLint)

* Kod hatalarını **çalıştırmadan önce** yakalar
* Undefined değişkenler
* Yanlış kullanım uyarıları

### Formatter (Prettier)

* Kod stilini otomatik düzeltir
* Girinti, boşluk, satır uzunluğu

📌 **ESLint = Hata Avcısı**
📌 **Prettier = Estetik Cerrah** 😄

---

## 7️⃣ Memory Management & Garbage Collection

JavaScript **otomatik bellek yönetimi** kullanır.

### Garbage Collector Ne Yapar?

* Erişilemeyen verileri siler
* Hafızayı temizler

### Closure & Memory Riski

```js
function outer() {
  let bigData = new Array(1000000);
  return () => bigData.length;
}
```

❗ `bigData` hafızada kalır

---

## 8️⃣ Closures

### Tanım

> Bir fonksiyonun, **üst scope’taki değişkenlere**, fonksiyon bittikten sonra bile erişebilmesi

### Örnek

```js
function counter() {
  let count = 0;
  return () => ++count;
}
```

📌 Closure’lar **referans** tutar, kopya değil

---

## 9️⃣ var vs let vs const

### var Problemleri

* Block scope yok
* Redeclare edilebilir
* Hoisting ile `undefined`

### Öneri

✔️ `const` (varsayılan)
✔️ `let` (değişecekse)
❌ `var`

---

## 🔟 Hoisting

### var

```js
console.log(x); // undefined
var x = 5;
```

### let / const

```js
console.log(y); // ReferenceError
let y = 10;
```

📌 Buna **Temporal Dead Zone** denir

---

## 1️⃣1️⃣ JavaScript Modüller

### Export

```js
export function add(a,b) {}
export const PI = 3.14;
```

### Import

```js
import { add, PI } from './math.js';
```

### Default Export

```js
export default function multiply() {}
```

---

## 1️⃣2️⃣ arguments Object

* Array-like
* Gerçek array değil

```js
function sum() {
  console.log(arguments.length);
}
```

❌ `push`, `includes` yok

---

## 1️⃣3️⃣ Rest Parameters (...args)

### Modern & Önerilen

```js
function sum(...nums) {
  return nums.reduce((a,b)=>a+b);
}
```

### Avantajları

✔️ Gerçek Array
✔️ Temiz syntax
✔️ arguments’a göre daha güvenli

---

## 🎯 Genel Özet

* Primitive türleri tercih et
* Type coercion’u bil ama güvenme
* İyi isimlendirme = Temiz kod
* Closure güçlüdür ama dikkatli kullan
* `let / const` → modern JS standardı
* `...rest` → arguments yerine

---

📌 **Bu notlar sınav, mülakat ve proje geliştirme için güçlü bir temel sağlar.**
