---
sidebar_position: 2
title: "Object คืออะไร ? | พื้นฐาน JavaScript EP.2"
pubDate: 2024-06-09
description: "Object คืออะไร ? | พื้นฐาน JavaScript EP.2"
author: "wwDev"
image: "/images/blog/javascript/2/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-object-cover](/images/blog/javascript/2/1.webp)
</div>

Object เป็นรูปแบบของข้อมูลที่มีลักษณะเป็น key-value คล้ายกับเวลาเราเปิด dictionary หาคำว่า cat ที่แปลว่าแมว กลับกันถ้ามองในรูปแบบของ object ก็จะมี key เป็น cat และมี value ว่าแมวนั่นเอง

ใน javascript เราสามารถสร้าง object ได้หลายวิธี แต่วิธีที่นิยมที่สุดคือการสร้าง object พร้อมกับใส่ค่าให้โดยตรงดังนี้

```typescript
const foo = {
  cat: "แมว",
  dog: "สุนัข",
  fruit: {
    apple: "แอปเปิล",
    orange: "ส้ม",
  },
  bar: () => {
    return 0;
  },
};
```

ใน object ของเราจะมี key เป็น string และ value เป็นอะไรก็ได้ แต่มีข้อกำหนดคือห้ามมี key ซ้ำกัน นอกจากนี้เรายังสามารถเขียน object ให้ซ้อนกันมากกว่า 1 ชั้นได้ หรือที่เรียกว่า nested object นั่นเอง

โดยที่เราสามารถเข้าถึง value ได้ผ่าน key ดังนี้

```typescript
foo.cat; // แมว
foo.fruit.orange; // ส้ม
```

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CiXcBARh5BE?si=WdHjPdBnTx_prH1z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
