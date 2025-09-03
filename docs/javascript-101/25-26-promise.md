---
sidebar_position: 25
title: "Promise คืออะไร ? | พื้นฐาน JavaScript EP.25-26"
pubDate: 2025-06-21
description: "
Promise เป็น object พิเศษที่เก็บการทำงานแบบ asynchronous ไว้
"
author: "wwDev"
image: "/images/blog/javascript/25/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-promise](/images/blog/javascript/25/1.webp)
</div>

หากเปรียบเทียบ callback ว่าเหมือนกับการบอกให้โทรกลับแล้ว ผมก็คงจะเปรียบเทียบ Promise ว่า “สัญญานะว่าเสร็จแล้วจะเรียกด้วย” ครับ

## Promise คืออะไร ?

> Promise เป็น object พิเศษที่เก็บการทำงานแบบ asynchronous ไว้

เมื่อทำงานเสร็จจะส่งข้อมูลผ่านฟังก์ชัน `then` หรือถ้าเกิด error ขึ้น ก็จะโยน error ผ่านฟังก์ชัน `catch` นั่นเองครับ

เราไปดูตัวอย่างกันครับ

```javascript
const getUser = (id) => {
  return new Promise((resolve) => {
    resolve(database.getUserById(id));
  });
};

getUser(1)
  .then((user) => getUserName(user))
  .catch((error) => console.error(error));
```

จากตัวอย่างผมมีโค้ด getUser ที่จะส่งข้อมูล user ออกมา ผมสามารถเรียกใช้งาน getUser เหมือนปกติได้เลย เพิ่มเติมคือใช้ `.then` เพื่อรับค่า user และใช้ `.catch` เพื่อดัก error สังเกตุว่าทั้งใน `.then` และ `.catch` เราก็ใส่ callback ฟังก์ชันเข้าไปนั่นเองครับ

หากผมมี Promise หลายตัว ผมก็สามารถนำมา chain กันแบบนี้ได้ครับ

```javascript
getUser(1)
  .then((user) => getUserName(user))
  .then((name) => getFoo(name))
  .then((foo) => getBar(foo))
  .then((bar) => console.log(bar))
  .catch((error) => console.error(error));
```

การใช้ promise จะทำให้โค้ดของเราอ่านได้ง่ายมากยิ่งขึ้น ทั้งยังช่วยแก้ปัญหา callback hell ได้อีก แน่นอนว่าก็มีข้อเสียเช่นกัน ตรงที่หากมี error เกิดขึ้น เราจะไม่รู้เลยว่าเป็น error ของตัวไหนกันแน่

## การสร้าง Promise

สามารถทำได้ง่าย ๆ ด้วยการใช้ new Promise จากนั้นเราจะใช้ callback ที่ส่งฟังก์ชัน `resolve` และ `reject` ออกมา เพื่อส่งค่าหรือ error ออกจาก promise

```javascript
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if (id === 1) {
      return resolve({ id: 1, name: "wwDev" });
    } else {
      return reject("User Not Found");
    }
  });
};
```

`resolve` เป็นฟังก์ชันที่จะส่งค่าเมื่อมีการเรียก `.then` ส่วน `reject` ก็เป็นฟังก์ชันที่จะส่ง error เมื่อมีการเรียก `.catch` นั่นเองครับ

ใน promise สามารถเป็นงานแบบ synchronous หรือ asynchronous ก็ได้

เมื่อเรียกใช้งาน promise จะมีสถานะเป็น pending จนกว่าจะมีการเรียกฟังก์ชัน resolve หรือ reject

![captionless image](/images/blog/javascript/25/2.webp)

หาก `.then` ทำงาน `.catch` จะไม่ทำงาน ในทางกลับกัน หาก `.catch` สามารถดัก error ได้ ก็จะทำให้ `.then` ไม่ทำงานเช่นกัน ถ้าเพื่อน ๆ มีโค้ดที่ต้องทำงานหลังจากเรียก promise นี้ โดยไม่สนใจว่าจะผ่าน `.then` หรือ `.catch` ก็สามารถใช้ `.finally` เพื่อทำงานเป็นลำดับสุดท้ายได้ครับ

```javascript
getUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => console.log("finally"));
```

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xLr0EO1duCc?si=HRARXIYorcRGv4CX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sHCudHpLHoY?si=SXjUYihDjtKi1VJm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
