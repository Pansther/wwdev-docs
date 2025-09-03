---
sidebar_position: 21
title: "Asynchronous คืออะไร ? | พื้นฐาน JavaScript EP.21-22"
pubDate: 2025-05-11
description: "
JavaScript เป็นภาษาที่กำเนิดขึ้นมาเพื่อใช้ในการอัพเดตหน้าเว็บให้ลื่นไหล ไม่ติดขัด ทำให้มีธรรมชาติการทำงานที่ทำงานหลายอย่างได้โดยไม่ต้องรองานก่อนหน้าเสร็จก่อนนั่นเองครับ
"
author: "wwDev"
image: "/images/blog/javascript/21/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-async](/images/blog/javascript/21/1.webp)
</div>

## Asynchronous

JavaScript เป็นภาษาที่กำเนิดขึ้นมาเพื่อใช้ในการอัพเดตหน้าเว็บให้ลื่นไหล ไม่ติดขัด ทำให้มีธรรมชาติการทำงานที่ทำงานหลายอย่างได้โดยไม่ต้องรองานก่อนหน้าเสร็จก่อนนั่นเองครับ

ผมขอยกตัวอย่างเป็นการสั่งอาหารครับ

ถ้าผมสั่งป้าร้านตามสั่งว่า เอากระเพราหมูสับ 1 จาน ระหว่างที่ผมรอป้าอยู่ ผมก็สามารถทำอะไรอย่างอื่นรอก่อนก็ได้ อาจจะนั่งดูทีวี หรือฟีดดูช่อง [wwDev](https://youtube.com/@wwdev.typing?si=YcemT1ANIcl8fX7S) ก็ได้ พอป้าทำอาหารเสร็จ ป้าก็จะเอาข้าวมาให้นั่นเองครับ

จากตัวอย่างจะเห็นว่าระหว่างที่ผมรอป้าทำอาหาร ผมสามารถทำอะไรก็ได้ ไม่ใช่ว่าผมต้องจดจ่อนั่งจ้องป้าตาเขม็งทำอาหารอย่างเดียว

![ตัวอย่างการสั่งอาหาร](/images/blog/javascript/21/2.webp)

การทำงานของ JavaScript ก็มีลักษณะเป็นแบบนี้เลยครับ เมื่อเรามีการป้อนงานเข้าไป หากเป็นงานที่สามารถทำได้ทันทีก็จะทำงานเลย แต่ถ้าเป็นงานที่ใช้เวลานานก็จะจำไว้ก่อนว่ามีงาน และทำงานอื่นไปก่อนนั่นเองครับ

```javascript
console.log("first"); // ทำงานลำดับที่ 1

setTimeout(() => {
  console.log("third"); // ทำงานลำดับที่ 3
});

console.log("second"); // ทำงานลำดับที่ 2
```

หากเพื่อน ๆ คนไหนต้องการรายละเอียดเชิงลึกเพิ่มเติมก็สามารถค้นหาด้วย keyword _JavaScript event loop_ ได้เลยครับ

![JavaScript Event Loop](/images/blog/javascript/21/3.webp)

### ข้อดี

สามารถทำงานได้อย่างรวดเร็ว ไม่ไปบล็อกการทำงานของโค้ดส่วนอื่น

### ข้อเสีย

แล้วถ้ามันเป็นงานที่ต้องรอล่ะ จะทำยังไง ?

สมมติผมมีฟังก์ชันนึง ที่ต้องดึงข้อมูล user เพื่อนำชื่อนามสกุลมาแสดงผลที่หน้าเว็บ แต่ถ้าผมไม่ได้เขียนอะไรเพิ่มเติมเลย ผมจะได้ `undefined` มาแทนซะงั้น เนื่องจาก JavaScript มองว่างานผมไว้ค่อยทำก็ได้ ไปทำงานอื่นก่อนดีกว่า ทำให้ยังไม่ทันจะดึงข้อมูล user สำเร็จ ก็ส่ง `undefined` กลับไปซะแล้ว

```javascript
const hello = (user) => {
  console.log(`สวัสดี คุณ${user.name}`);
};

const getUser = (id) => {
  return database.getUserById(id);
};

// undefined
const user = getUser(1);

// สวัสดี คุณ undefined
hello(user);
```

จากปัญหาข้างต้น เรามีวิธีแก้อยู่ 3 วิธีครับ

1. callback
2. promise
3. async / await

ในตอนถัดไป เราจะไปดูรายละเอียดของแต่ละวิธีกันว่ามีลักษณะการทำงาน และข้อดีข้อเสียยังไงบ้างครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/iSSlawe6Ifs?si=euBHPzTUS3Doo4Dz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Gz-uX3WnUQk?si=zH9r2RkOqWlITjS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
