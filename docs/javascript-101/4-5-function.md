---
sidebar_position: 4
title: "Function คืออะไร ? | พื้นฐาน JavaScript EP.4-5"
pubDate: 2024-07-07
description: "
Function เป็นชุดคำสั่งหนึ่ง ที่ทำงานและจะได้ผลลัพธ์เหมือนเดิมเสมอโดยขึ้นอยู่กับค่าที่ใส่เข้าไป
"
author: "wwDev"
image: "/images/blog/javascript/4/1.webp"
tags: ["javascript", "typescript", "js", "ts"]
---

<div class="coverWrapper">
![javascript-function-cover](/images/blog/javascript/4/1.webp)
</div>

## พื้นฐาน Function

Function เป็นชุดคำสั่งหนึ่ง ที่ทำงานและจะได้ผลลัพธ์เหมือนเดิมเสมอโดยขึ้นอยู่กับค่าที่ใส่เข้าไป

เวลาเพื่อน ๆ กดเครื่องคิดเลข 2 + 3 จะได้ผลลัพธ์เป็น 5 ใช่ไหมครับ
ถ้าผมกดลองกด 2 + 3 10 ครั้ง แน่นอนว่าผลลัพธ์ก็จะเป็น 5 10 ครั้งด้วยเช่นกัน

ใน JavaScript เราสามารถสร้าง Function ได้หลายวิธี แต่มีวิธีที่นิยมและใช้ง่ายที่สุด 2 วิธีดังต่อไปนี้

### 1. function keyword

ใช้ keyword คำว่า function เพื่อสร้าง function

```typescript
function foo() {
  return 1;
}
```

### 2. arrow function

ใช้ const เพื่อสร้าง function

```typescript
const foo = () => {
  return 1;
};
```

แม้ในการใช้งานขั้นสูงทั้ง 2 วิธีนี้อาจจะมีความแตกต่างกันอยู่บ้าง
แต่ในเบื้องต้นสามารถใช้งานได้ไม่แตกต่างกันเลยครับ

## Input/Output (I/O)

function สามารถรับข้อมูลเพื่อใช้ในการประมวลผลได้ แต่ถ้ารับ input เดิม จะต้องส่งค่ากลับมาแบบเดิมเท่านั้น เหมือนกับการกดเครื่องคิดเลข **2 + 3 จะต้องได้ 5** เท่านั้นครับ

ใน JavaScript เราสามารถรับ input ด้วยการใส่ชื่อตัวแปรที่ต้องการ หรือที่เรียกว่า

> Parameters

```typescript
// input
function foo(parameters) {}
```

function สามารถรับค่าเป็นอะไรก็ได้ และมีกี่ตัวก็ได้

```typescript
function add(number1, number2) {
  return number1 + number2;
}
```

การส่งค่าออกจาก function เราจะใช้ keyword return โดยสามารถส่งค่าออกเป็นอะไรก็ได้

```typescript
function subtract({ number1, number2 }) {
  return number1 - number2; // output
}
```

แต่จะส่งได้เพียง**ตัวเดียว**เท่านั้น ซึ่งสามารถแก้ได้ด้วยการสร้าง object หรือ array เพื่อจับกลุ่มข้อมูลก่อนส่งออกนั่นเองครับ

```typescript
function divide(number1, number2) {
  return {
    n1: number1 / number2,
    n2: number2 / number1,
  };
}
```

แถม: ค่า input ที่อยู่ในวงเล็บเรียกว่า _parameters_ แต่ค่าที่ใส่เข้าไปตอนเรียกฟังก์ชันจะถูกเรียกว่า _arguments_

---

สามารถรับชมแบบวิดีโอได้ที่นี่ครับ

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dbzpOMXk8E?si=0UWFJ0qTy2t6wQKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
