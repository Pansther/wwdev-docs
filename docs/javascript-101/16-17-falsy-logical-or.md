---
sidebar_position: 16
title: "Falsy & Logical OR Operator | พื้นฐาน JavaScript EP.16-17"
pubDate: 2024-09-08
description: "ไม่ว่าจะถูกนำไปพิจารณาค่าความจริงที่ไหน ก็จะให้ค่าเป็น false เสมอ
"
author: "wwDev"
image: "/images/blog/javascript/16/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-falsy-logical](/images/blog/javascript/16/1.webp)
</div>

## Falsy

ใน JavaScript มีค่าที่ถูกเรียกว่าเป็น Falsy อยู่ด้วยครับ

> ค่าที่ถูกมองว่าเป็น Falsy เนี่ย ไม่ว่าจะถูกนำไปพิจารณาค่าความจริงที่ไหน ก็จะให้ค่าเป็น false เสมอ

เราไปดูค่า Falsy ทั้งหมดใน JavaScript กันครับ

1. null
2. undefined
3. false
4. NaN (Not a Number)
5. 0 (รวมถึง -0, 0n)
6. “”, ‘’ (string เปล่า)
7. document.all (Object เพียงตัวเดียวที่มีค่าเป็น Falsy)

ส่วนใหญ่ที่เราเห็นก็คงพอจะเดาได้ว่าค่านี้น่าจะเป็น Falsy เนื่องจากเป็นค่าที่ดูไม่ค่อยมีค่าเท่าไหร่ ยกเว้นตัวที่ต้องจำก็น่าจะมีแค่ตัวสุดท้าย document.all ครับ

## Logical OR Operator

ปกติเพื่อน ๆ ใช้ || (Logical OR) เพื่อเขียนเงื่อนไขบางอย่างใช่ไหมครับ ที่จริงแล้วใน JavaScript นั้น เราสามารถใช้ Logical OR เพื่อประเมินค่าความจริงพร้อมกับส่งค่าออกแบบสั้น ๆ ได้ด้วยนะครับ

Logical OR จะทำหน้าที่เป็นผู้ประเมินค่าความจริงด้านซ้ายมือ หากค่าด้านซ้ายเป็น False Logical OR จะส่งค่าด้านขวาออกไปครับ

เราไปดูตัวอย่างกันเลยครับ

### ตัวอย่างที่ 1

```javascript
if (isCat || isDog) {
  return "สัตว์เลี้ยง";
}
```

จากตัวอย่างที่ 1 ก็ดูปกติ เราก็เขียนกันบ่อย ๆ ใช่ไหมครับ เป็นการพิจารณาค่าความจริงธรรมดา

### ตัวอย่างที่ 2

```javascript
const getAnimal = (isCat) => {
  return isCat || "แมว";
};

// แมว
getAnimal(false);
```

ตัวอย่างที่ 2 เพื่อน ๆ จะเห็นว่าเราได้ค่า “แมว” ออกมา เนื่องจากค่าความจริงด้านซ้ายเป็น False logical OR จึงส่งค่าด้านขวาออกไปนั่นเองครับ

### ตัวอย่างที่ 3

```javascript
const getAnimal = (isCat) => {
  return isCat || "แมว";
};

// สุนัข
getAnimal(true);
```

ตัวอย่างที่ 3 เราจะได้ค่า “สุนัข” ออกมา เนื่องจากค่าทางด้านซ้ายเป็น true นั่นเอง

จากด้านบนที่เราคุยกันเรื่อง Fasly กันไป ก็สามารถนำมาประยุกต์ใช้กับ Logical OR ได้อีกด้วยครับ

```javascript
// ได้ แมว เหมือนกัน
getAnimal(false);
getAnimal(null);
getAnimal(undefined);
```

แต่ก็เหมือนเดิม ถ้าเป็นคนที่ไม่ใช่ เธอก็เลือกเขาอยู่ดีครับ 💔

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/TR6TOeEM4Ho?si=0dhoIdPfoWSWiodr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CTC4EMwCmE4?si=c805UTqARhQYmCcT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
