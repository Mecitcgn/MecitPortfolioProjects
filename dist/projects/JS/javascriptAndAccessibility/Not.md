**Dynamic ve Interactive Content Nasıl Erişilebilir Yapılır?**

## ✅ 1. `aria-expanded`

* `aria-expanded` **genişleyen elementi değil**,
  **kontrol eden elementi (genellikle button)** üzerine yazılır.

```html
<button 
  aria-expanded="false" 
  aria-controls="menuList">
  Menü
</button>

<ul id="menuList" hidden>
  <li>Ana Sayfa</li>
  <li>Hakkında</li>
</ul>
```

Menü açıldığında JS ile:

```js
button.setAttribute("aria-expanded", "true");
menu.hidden = false;
```

📌 Önemli:

* `aria-expanded` **sadece state bildirir**
* Gerçek açma/kapama işlemini yapmaz
* JS ile güncellenmelidir

---

## ✅ 2. `aria-controls`

Senin yazdığın:

> aria-controls ise bir ul'in idsini girerek çalıştırılır.

⚠ Burada küçük bir düzeltme:

`aria-controls` **bir şeyi çalıştırmaz**.

O sadece şunu söyler:

> “Bu element şu id’ye sahip elementi kontrol ediyor.”

Yani ekran okuyucuya ilişki bildirir.

### Doğru Tanım:

`aria-controls` = Bu buton, şu ID’ye sahip elementi kontrol eder.

Örnek:

```html
<button 
  aria-expanded="false" 
  aria-controls="menuList">
  Menü
</button>
```

Burada:

* `menuList` ID'sine sahip element kontrol ediliyor.

---

## 🔥 Önemli Eksik Nokta (Burası Kritik)

ARIA **tek başına erişilebilirlik sağlamaz.**

Eğer:

* Klavye ile açılmıyorsa
* Escape ile kapanmıyorsa
* Focus yönetimi yoksa

→ Tam erişilebilir değildir.

Gerçek erişilebilir hamburger menü için:

* `button` kullanılmalı (div değil)
* Enter ve Space ile açılmalı
* Escape ile kapanmalı
* Focus menü içine taşınmalı

**aria-live**

Elementin işlemi dinamik bir şekilde değişir ise kullanılır.
Bu attribute 3 değer alır.
aria-live polite olur ise o zaman ekran okuyucunun okumayı bitirmesini bekleyip sonrasında okuma işlemine başlar.
aria-live assertive olur ise o zaman ekran okuyucunun okumayı bitirmesini beklemeden hemen okuma işlemine başlar.
aria-live none olur ise keyboard focus olmadan hiçbir şekilde okuma işlemi çalışmaz.

Süper özet çıkarmışsın 👌 Şimdi son 6 ARIA attribute için **net, sade ama kritik noktaları içeren** bir developer notu hazırlıyorum.

---

# 🔹 1️⃣ `role`

## 📌 Nedir?

Bir elementin **anlamını / görevini** tanımlar.

HTML zaten semantik ise çoğu zaman role yazmaya gerek yoktur.

```html
<div role="button">Tıkla</div>
```

Ama bunun yerine şunu yapmak daha doğru:

```html
<button>Tıkla</button>
```

## ⚠ Kritik Nokta

> ❗ Önce semantic HTML kullan.
> ❗ `role`, HTML’in yerine geçmez — sadece fallback’tir.

### Yaygın Role Örnekleri

| Role       | Kullanım                   |
| ---------- | -------------------------- |
| button     | Div’i buton gibi göstermek |
| dialog     | Modal pencere              |
| alert      | Anlık uyarı                |
| tab        | Sekme sistemi              |
| navigation | Navigasyon alanı           |

---

# 🔹 2️⃣ `aria-selected`

## 📌 Nedir?

Bir listedeki veya sekme yapısındaki öğenin **seçili olup olmadığını** belirtir.

```html
<div role="tablist">
  <button role="tab" aria-selected="true">HTML</button>
  <button role="tab" aria-selected="false">CSS</button>
</div>
```

## ⚠ Kritik Nokta

* Genellikle `tab`, `option`, `gridcell` gibi rollerde kullanılır.
* Seçim değiştiğinde JS ile güncellenmelidir.

> `aria-selected` = Seçili mi?
> `aria-checked` ≠ Aynı şey değil

---

# 🔹 3️⃣ `aria-disabled`

## 📌 Nedir?

Elementin **etkileşime kapalı olduğunu** bildirir.

```html
<button aria-disabled="true">Gönder</button>
```

## ⚠ Çok Önemli Fark

| disabled              | aria-disabled     |
| --------------------- | ----------------- |
| Gerçekten pasif yapar | Sadece bildirir   |
| Tıklanamaz            | Hâlâ tıklanabilir |
| Formdan çıkar         | Formda kalır      |

Eğer gerçek engelleme istiyorsan:

```js
button.disabled = true;
```

> `aria-disabled` sadece ekran okuyucuya bilgi verir.

---

# 🔹 4️⃣ `aria-haspopup`

## 📌 Nedir?

Bu elementin bir **popup açacağını** belirtir.

```html
<button aria-haspopup="menu">
  Seçenekler
</button>
```

## Alabileceği Değerler

* `menu`
* `listbox`
* `tree`
* `grid`
* `dialog`
* `true`

## ⚠ Kritik Nokta

Bu attribute popup'ı açmaz.

> Sadece "Bu buton bir şey açacak" der.

Genellikle `aria-expanded` ile birlikte kullanılır.

---

# 🔹 5️⃣ `aria-required`

## 📌 Nedir?

Bir form alanının zorunlu olduğunu belirtir.

```html
<input type="text" aria-required="true">
```

## ⚠ Ama!

HTML’de zaten:

```html
<input required>
```

vardır.

> Öncelik her zaman native `required` olmalı.

ARIA sadece custom component’lerde gerekir.

---

# 🔹 6️⃣ `aria-checked`

## 📌 Nedir?

Bir checkbox, radio veya toggle’ın seçili durumunu belirtir.

```html
<div role="checkbox" aria-checked="true">
  Kabul ediyorum
</div>
```

## Değerler

* `true`
* `false`
* `mixed` (indeterminate)

## ⚠ Kritik Nokta

Eğer native input varsa:

```html
<input type="checkbox">
```

ARIA kullanmana gerek yok.

---

# 🔥 `aria-selected` vs `aria-checked` Farkı

| aria-selected      | aria-checked    |
| ------------------ | --------------- |
| Listede seçili öğe | Onay durumu     |
| Tab, option        | Checkbox, radio |
| UI state           | Form state      |

---

# 🎯 ARIA Kullanırken Altın Kurallar

1. ❗ Native HTML varken ARIA kullanma
2. ❗ ARIA davranış eklemez, sadece bilgi verir
3. ❗ State değişiyorsa JS ile güncelle
4. ❗ Focus yönetimi yoksa erişilebilir değildir
5. ❗ Role + state birlikte düşünülmeli


**aria-expanded Toggle Mekanizması**
<button id="menuBtn" aria-expanded="false">Menu</button>

<script>
  const btn = document.getElementById("menuBtn");

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
</script>


