---
sidebar_position: 6
title: "Array Methods คืออะไร ? | พื้นฐาน JavaScript EP.6-7"
pubDate: 2024-07-14
description: "
ใน JavaScript มี built in array methods ที่มีประโยชน์หลายตัวเลยครับ
"
author: "wwDev"
image: "/images/blog/javascript/6/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-array-methods-cover](/images/blog/javascript/6/1.webp)
</div>

ใน JavaScript มี built in array methods ที่มีประโยชน์หลายตัวเลยครับ

ตัวอย่างข้อมูล

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

## Array.map

**map** เข้าถึงข้อมูลทุกตัว เพื่อสร้าง array ใหม่ โดยที่เราสามารถกำหนดข้อมูลได้ มักใช้เพื่อแปลงข้อมูลให้เป็นแบบที่เราต้องการ

```javascript
// [1, 2, 3, 4, 5, 6]
numbers.map((num) => num);

// [2, 4, 6, 8, 10, 12]
numbers.map((num) => num * 2);
```

## Array.filter

**filter** เข้าถึงข้อมูลทุกตัว เพื่อสร้าง array ใหม่ แต่จะมีเฉพาะข้อมูลที่มี**เงื่อนไขเป็นจริง**เท่านั้น

```javascript
// [1, 2, 3]
numbers.filter((num) => num < 4);

// []
numbers.filter((num) => num > 6);
```

## Array.reduce

**reduce** เข้าถึงข้อมูลทุกตัว และส่งค่าใหม่ออกมาเป็นอะไรก็ได้ ขึ้นอยู่กับวัตถุประสงค์ในการใช้งานของเรา เช่น การใช้ reduce เพื่อบวกเลขทั้งหมดใน array จะส่งค่าออกมาเป็นตัวเลข เป็นต้น

```javascript
// 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21
numbers.reduce((sum, num) => sum + num, 0);

// 20 - 1 - 2 - 3 - 4 - 5 - 6 = -1
numbers.reduce((sum, num) => sum - num, 20);
```

## Array.every

**every** เข้าถึงข้อมูลทุกตัวเพื่อตรวจสอบว่าเงื่อนไขถูกต้องทั้งหมดใช่หรือไม่ ถ้ามีบางตัวเงื่อนไขผิด จะ**หยุดการทำงานทันที**และส่งค่า false กลับมา

```javascript
// false
numbers.every((num) => num < 3);

// true
numbers.every((num) => num < 10);
```

จากในตัวอย่างที่ 1 จะเห็นว่าส่งค่า false กลับมา เนื่องจากข้อมูลใน array ไม่ได้น้อยกว่า 3 ทุกตัว
แต่ในตัวอย่างที่ 2 ส่งค่า true กลับมา เนื่องจากข้อมูลใน array น้อยกว่า 10 ทุกตัว

## Array.some

**some** เข้าถึงข้อมูลทุกตัวเพื่อตรวจสอบว่ามีบางเงื่อนไขถูกต้องใช่หรือไม่ ถ้ามีบางตัวเงื่อนไขถูก จะ**หยุดการทำงานทันที**และส่งค่า true กลับมา

```javascript
// true
numbers.some((num) => num < 3);

// true
numbers.some((num) => num < 10);
```

จากในตัวอย่างทั้ง 2 จะเห็นว่าส่งค่า true กลับมาทั้งคู่ เนื่องจากมีข้อมูลบางตัวใน array น้อยกว่าทั้ง 3 และ 10

## Array.includes

**includes** เช็คว่าใน array ของเรามีข้อมูลที่ต้องการหาหรือไม่ ถ้ามีจะส่งค่า true กลับมา

```javascript
// true
numbers.includes(3);

// false
numbers.includes(10);
```

จากตัวอย่างที่ 2 จะเห็นว่าส่งค่า false กลับมา เนื่องจากใน array ของเราไม่มี 10 นั่นเองครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nk6-ZxCDmcM?si=PIU-dkHhI2xDMAhd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br />
<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sxIBUSXD1vI?si=LVIAzc3qP3eCoXhz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
