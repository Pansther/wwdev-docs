---
sidebar_position: 1
title: "ตัวแปรคืออะไร ? | พื้นฐาน JavaScript EP.1"
pubDate: 2024-06-08
description: "ตัวแปรคืออะไร ? | พื้นฐาน JavaScript EP.1"
author: "wwDev"
image: "/images/blog/javascript/1/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
related: ["basic-js", 1]
---

<div class="coverWrapper">
![javascript-variable-cover](/images/blog/javascript/1/1.webp)
</div>

ถ้าให้พูดง่าย ๆ ตัวแปรเปรียบเสมือนคน ๆ นึงที่จำค่าอะไรบางอย่างให้เรา โดยที่เราเป็นคนกำหนดว่าจะให้เค้าจำอะไรบ้าง สำหรับการเขียนโปรแกรม ตัวแปรเป็นสิ่งที่สำคัญมาก เนื่องจากเราจำเป็นต้องคำนวณค่าต่าง ๆ หลายค่า

ถ้าเปรียบเทียบกับในชีวิตจริง ก็เหมือนเวลาเราคิดเลข เมื่อเราบวกเลขเราทดไว้ในใจใช่มั้ยครับ แต่ในเชิงการเขียนโปรแกรม เราจะสร้างตัวแปรให้เป็นคนทดเลขให้นั่นเอง

> ใน JavaScript เราสามารถสร้างตัวแปรได้ 3 วิธีด้วยกัน

## var

เป็นรูปแบบการสร้างตัวแปรแบบเก่า แต่ไม่นิยมใช้แล้วเนื่องจากอาจจะทำให้เกิดปัญหาตามมาได้ ผมแนะนำว่าควรเลือกใช้การสร้างตัวแปร 2 แบบถัดไปแทนครับ

```typescript
var foo = 10;

var bar = function () {
  return 1;
};
```

## const

เป็นรูปแบบการสร้างตัวแปรที่มีค่าคงที่
หมายความว่า เมื่อเราสร้างให้ตัวแปรให้จำค่าบางอย่างแล้ว เราจะไม่สามารถเปลี่ยนให้จำค่าอื่นได้

```typescript
const bar = 10;
const MATH_PI = 3.14;

const foo = () => {
  return 1;
};

bar = 20; // error
```

## let

เป็นรูปแบบการสร้างตัวแปรที่เราสามารถให้ตัวแปรจำค่าอะไรก็ได้ หรือจะเปลี่ยนไปจำค่าอื่นก็ได้

```typescript
let foo = 10;

foo = 20;
```

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Qwj4YwwFhgE?si=FDjoMzCy157V3mvn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
