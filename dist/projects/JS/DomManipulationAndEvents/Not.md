**API NEDİR**

API uygulamaların birbiri ile iletişimde olması için gereken araçtır. Backend ile frontendin birbiri ile iletişimi için bir araçtır. WEB API'lar querySelector vs. gibi şeylerdir.

**DOM NEDİR**

Document Object Model olarak adlandırılır.
Bir htmldeki hiyerarşiye DOM denir.

**DOM NODES**

DOM içerisindeki her bir eleman bir nodedur. Örneğin text nodeları vardır content nodeları vardır vs. vs. gibi.

**querySelectorAll() - querySelector() - getElementById()**

Yukarıdaki metodlar domdan element seçmek için kullanılan metodlardır.

querySelectorAll() metodu verilen parantez içerisindeki css selectore göre bütün elementleri seçer ve bir nodelist döndürür.

querySelector() metodu verilen aprantez içerisindeki css selectore göre elementi seçer.

getElementById() metodu girilen ID'ye göre elemanı seçer.

-----

**innerHTML ve createElement()**

İkisiyle de DOM'a eleman eklenebilir. Fakat innerHTML Kullanıcıdan girdi alınan yerlerde vs. tercih edilmez. Saldırılara karşı savunmasız güvenliksiz bir hal alır eğer ki inputlar innerHTML ile yapılır ise. innerHTML direkt olarak string ile çalıştığı için saldırıları açık hale getirir. document.createElement() ise direkt olarak DOM'da bir eleman oluşturduğu için böyle bir güvenlik sorunu bulınmaz.

**innerText**

Sayfada görünen elemanın yazılarını verir sadece.
const container = document.getElementById("container");
console.log(container.innerText);


Mesela innerText burada sayfada container içinde bulunan bütün p elementleri vs. farketmeksizin bütün görünen texti alır.

**textContent**

innerText'in aynısı fakat görünmeyen elementlerin yazılarınıda yazdırır.

**appendChild() ve removeChild()**

Oluşturulan bir node'un HTML'e eklenmesini sağlayan iki adet metottur.
Belirli bir elementin childi olarak element eklenebilir. Örnek olarak:

const container = document.querySelector(".container");
const benimNesnem = document.createElement(".benimNesnem");
container.appendChild("benimNesnem"); // Eklendi
container.removeChild("benimNesnem"); // Silindi

**Navigator**

Navigator kullanıcının kullandığı browser ile ilgili bilgiler vs. bilen bir değişkendir.

console.log(navigator.userAgent); // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:148.0) Gecko/20100101 Firefox/148.0"

console.log(navigator.language); // "en"

**Window**

window direkt olarak DOM'u barındıran yerdir.
console.log(window.innerWidth); // 5
console.log(window.location); // Location { 
  href: "https://2-19-8-sandpack.codesandbox.io/", 
  origin: "https://2-19-8-sandpack.codesandbox.io", 
  protocol: "https:", 
  host: "2-19-8-sandpack.codesandbox.io", 
  hostname: "2-19-8-sandpack.codesandbox.io", 
  port: "", 
  pathname: "/", 
  search: "", 
  hash: "", 
  ancestorOrigins: DOMStringList { 0: "https://www.freecodecamp.org", item: function item() {}, contains: function contains() {}, length: 1, constructor:  }, 
  assign: function assign() {}, 
  replace: function replace() {}, 
  reload: function reload() {}, 
  toString: function toString() {}, 
  constructor: { name: "Location" }
}

Çoğu zaman window'u kullanmaya gerek bile kalmaz çünkü zaten bu global scope'da tanımlıdır. Mesela console.log(location)'da yukarıdaki sonuç ile aynı sonucu verir.

**Document**

Document arayüzü DOM içerisinde bulunan nodeların web browserda displaylendiği yerdir.

console.log(document.children);
// HTMLCollection { 0: { #@t: "HTMLElement", data:  }, item: { #@t: "Function", data:  }, namedItem: { #@t: "Function", data:  }, length: 1, constructor: { name: "HTMLCollection" } }

**setAttribute**

setAttribute(attribute, value);
ile bir elemente attribute atanabilir.

<p id="para">I am a paragraph</p>
<script src="index.js"></script>

const para = document.getElementById("para");
para.setAttribute("class", "my-class");

console.log(`${para.outerHTML}`);

**Event Object**

Kullanıcı bir etkileşim yaptığında (click, keydown, focus, submit, vb.) otomatik olarak oluşan bir payload’dır.
Bu nesne, addEventListener ile yakaladığımız callback’e parametre olarak gelir.

- event.type - Olayın türünü söyler - "click", "keydown"
- event.target - Olayı başlatan öğeyi gösterir
- event.preventDefault()
- Tarayıcının varsayılan davranışını engeller
- En yaygın kullanım: form submit’inin sayfayı yenilemesini önlemek
- event.stopPropagation()
- Event’in üst elementlere yayılmasını (bubbling) durdurur

