---
sidebar_position: 11
title: "Spread Operator คืออะไร ? | พื้นฐาน JavaScript EP.11"
pubDate: 2024-08-11
description: "Spread Operator คืออะไร ? | พื้นฐาน JavaScript EP.11"
author: "wwDev"
image: "/images/blog/javascript/11/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-spread-operator](/images/blog/javascript/11/1.webp)
</div>

ถ้ามีคนถามถึงสุดยอด feature เอนกประสงค์ และสารพัดประโยชน์สุด ๆ ของ JavaScript ผมคงนึกถึงอย่างอื่นไปไม่ได้ นอกจาก Spread Operator

เพราะไม่ว่าจะใช้ ต่อ Array 2 ตัวนี้แบบไหน Spread Operator ก็ทำได้หมดไม่ว่าจะแทรกตรงไหน

```javascript
const cats = ["ส้ม", "ชิเอล", "คิรัวร์"];
const dogs = ["นวล", "โบ้", "จุ้มเหม่ง"];
```

> ตัวแรก

```javascript
const catsFirst = ["ไข่ขาว", ...cats];
```

> ตัวสุดท้าย

```javascript
const catsLast = [...cats, "เหมียว"];
```

> หรือตรงกลางก็ทำได้

```javascript
const [firstCat, ...RestCats] = cats;
const catsMiddle = [firstCat, "มีบุญ", ...RestCats];
```

> หรือจะใช้ Destructuring เพื่อดึงค่าออกจาก Object หรือ Array

```javascript
const object = { id: 1, title: "foo" };
const { ...copyObject } = object;
```

> น้อง ๆ พี่อยากให้ function รับ parameters ได้เยอะ ๆ แต่เขียนสั้น ๆ

```javascript
const sum = (...values) => {
  return values.reduce((prev, curr) => prev + curr, 0);
};
sum(10, 20, 30); // 60
```

> อยากก้อป array ?

```javascript
const cats = ["ส้ม", "ชิเอล", "คิรัวร์"];
const copiedCats = [...cats];
```

> อยากก้อป object ?

```javascript
const cat = { name: "เหมียว", age: 2 };
const copiedCat = { ...cat };
```

> อยากดึงค่า array ทั้งหมด ยกเว้นตัวแรก ?

```javascript
const cats = ["ส้ม", "ชิเอล", "คิรัวร์"];
const [firstCat, ...restCats] = cats;
```

เป็นยังไงกันบ้างครับสำหรับ Spread Operator สุดยอด feature สุดเจ๋ง ใช้งานง่าย และยังสารพัดประโยชน์สุด ๆ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YUQ53MxKd3M?si=CVJyA4rCGPhwVpEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
