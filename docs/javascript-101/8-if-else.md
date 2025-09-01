---
sidebar_position: 8
title: "If/Else คืออะไร ? | พื้นฐาน JavaScript EP.8"
pubDate: 2024-07-22
description: "If/Else คืออะไร ? | พื้นฐาน JavaScript EP.8"
author: "wwDev"
image: "/images/blog/javascript/8/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-if-else-cover](/images/blog/javascript/8/1.webp)
</div>

ใน JavaScript เราสามารถกำหนดให้โค้ดของเราทำงานในเงื่อนไขต่าง ๆ ได้ครับ

เราไปดูการใช้ if/else อย่างง่ายกันครับ

1. **if** สามารถกำหนดให้โค้ดของเราทำงานเฉพาะตอนที่เงื่อนไขถูกต้องเท่านั้นได้
2. **else** สามารถกำหนดให้โค้ดของเราทำงาน เมื่อเงื่อนไขที่ 1 จาก if ผิดได้
3. **else** **if** ทำงานเหมือนกับ else แต่เงื่อนไขที่ 2 จะต้องถูกด้วย

โดยทั้ง 3 ตัวสามารถใช้งานเพื่อสร้างเงื่อนไขต่อไปเรื่อย ๆ ได้

```javascript
// ฟังก์ชั่นตัดเกรด
const grading = (score) => {
  // เงื่อนไขที่ 1
  if (score >= 80) {
    return "A";
  }
  // เงื่อนไขที่ 2
  else if (score >= 70) {
    return "B";
  }
  // เงื่อนไขที่ 3
  else if (score >= 60) {
    return "C";
  }
  // เงื่อนไขที่ 4
  else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
};
```

แต่หากมีเงื่อนไขมากยิ่งขึ้น ก็อาจจะทำให้โค้ดของเราดูยากขึ้นตามไปด้วยใช่ไหมครับ

ในบทความถัดไป เราจะไปดูอีกตัวเลือกนึงในการกำหนดเงื่อนไขการทำงานของโค้ด ด้วย Swtich กันครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/nboAQRT-DfQ?si=MtXrwqfpTMLJR4tg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
