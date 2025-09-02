---
sidebar_position: 10
title: "Ternary Operator คืออะไร ? | พื้นฐาน JavaScript EP.10"
pubDate: 2024-08-04
description: "
Ternary Operator ถ้าพูดง่าย ๆ ก็คือการเขียน If/Else แบบสั้น ๆ เพื่อความสะดวกในการใช้งานนั่นเองครับ
"
author: "wwDev"
image: "/images/blog/javascript/10/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-ternary-operator](/images/blog/javascript/10/1.webp)
</div>

Ternary Operator ถ้าพูดง่าย ๆ ก็คือการเขียน If/Else แบบสั้น ๆ เพื่อความสะดวกในการใช้งานนั่นเองครับ

จากโค้ดทั้ง 2 ตัวอย่างที่มีผลลัพธ์เหมือนกัน เพื่อน ๆ ว่าแบบที่ 2 สั้นและดูง่ายกว่าใช่ไหมครับ

```javascript
const getAnimalsThaiName = (animals = []) => {
  return animals.map((name) => {
    if (name === "cat") {
      return "แมว";
    } else {
      return "สุนัข";
    }
  });
};
const getAnimalsThaiName2 = (animals = []) => {
  return animals.map((name) => (name === "cat" ? "แมว" : "สุนัข"));
};
```

แต่ถ้าเพื่อน ๆ มีเงื่อนไขที่ซับซ้อนซ่อนเงื่อนเพื่อนทรยศแบบนี้

```javascript
const getThaiName = (name) => {
  return name === "cat"
    ? "แมว"
    : name === "dog"
      ? "สุนัข"
      : name === "bird"
        ? "นก"
        : name === "mouse"
          ? "หนู"
          : "ไก่";
};
```

ผมแนะนำว่าใช้ if else เหมือนเดิมจะดีกว่า ไม่งั้นถ้า Senior มาเห็นจะโดนตีมือเอาได้ครับ 5555

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/EmqVqeGUrRw?si=U2IJUYP__fLLCLfB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
