---
sidebar_position: 23
title: "Callback คืออะไร ? | พื้นฐาน JavaScript EP.23-24"
pubDate: 2025-05-18
description: "
Callback เป็นฟังก์ชันที่จะถูกเรียกหลังอีกฟังก์ชันหนึ่งทำงานเสร็จ 
"
author: "wwDev"
image: "/images/blog/javascript/23/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-callback](/images/blog/javascript/23/1.webp)
</div>

[จากตอนที่แล้ว](https://wwdev-docs.vercel.app/docs/javascript-101/21-22-async)เรามีปัญหาในเรื่องการทำงานของ Asynchronous ที่บางครั้งเรามีโค้ดที่ต้องรอโค้ดก่อนหน้าทำงานเสร็จก่อนถึงจะทำงานได้ ในตอนนี้เราจะไปดูวิธีการแก้ปัญหาด้วย **Callback** กันครับ

Callback เป็นฟังก์ชันที่จะถูกเรียกหลังอีกฟังก์ชันหนึ่งทำงานเสร็จ ถ้าให้พูดง่าย ๆ

> Callback ก็คือ เสร็จแล้วโทรกลับด้วยนะ นั่นเองครับ

## ตัวอย่างที่ 1

เราจะได้ค่า user เป็น `undefined` เนื่องจากโค้ดถูกรันแบบ Asynchronous ทำให้ยังไม่ทันจะดึงข้อมูล user เสร็จ ก็ถูกส่งค่าออกไปซะแล้ว สังเกตุว่า return จะอยู่ด้านนอกฟังก์ชันครับ

```javascript
const getUser = (id) => {
  return database.getUserById(id);
};

const hello = (id) => {
  const user = getUser(id);

  // undefined
  return console.log(user);
};

// undefined
hello(1);
```

## ตัวอย่างที่ 2

เราจะได้ค่าเป็น user id และ user name เนื่องจากเราส่ง Callback Function เข้าไป ทำให้โค้ดส่วน return อยู่ด้านในฟังก์ชัน แตกต่างจากโค้ดในตัวอย่างแรก ทำให้ต้องรอฟังก์ชันค้นหา user ทำงานเสร็จก่อน Callback ของเราก็จะถูกเรียกนั่นเองครับ

```javascript
const getUserCallback = (id, cb) => {
  const user = database.getUserById(id);
  return cb(user);
};

const helloCallback = (id) => {
  getUserCallback(id, (user) => {
    return console.log(user);
  });
};

// { id: 1, name: "wwDev" }
helloCallback(1);
```

แม้ว่า callback จะช่วยให้เราทำงานกับ asynchronous ได้ แต่จริง ๆ แล้วก็มีข้อเสียเหมือนกัน

การใช้ callback เราจำเป็นต้องส่ง callback เข้าไปในฟังก์ชันแบบนี้ใช่มั้ยครับ

```javascript
getUser(id, (user) => {
  console.log("user", user);
});
```

ซึ่งการเขียนแบบนี้จะทำให้โค้ดทำงานโดยเรียงลำดับได้อย่างถูกต้อง ก่อนจะไปกันต่อ ผมมี 1 คำถามครับ

> ถ้าผมมีฟังก์ชันหนึ่งที่ต้องรอ 2 ฟังก์ชันก่อนหน้าเสร็จก่อน เพื่อน ๆ ว่าโค้ดจะมีหน้าตาเป็นยังไงเหรอครับ

แบบนี้ใช่ไหมครับ

```javascript
getUser(id, (user) => {
  console.log("user", user);

  getName(user, (name) => {
    console.log("name", name);
  });
});
```

อ้าว ก็ดูปกตินี่นา ใช่ครับ สำหรับ Callback 1–2 ตัวก็จะยังดูปกติทั่วไป กลับกัน ถ้าผมบอกเพื่อน ๆ ว่า ผมมีอีกฟังก์ชันหนึ่งที่ต้องรอ 10 ฟังก์ชันก่อนหน้าเสร็จก่อน จะเป็นยังไงเหรอครับ …

ก็จะเป็น Callback ไหลลงทุ่งข้าวสาลี บู้ม 💥 กลายเป็น Callback Hell นั่นเองครับ

```javascript
getFoo1(id, (error1, foo1) => {
  console.log("foo1", foo1);
  getFoo2(foo1, (error2, foo2) => {
    console.log("foo2", foo2);
    getFoo3(foo2, (error3, foo3) => {
      console.log("foo3", foo3);
      getFoo4(foo3, (error4, foo4) => {
        console.log("foo4", foo4);
        getFoo5(foo4, (error5, foo5) => {
          console.log("foo5", foo5);
          getFoo6(foo5, (error6, foo6) => {
            console.log("foo6", foo6);
            getFoo7(foo6, (error7, foo7) => {
              console.log("foo7", foo7);
              getFoo8(foo7, (error8, foo8) => {
                console.log("foo8", foo8);
                getFoo9(foo8, (error9, foo9) => {
                  console.log("foo9", foo9);
                  getFoo10(foo9, (error10, foo10) => {
                    console.log("foo10", foo10);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
```

Callback Hell จะทำให้ความอ่านง่ายของโค้ดเพื่อน ๆ -100 แต้มครับ นอกจากจะอ่านยากแล้ว จะ Maintain ว่ายากกว่า

แต่เพื่อน ๆ ไม่ต้องเป็นห่วงไปครับ ในตอนถัดไป ผมจะไปทำความรู้จักกับคุณ Promise เพื่อนซี้ของผมเอง ที่เขาจะมาช่วยให้โค้ดของเพื่อน ๆ ดูดีขึ้นกันครับ

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/iwON_IufSJw?si=4RTzZq0D7m5pb4jr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QlrgtJUYa6I?si=_EruNE0W3fzC6GBb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
