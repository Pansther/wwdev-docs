---
sidebar_position: 9
title: "Switch คืออะไร ? | พื้นฐาน JavaScript EP.9"
pubDate: 2024-07-29
description: "
นอกจากการใช้ If/Else แล้ว ใน JavaScript เรายังสามารถใช้ Switch เพื่อสร้างเงื่อนไขการทำงานของโค้ดได้ครับ
"
author: "wwDev"
image: "/images/blog/javascript/9/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-switch](/images/blog/javascript/9/1.webp)
</div>

นอกจากการใช้ If/Else แล้ว ใน JavaScript เรายังสามารถใช้ Switch เพื่อสร้างเงื่อนไขการทำงานของโค้ดได้ครับ

ถ้าผมมีผลไม้ 3 อย่าง แอปเปิล กล้วย ส้ม

แล้วผมถามเพื่อน ๆ ว่า ผลไม้สีส้มคือแอปเปิลใช่หรือไม่ ถ้าไม่ใช่ คือกล้วยใช่หรือไม่ ถ้ายังไม่ใช่อีก งั้นผลไม้ลูกนี้เป็นส้ม

![example-1](/images/blog/javascript/9/2.webp)

กับอีกแบบนึง ถ้าผมถามเพื่อน ๆ ว่า ระหว่างสีแดง สีส้มและสีเหลือง ส้มมีสีอะไร

เพื่อน ๆ ว่าการถามแบบที่ 2 น่าตอบง่ายกว่าใช่ไหมครับ

![example-2](/images/blog/javascript/9/3.webp)

เพราะเราไม่ต้องตั้งคำถามทีละข้อ แต่ใช้ตัวเลือกที่มีในการตอบคำถามได้ครับ

หากเรานำคำถามทั้ง 2 คำถามก่อนหน้ามาเขียนเป็นโค้ด จะได้โค้ดที่มีหน้าตาแบบนี้ครับ

> If/Else

```javascript
const getFruit = (color) => {
  if (color === "red") {
    return "apple";
  } else if (color === "yellow") {
    return "banana";
  } else {
    return "orange";
  }
};
```

> Switch

```javascript
const getFruit = (color) => {
  switch (color) {
    case "red":
      return "apple";
    case "yellow":
      return "banana";
    default:
      return "orange";
  }
};
```

แม้ว่าในด้านผลลัพธ์แล้ว การใช้ if/else หรือ switch อาจจะไม่ต่างกันมากขนาดนั้น

แต่ในบางกรณี การเขียนด้วย switch ก็อาจจะทำให้โค้ดดูสะอาดตา และอ่านง่ายมากกว่านั่นเองครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uaoIhwyWWKk?si=gqiiNgrgNbT62DO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
