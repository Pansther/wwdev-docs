---
sidebar_position: 12
title: "Destructuring คืออะไร ? | พื้นฐาน JavaScript EP.12-14"
pubDate: 2024-08-18
description: "Object Destructuring เป็นฟีเจอร์ที่ทำให้เราสร้างตัวแปรจาก key ของ object ได้
"
author: "wwDev"
image: "/images/blog/javascript/12/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-destructuring](/images/blog/javascript/12/1.webp)
</div>

## Object Destructuring

เพื่อน ๆ เบื่อมั้ยครับ เวลาจะเข้าถึงค่าของ object ผ่าน key รู้สึกว่าต้องพิมพ์เยอะ โค้ดก็ยาวไหมครับ

ในตอนนี้ผมมีเทคนิคมาฝากเพื่อน ๆ กันครับ นั่นคือ Object Destructuring นั่นเอง

> Object Destructuring เป็นฟีเจอร์ที่ทำให้เราสร้างตัวแปรจาก key ของ object ได้

เรามาดูความสามารถเต็ม ๆ กันนะครับ

**1. Extract Property** คือ การดึงค่าจาก object มาสร้างตัวแปร

```javascript
// ได้ค่า "เหมียว" เหมือนกัน
const name = cat.name;
const { name } = cat;
```

**2. Default Value** คือ การดึงค่าเหมือนกับข้อ 1 แต่กำหนดค่า default ให้กับตัวแปรได้ เช่น ตัวอย่างโค้ด เราจะได้ค่าเป็น tuna เนื่องจากดึงค่า favoriteFood จาก object แล้วได้เป็น undefined

```javascript
const { habits = "ขี้เล่น" } = cat;
```

**3. Key Alias** คือ เปลี่ยนชื่อตัวแปรจาก key เดิมที่ object มีอยู่

```javascript
const { name: catName } = cat;
```

**4. Deep Property** คือ การดึงค่าจาก key ที่ value เป็น object อีกทีนึง

```javascript
const {
  favorite: { food },
} = cat;
```

## Array Destructuring

เรารู้จักกับ Object Destructuring กันไปแล้ว นอกจาก Object แล้ว Array ก็ทำ Destructuring ได้เหมือนกันนะครับ

> **Array Destructuring** เป็นฟีเจอร์ที่ทำให้เราสร้างตัวแปรจาก index ของ Array ได้

เราไปดูความสามารถเต็ม ๆ กันนะครับ

**1. Extract Property** คือ การดึงค่าจาก array มาสร้างตัวแปรเรียงตาม index แต่จะแตกต่างกับ object destructuring ที่จะดึงค่าจาก key ไหนก็ได้ ไม่เรียงตาม index แต่ถ้าเพื่อน ๆ อยากดึงค่าจาก index ที่ 2 แต่ไม่อยากใช้ค่าจาก index ที่ 0 กับ 1 ก็ไม่ต้องกังวลครับ เพราะเราสามารถเว้นช่องว่าง index ที่ไม่ต้องการได้นั่นเองครับ

```javascript
const [first, second, thrid] = animals;
const [, , thrid2] = animals;
```

**2. Default Value** คือ การดึงค่าเหมือนกับข้อ 1 แต่กำหนดค่า default ให้กับตัวแปรได้ เช่น ตัวอย่างโค้ด เราจะได้ค่าเป็นแมว เนื่องจากดึงค่าจาก array แล้วได้เป็น undefined

```javascript
const [, , , fourth = "แมว"] = animals;
```

**3. Custom Key** คือ กำหนดชื่อตัวแปรได้เอง ต่างกับ object destructuring ที่ต้องทำ key alias

```javascript
// ได้ค่าเป็น "สุนัข" เหมือนกัน
const [first] = animals;
const [dog] = animals;
const [animal] = animals;
```

**4. Deep Property** คือ การดึงค่าจาก Key ที่ Value เป็น Array อีกทีนึง

```javascript
const animals2 = [
  ["โบ้", "จุ้มเหม่ง"],
  ["เหมียว", "ไข่ขาว"],
];
const [[dog1, dog2], [cat1, cat2]] = animals2;
```

---

## More

ที่จริงแล้วทั้ง Object Destructuring กับ Array Destructuring สามารถใช้ร่วมกันได้เป็นอย่างดีเลยครับ

จากตัวอย่างผมมี Object ที่ด้านในมีตัวแปรเก็บค่า Array ไว้

```javascript
const cat1 = {
  name: "เหมียว",
  type: "แมว",
};

const cat2 = {
  name: "ไข่ขาว",
  type: "แมว",
};
```

ผมสามารถดึงค่า แมว จาก Array ได้ด้วยการดึงค่าจาก Object ก่อน แล้วดึงค่าจาก Array ต่อนั่นเอง

```javascript
const pet = {
  cats: [cat1, cat2],
};

// แมว
const {
  cats: [, { type }],
} = pet;
```

กลับกัน ถ้าผมมี Array of Object ผมก็สามารถดึงชื่อของแมวตัวที่ 2 ได้ด้วยการดึงค่าจาก array ตัวที่สองก่อน แล้วค่อยดึงค่าจาก Object นั่นเองครับ

```javascript
const pets = [cat1, cat2];

// ไข่ขาว
const [, { name }] = pets;
```

ถ้าใช้ JavaScript ผมแนะนำว่าควรเช็คค่าตัวแปรอีกรอบ เพราะบางครั้งการ Destructuring ที่ซับซ้อนหลายชั้น อาจจะทำให้เราสับสนและดึงค่าผิดได้ ก็เหมือนความสัมพันธ์ของเราที่ดูซับซ้อน แต่เราอาจจะเข้าใจผิดไปเองก็ได้ครับ 💔

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/jaZSdXHINZg?si=AE5EzfAMs28LXPtD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />
<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SNGu5kA1lWU?si=x1fgaAi_WW-uvhIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />
<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sucMC4UN4io?si=OVTse2Ktq704g3jV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