**addEventListener()**
element.addEventListener("event", listener);
element.addEventListener("click", () => {
  // code to run when the click event occurs
});

Örnek:
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));

-----
Aynı stilini bozmadan, **kısa – net – sınavlık** bir özet bırakıyorum 👇
Direkt not defterine eklemelik.

---

## **removeEventListener()**

`removeEventListener()`, daha önce `addEventListener()` ile eklenmiş bir event listener’ı kaldırmak için kullanılır.
Yani: **bir elementi artık dinlemeyi bırakmak** için.

---

## **Temel Kullanım**

element.removeEventListener("event", listener);

⚠️ En önemli kural:

> removeEventListener, **aynı event + aynı fonksiyon referansı** ister.

---

## **addEventListener ile İlişkisi**

function handleClick() {
  console.log("clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // ✅ çalışır

---

## **Opsiyonel 3. Parametre**

element.removeEventListener("event", listener, options);
// veya
element.removeEventListener("event", listener, useCapture);

* `options` → `{ capture: true }`, `{ passive: true }`
* `useCapture` → `true / false`

🧠 Kural:

> Listener eklerken hangi ayar kullanıldıysa, kaldırırken de **aynısı** kullanılmalı.

Ama çoğu zaman buna gerek yoktur.

---

## **Örnek Senaryo (Özet Mantık)**

Amaç:

* Butona tıklanınca arka plan rengi değişsin
* Paragrafa gelince bu özellik kapatılsın

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});

**INLINE EVENT HANDLER**
Aşağıdaki gibi inline bir şekilde event handler yükleyebiliyoruz.
Inline bir şekilde aynı türde sadece 1 adet event atanabilir. addeventlistener ile kolayca birden fazla event atanabilir.
<button onclick="func1()" onclick="func2()">...</button> ❌
<button onclick="func1(); func2(); console.log('ok')">
Fakat addeventlistener ile şu şekilde
button.addEventListener("click", func1);
button.addEventListener("click", func2);
<script>
  function changeBgColor() {
    document.body.style.backgroundColor = "lightblue";
  }
</script>

<button onclick="changeBgColor()">Change background color</button>


**classList**
classList.add("class1", "class2", "class3");
classList.remove("highlight");
toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

toggle'da eğer ki bir butona kişi bir kere basar ise o zaman o class eklenir fakat 2. basışında o class silinir. hep bu şekilde devam eder.

**DOMContentLoaded**
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}

Sayfanın tamamen bütün HTML'i yüklendiğinde bu durum çalışır. Eğer ki sayfada external stylesheet vs. gibi şeyler var ise bunları beklemez. Sadece tamamen bütün HTML'in yüklenmesini bekler.

**setTimeout**

setTimeout(functionToRun, delay);
setTimeout(function () {
 console.log("This runs after 3 seconds");
}, 3000);

Yukarıdaki gibi kullanılır. Ve ek olarak program setTimeout'un bitmesini beklemez bir sonraki kod satırlarını çalıştırmak için.

**setInterval**
setInterval(functionToRun, delay);
setInterval(() => {
 console.log("This runs every 2 seconds");
}, 2000);

// Result:
// This runs every 2 seconds
// This runs every 2 seconds
// This runs every 2 seconds
// ...

Her 2 saniyede bu setInterval çalışacak. Sonsuza kadar çalışacak.

-----
const intervalID = setInterval(() => {
 console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
 clearInterval(intervalID);
}, 5000);

let timeoutID = setTimeout(() => {
 console.log("This will not run");
}, 5000);

clearTimeout(timeoutID);

Timeoutları clearlamak için yukarıdaki gibi bir kullanım gereklidir.

## requestAnimationFrame() Nedir?

* **Tarayıcıya şunu söyler:**
  “Bir sonraki ekran yenilemesinden *hemen önce* bu fonksiyonu çalıştır.”
* Genellikle **60 FPS** (saniyede ~60 kare) ile çalışır.
* **Akıcı, performanslı ve pil dostu** animasyonlar sağlar.
* `setInterval` / `setTimeout` yerine **animasyon için en doğru yöntemdir**.

---

## Neden Kullanılır?

* ✅ Daha **pürüzsüz animasyonlar**
* ✅ Tarayıcıyla **senkron** çalışır
* ✅ Sekme arka plandaysa **otomatik yavaşlar / durur**
* ❌ Sabit zamanlı değildir (FPS’e göre çalışır)

---

## Temel Kullanım

```js
requestAnimationFrame(callback);
```

* `callback`: Bir sonraki frame’de çalışacak fonksiyon

---

## Animasyon Döngüsü Mantığı

```js
function animate() {
  update();              // Animasyonu güncelle
  requestAnimationFrame(animate); // Bir sonraki frame
}

requestAnimationFrame(animate); // Döngüyü başlat
```

