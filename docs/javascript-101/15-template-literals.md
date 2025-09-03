---
sidebar_position: 15
title: "Template Literals คืออะไร ? | พื้นฐาน JavaScript EP.15"
pubDate: 2024-09-01
description: "วันนี้ผมมีตัวช่วยให้การต่อ string ง่ายขึ้นกว่าเดิมมาฝากกันครับ นั่นคือ Template Literals นั่นเอง"
author: "wwDev"
image: "/images/blog/javascript/15/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-template-literals](/images/blog/javascript/15/1.webp)
</div>

เพื่อน ๆ มีใครยังต่อ string แบบนี้อยู่บ้างไหมครับ

```javascript
const color = "สีฟ้า";
"wwDev สวัสดีครับ ผมชอบ" + color;
```

เวลาต้องต่อกันเยอะ ๆ รู้สึกโค้ดดูอ่านยากขึ้นไหมครับ วันนี้ผมมีตัวช่วยให้การต่อ string ง่ายขึ้นกว่าเดิมมาฝากกันครับ นั่นคือ Template Literals นั่นเอง

> Template Literals หรือ Template String

เป็นฟีเจอร์ที่ทำให้เราสามารถสร้าง string หลายบรรทัด และแทรก Expression ใน string ได้

เรามาดูตัวอย่างการใช้งานกันนะครับ

## Create String

สร้าง string ธรรมดาเหมือนกับการใช้ `""` (double quote) หรือ `''` (single quote)

```javascript
const foo = `wwDev สวัสดีครับ`;
```

## Multi-line String

สร้าง String หลายบรรทัด

```javascript
const foo = `wwDev สวัสดีครับ
ขอบคุณสำหรับการติดตามนะครับ`;
```

## String Interpolation

สร้าง string แบบมีการแทรก Expression

```javascript
const color = "สีฟ้า";
const foo = `wwDev สวัสดีครับ ผมชอบ ${color}`; // wwDev สวัสดีครับ ผมชอบ สีฟ้า
```

จากตัวอย่างแรกเพื่อน ๆ จะเห็นว่าโค้ดดูไม่ต่างกันมากใช่ไหมครับ เดี๋ยวเราไปดูตัวอย่างถัดไปกันนะครับ

```javascript
const getFavoriteColor = (color) => {
  return "ผม " + color === "สีฟ้า" ? "ชอบ" : "ไม่ชอบ" + " " + color;
};

const getFavoriteColor2 = (color) => {
  return `ผม ${color === "สีฟ้า" ? "ชอบ" : "ไม่ชอบ"} ${color}`;
};

// ผม ชอบ สีฟ้า
getFavoriteColor("สีฟ้า");

// ผม ไม่ชอบ สีแดง
getFavoriteColor2("สีแดง");
```

จากตัวอย่างที่สอง จะเห็นว่าตัวอย่างแรกต้องใช้เครื่องหมาย + หลายตัว และ*ต้องมีการใส่ space* เพื่อให้ข้อความมีช่องว่างด้วย แตกต่างกับตัวอย่างที่สองที่สามารถเว้นวรรคได้เลยนั่นเอง

ถึง Template Literals จะช่วยต่อ String ได้ดีแค่ไหน ก็ยังคงต่อใจเธอไม่ได้ซักที 💔

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/axo2eJcmg-s?si=XfJw0OSH0rN4Td9O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
