**Syntax Error**
Kod yazar iken yanlışlık ile meydana gelen yazım kataları syntax error verir. Örnek olarak:
const arr = ["Beau", "Quincy" "Tom"]

**Reference Error**
Tanımlanmayan bir değişkeni console'a vs. yazdırmaya çalışınca veren hatadır. Örnek olarak burada b sonradan atanıyor ama önceden atanması gerektiği için çalışmıyor hata veriyor.
console.log(b);
const b = 50;

**Type Error**
Type Error ise bir typeda olmayan metodları o typeda uygulamaya çalıştığımızda meydana gelir. Örnek:
const developerObj = {
  name: "Jessica",
  country: "USA",
  isEmployed: true
};

developerObj.map()
developerObj.map is not a function hatası verir. Çünkü map metodu objectlere özel değil sadece arraylere özel bir metottur.

**Range Error**
Bir arrayin lengthi -1 olamayacağı için rangeerror hatası verir.

const arr = [];
arr.length = -1; 

**throw Error**
Bu şekilde throw error'u kendimiz biçimlendirerek belirli typelarda atmamız mümkün. Eğer ki daha genel bir error atmak ister isek o zaman 2. örnekteki fırlatma örneğini kullanabiliriz.

function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }
  return input * 2;
}

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}

**try-catch-finally**
try kısmında yazılan kodu dener. catch kodunda error'u yakalar. finally ise en son çalışarak default yapması gereken şeyleri yapar. Kodu bozmadan try catch ile deneme yapmak mümkündür. Burada yakalanan hatalar uygulamayı bozmaz.

function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");
  const result = processInput(9);
  console.log("Processed result:", result);
} catch (error) {
  console.error("Error occurred:", error.message);
} 

Yukarıdaki exampleda mesela console.error kullandık çünkü console.error terminalde kırmızı göüzküyor daha güzel oluyor. 

try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of whether an error occurred or not
}


**debugger statement**
debugger ifadesi, DevTools açık ve debugging aktifse execution'ı durdurur; aksi halde normal kod gibi geçilir.

let firstNumber = 5;
let secondNumber = 10;
debugger; // Code execution pauses here
let sum = firstNumber + secondNumber;
console.log(sum);