📌 **Önemli:**
`requestAnimationFrame` **kendi kendine loop yapmaz**, sen tekrar çağırırsın.

---

## update() Fonksiyonu Ne Yapar?

* Pozisyon değiştirme
* Style güncelleme
* Transform / opacity / scale vs.

```js
function update() {
  element.style.transform = `translateX(${position}px)`;
  position += 2;
}
```

---

## Akış Diyagramı (Zihinsel Model)

```
requestAnimationFrame
        ↓
     animate()
        ↓
     update()
        ↓
requestAnimationFrame(animate)
        ↓
      LOOP
```

---

## Basit Örnek

```js
let position = 0;

function animate() {
  box.style.transform = `translateX(${position}px)`;
  position += 2;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

📌 Sonuç:
Eleman her frame’de **2px sağa kayar** → Akıcı animasyon 🎬

## Ne Zaman Durdurulur?

* `cancelAnimationFrame(id)` ile
* veya koşul koyarak:

```js
if (position < 500) {
  requestAnimationFrame(animate);
}
```

**AŞAĞIDA BİR PROGRAM ÖRNEĞİ VAR requestAnimationFrame ile ilgili**
const rect = document.getElementById("rect");

let position = 0;

function update() {
  // Move the rectangle 2px to the right
  rect.style.left = position + "px";
  position += 2;

  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
  }
}

function animate() {
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);

**animate() method**

Kısaca şu şekildedir.
element.animate(keyframes, options);

## Örnek
```js
const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // makes animation lasts 2 seconds
    iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out" // smooth easing
  }
);
```
animation metodunun döndürdüğü Animation nesnesinin methodları şunlardır:
play()
pause()
reverse()
finish()
cancel()

-----
Örnek özellikleri şu şekilde:
playbackRate
currentTime
startTime
effect
timeline
playState
finished
onfinish
oncancel
-----

**Örnek Uygulama**
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animation lasts 5 seconds
    // iterations: Infinity, // Loops indefinitely
    direction: "alternate", // Moves back and forth
    easing: "ease-in-out" // Smooth easing function
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});

-----

Bu konunun muhteşem bir şekilde anlaşılması lazım. Animation yaparken önce css ile yapııp sonrasında js'e çevirmek sanırım daha iyi olacaktır benim için. bu animate özelliği eğer ki kişi tıkladığında birşey olacaksa vs. kullanabiliriz. Yoksa sanırım css animation daha iyi.



**canvas**


```html
<html>
  <head>
  </head>
  <body>
    <canvas id="my-canvas" width="400" height="400"></canvas>
    <script src="index.js"></script>
  </body>
</html>
```

```js
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Set the background color
ctx.fillStyle = "crimson";

// Draw a rectangle
ctx.fillRect(1, 1, 200, 100);
// fillRect takes 4 number values which represent the x axis, y axis, width, and height, respectively.
```

-----------------

```html
<html>
  <head>
  </head>
  <body>
    <canvas id="my-text-canvas" width="300" height="70"></canvas>
    <script src="index.js"></script>
  </body>
</html>
```

```js
const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);
// pass the text into the fillText() method as the first argument, followed by the values for the x and y axis:
```

**DIALOG**
<dialog id="my-modal">
  <p>This is a modal dialog.</p>
</dialog>
şeklinde dialog html elementi oluşturulur.
JS ile 
const dialog = document.getElementById("modal");
dialog.showModal();
dialog.close();

şeklinde bu dialog gösterilebilir veya kapatılabilir.

-----
**Örnek Uygulama**
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

// Bu örnekte kullancıı herhangi bir etkileşim sağlayamaz ekranda. Eğer ki kullanıcının etkileşim sağlayabilmesini istiyor isen o zaman dialog.show() kullanılabilir.


## 2. Örnek Uygulama
<dialog id="modal">
  <p>This is a modal dialog.</p>
  <button id="close-modal-btn">Close Modal</button>
</dialog>
<button id="open-modal-btn">Open Modal Dialog</button>
<script src="index.js"></script>

const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
-----

**change event**
Bir element değiştirildiğinde çalışır. Inputtaki tek tek harflerin yazılmasıyla vs. dinamik olarak çalışmaz. Input'un nihai sonucu ile başka bir focusa geçildiği zaman change çalışır.

<select id="select-menu">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<script src="index.js"></script>
--
const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});
--


**ÖNEMLİ NOT** TAMAMEN ÖĞRENMEK İÇİN JAVASCRIPT ANİMASYONLAR VE CSS ANİMASYONLAR İKİSİDE ÇOK ÖNEMLİ KONULAR BUNA BİR MESAİ HARCAMAK LAZIM CANVAS APIDA ÖĞRENMEK. LAZIM ANIMATE METODUNUDA ÖĞRENMEK LAZIM