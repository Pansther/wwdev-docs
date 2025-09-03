---
sidebar_position: 18
title: "Nullish Coalescing & Optional Chaining | พื้นฐาน JavaScript EP.18-19"
pubDate: 2024-12-15
description: "ค่า nullish มี 2 ค่าเท่านั้น ประกอบไปด้วย null และ undefined"
author: "wwDev"
image: "/images/blog/javascript/18/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-nullish-optional](/images/blog/javascript/18/1.webp)
</div>

## Nullish

จากบทความก่อน ๆ เราคุยเรื่องของ Falsy กันไปแล้วใช่ไหมครับ ที่จริงใน JavaScript ยังมีค่าที่ถูกเรียกว่า Nullish อยู่ด้วยนะครับ

ค่า nullish **มี 2 ค่าเท่านั้น** ประกอบไปด้วย

1. null
2. undefined

แตกต่างจาก Falsy ที่จะมีทั้ง 0 หรือ String เปล่าด้วย

ในตอนก่อนหน้าที่เราคุยกันเรื่องของ Logical OR Operator ที่สามารถนำมาปรับใช้กับค่า Falsy ได้ แน่นอนครับว่าค่า Nullish ก็มีคู่หูกับเขาเหมือนกัน นั่นคือ **Nullish Coalescing** นั่นเองครับ

เราไปดูตัวอย่างกันเลยนะครับ

```javascript
const getPet = (pet) => {
  return pet ?? "cat";
};
```

Nullish Coalescing จะทำหน้าที่เป็นเป็นผู้ประเมินค่า Nullish เมื่อพบว่าค่าด้านซ้ายเป็น Nullish จะส่งค่าด้านขวาออกไปครับ

```javascript
// ได้ค่า cat เหมือนกัน
getPet();
getPet(null);
getPet(undefined);

// ได้ค่า dog
getPet("dog");
getPet(false);
```

แต่ถ้าค่าด้านซ้ายไม่ใช่ Nullish จะส่งค่าด้านซ้ายออกไปครับ จากตัวอย่างถึงแม้จะเป็นค่า Falsy ก็ไม่นับว่าเป็น Nullish ครับ

```javascript
// ได้ 0
getPet(0);

// ได้ ""
getPet("");
```

## Optional Chaining

เพื่อน ๆ เบื่อ Error แบบนี้กันไหมครับ

![error-message](/images/blog/javascript/18/2.webp)

Error ที่เกิดจากการเข้าถึงตัวแปรที่เป็น Nullish ถ้าไม่อยากให้ Error ก็ต้องมานั่งเขียน if else ดักค่าวุ่นวายอีก

```javascript
const nestedProp = obj.first && obj.first.second;
const temp = obj.first;
const nestedProp2 =
  temp === null || temp === undefined ? undefined : temp.second;
```

วันนี้ผมมีตัวช่วยมานำเสนอครับ นั่นคือ **Optional Chaining** นั่นเอง

Optional Chianing เป็นฟีเจอร์ที่ทำให้เราสามารถเข้าถึงค่าต่าง ๆ ได้อย่างปลอดภัย หากค่าที่เข้าถึงเป็น Nullish จะส่งค่า `undefined` กลับมาโดยที่ไม่โยน Error ออกมาครับ

เราไปดูตัวอย่างกันนะครับ

```javascript
const cat = {
  name: "เหมียว",
  toys: ["ball", "box"],
  hello: () => console.log("เหมียว"),
};
```

1. ใช้เข้าถึงค่าใน object

```javascript
const age = cat?.age; // undefined
```

2. ใช้เข้าถึงค่าใน array

```javascript
const toy = cat?.toys?.[0]; // ball
```

3. ใช้เรียกฟังก์ชั่น

```javascript
cat?.hello?.(); // เหมียว
```

4. ใช้เพื่อ chaining

```javascript
cat?.age?.foo?.bar?.baz; // undefined
```

5. ใช้เพื่อเข้าถึงใจเธอ ?

```javascript
yourheart?.me; // 404 not found
```

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7TP_WCf8jjc?si=L6w1L9LgL0RdCg0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5feZoYamtiw?si=ljsQNtNS7Cvg5ajD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
