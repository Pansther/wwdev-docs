---
sidebar_position: 20
title: "Bracket Notation คืออะไร ? | พื้นฐาน JavaScript EP.20"
pubDate: 2025-02-09
description: "
เป็นวิธีการเข้าถึง property ด้วยการใช้ square bracket หรือ วงเล็บก้ามปู ตามด้วยการใส่ชื่อ property ที่ต้องการครับ
"
author: "wwDev"
image: "/images/blog/javascript/20/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-bracket](/images/blog/javascript/20/1.webp)
</div>

ปกติแล้วใน JavaScript เราเข้าถึง property ของ object ด้วยการใช้ object จุด property ที่เราต้องการใช่ไหมครับ สิ่งนี้มีชื่อเรียกว่า dot notation

```javascript
const foo = foo.bar.baz;
```

ที่จริงแล้วเรายังเข้าถึง property ได้อีกวิธีนึง นั่นคือ bracket notation นั่นเองครับ

```javascript
const foo = foo["bar"]["baz"];
```

bracket notation เป็นวิธีการเข้าถึง property ด้วยการใช้ square bracket หรือ วงเล็บก้ามปู ตามด้วยการใส่ชื่อ property ที่ต้องการครับ

ความแตกต่างของ dot no กับ bracket no คือ bracket no สามารถเข้าถึง property ที่มีคีย์เป็นตัวเลข หรือ dynamic key ได้ครับ ทำให้เราสามารถสร้าง object ที่มีคีย์เป็นแบบไหนก็ได้ครับ

```javascript
const cat = {
  name: "เหมียว",
  childs: {
    0: "ไข่ขาว",
    1: "มีโชค",
  },
  weight: {
    ["year-1"]: 3,
    ["year-2"]: 3.2,
  },
};

// ได้ค่า เหมียว เหมือนกัน
cat.name;
cat["name"];
```

หรือจะใช้ function ใช้ตัวแปร หรือใช้ template literals จากตอนที่แล้วก็ได้ครับ

```javascript
const getChild = (no) => {
  return cat?.[no];
};

const getWeight = (year) => {
  return `${cat?.[`year-${year}`]} kg`;
};

// ไข่ขาว
getChild(0);

// 3.2 kg
getWeight(2);
```

ตอนใช้คีย์เป็นตัวเลขแล้วรู้สึกคุ้น ๆ กันบ้างไหมครับ เหมือนเคยเห็นที่ไหนมาก่อนเลย 🤔

ใช่แล้วครับ ปกติเราใช้ bracket notation เพื่อเข้าถึงค่าใน array ได้ เพราะ array ก็คือ object ที่มีคีย์เป็นตัวเลขนั่นเองครับ

```javascript
const foo = ["bar", "baz"];

foo[0]; // bar
foo[1]; // baz
```

ถึง bracket notation จะใช้ key ได้หลากหลาย แต่ถ้าเราใช้ key ที่ไม่มีใน object ก็จะส่งค่าออกมาเป็น undefined อยู่ดี ก็เหมือนใจเธอที่ไม่มีคุณตั้งแต่แรกแล้วครับ 💔

อย่าลืมลองเอาไปใช้กันนะครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ooSj0AhL4Mo?si=4RhCRoOvaVongKwP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
