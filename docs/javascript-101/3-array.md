---
sidebar_position: 3
title: "Array คืออะไร ? | พื้นฐาน JavaScript EP.3"
pubDate: 2024-06-23
description: "Array คืออะไร ? | พื้นฐาน JavaScript EP.3"
author: "wwDev"
tags: ["javascript", "typescript", "js", "ts"]
related: ["basic-js", 3]
---

![javascript-array-cover](/images/blog/javascript/3/1.webp)

ถ้าเรามีส้มอยู่ 10 ผล แล้วต้องเก็บใส่ถุงแยกกัน ก็คงจะยกไปมาลำบากใช่ไหมครับแต่กลับกันถ้าเราเอาส้มใส่กล่องรวมกัน แบบนี้ก็จะยกไปไหนมาไหนสะดวกแล้วจริงไหมครับ

ถ้ามองในเชิงการเขียนโปรแกรม Array ก็เป็นเหมือนกล่อง ที่มีไว้เก็บตัวแปรหลาย ๆ ตัวให้อยู่ด้วยกัน เพื่อความเข้าใจง่ายและความสะดวกในการใช้งานนั่นเองครับ

ใน JavaScript เราสามารถสร้าง Array ได้หลายวิธี แต่วิธีที่ง่ายที่สุดคือการสร้าง Array พร้อมกับใส่ค่าให้โดยตรงดังนี้

```typescript
const foo = ["ส้ม", "แอปเปิล", "มังคุด"];
```

ใน array เราสามารถเก็บค่าอะไรก็ได้ครับ โดยที่เราสามารถเข้าถึงค่าของแต่ละตัวได้ผ่านตัวเลขที่มีชื่อว่า **index**

> **index** คือ ตัวเลขระยะห่างจากของชิ้นแรกใน array

หมายความว่า หากเราต้องการเข้าถึงค่าของ "ส้ม" เราจะเข้าถึงผ่าน index = 0 เนื่องจาก "ส้ม" เป็นของที่อยู่ชิ้นแรกใน Array

```typescript
foo[0]; // ส้ม
foo[1]; // แอปเปิล
foo[2]; // มังคุด
```

แต่ถ้าหากเราต้องการเข้าถึง "มังคุด" เราต้องเข้าถึงผ่าน index = 2 เนื่องจาก "มังคุด" อยู่ถัดจากชิ้นแรก 2 ตัวนั่นเอง

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<iframe width="560" height="315" src="https://www.youtube.com/embed/5FrkfIBu6sA?si=kNY1lvngVOLqDNjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
