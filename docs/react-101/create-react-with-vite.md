---
sidebar_position: 1
title: "เริ่มต้นสร้าง react ด้วย vite"
pubdate: 2024-05-12
description: "วันนี้เราจะเริ่มต้นสร้างโปรเจ็ค react แบบง่าย ๆ ด้วย vite กันครับ"
author: "wwdev"
tags: ["javascript", "typescript", "js", "ts", "react"]
---

วันนี้เราจะเริ่มต้นสร้างโปรเจ็ค React แบบง่าย ๆ ด้วย Vite กันครับ

> Vite คืออะไร ?

Vite เป็น Tool ตัวหนึ่งที่สามารถสร้างโปรเจ็คให้เราได้ด้วยคำสั่งเพียงเล็กน้อย ซึ่งความเทพของ Vite คือสามารถสร้างโปรเจ็คจากหลากหลาย Framework ยอดนิยม เช่น React, Vue และ Svelte เป็นต้น

เริ่มต้นสร้างโปรเจ็ค

```bash
yarn create vite
```

หลังจากติดตั้ง create-vite สามารถกรอกชื่อโปรเจ็คที่ต้องการได้

![yarn-create-vite](/images/blog/javascript/0/2.webp)

เลือก Framework เป็น React

![select-framework](/images/blog/javascript/0/3.webp)

เลือก TypeScript + SWC

![typescript-swc](/images/blog/javascript/0/3.webp)

เสร็จแล้ว

![finish](/images/blog/javascript/0/4.webp)

สามารถ Copy คำสั่งเพื่อเข้าไปยังโปรเจ็คที่สร้างไว้ และติดตั้งแพ็คเกจต่าง ๆ

```bash
cd react-vite
yarn
```

หลังจากผ่านชั่วเวลาอันยาวนานนน ~ ก็ได้เวลาเปิด Development Server

```bash
yarn dev
```

เมื่อขึ้นแบบนี้สามารถเข้าไปที่ url สีฟ้าได้เลย ในตัวอย่างเป็น [http://localhost:5173/](http://localhost:5173/)

![command](/images/blog/javascript/0/5.webp)

ชิ้งง ~ คุณได้รับเว็บ 1ea

![firstpage](/images/blog/javascript/0/1.webp)

จบแล้วครับ สำหรับการเริ่มต้นสร้าง React ด้วย Vite อย่างง่าย เขียนเว็บให้สนุกนะครับ ⚛️
