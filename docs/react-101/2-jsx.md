---
sidebar_position: 3
title: "JSX คืออะไร ?"
pubDate: 2025-08-08
description: "
JSX หรือ JavaScript Syntax eXtension จะช่วยให้เราสามารถเขียน HTML ลงใน JavaScript ได้เลยครับ 
"
author: "wwDev"
image: "/images/blog/react/2/1.webp"
tags: ["javascript", "typescript", "js", "ts", "react"]
---

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Tm1pTK0B5A?si=RzdX6A_ilIaPBHtJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

หากเพื่อน ๆ คนไหนที่เคยเขียน HTML มาก่อน ก็จะทราบดีใช่ไหมครับ ว่าถ้าอยากให้เว็บของเรามีความ interactive มากขึ้น จะต้องเขียน JavaScript เพิ่ม ให้เว็บของเรามีลูกเล่นและสามารถตอบสนองกับผู้ใช้ได้ดีมากยิ่งขึ้น โดยเทคนิคนี้จะถูกเรียกว่า DOM Manipulation นั่นเองครับ

แต่เมื่อเว็บของเราเริ่มมีขนาดที่ใหญ่ขึ้น มีโครงสร้างซับซ้อนมากขึ้น ก็อาจจะทำให้เราเขียน DOM Manipulation ได้ลำบากมากขึ้นตามไปด้วย

> JSX จึงเข้ามาเพื่อช่วยแก้ปัญหาในเรื่องนี้ครับ

**JSX** หรือ **J**avaScript **S**yntax e**X**tension จะช่วยให้เราสามารถเขียน HTML ลงใน JavaScript ได้เลยครับ แตกต่างจากปกติที่เราเขียน HTML และ JavaScript แยกกัน ทำให้เราสามารถโฟกัสกับการเขียน JavaScript ได้ดีกว่าเดิมนั่นเอง

```jsx
export const HelloWorld = <h1>Hello, World!</h1>;
```

ผิวเผินแล้ว JSX จะดูคล้ายกับ HTML แต่ที่จริงแล้ว JSX จะมีความใกล้เคียงกับ JavaScript มากกว่าครับ ทำให้เราใช้ความสามารถต่าง ๆ ของ JavaScript ได้ด้วย เช่น template literals หรือ arrow function เป็นต้นครับ

การสร้าง JSX เราจะเขียนคล้าย HTML เลยครับ คือมี `<` (tag เปิด) และ `/>` (tag ปิด) สามารถเขียนซ้อนกันด้านในได้ ภายใน tag จะถูกเปลี่ยนเป็น string ทั้งหมด แต่เราสามารถแทรก JavaScript expression ลงไปด้านในได้ด้วยการใส่วงเล็บปีกกาครับ

```jsx
const isCat = true;

export const Button = <button>{isCat ? "Cat" : "Dog"}</button>;
```

ส่วนการเข้าถึง HTML attribute นั้นจะคล้ายกับปกติเลยครับ เช่น `id`, `href` แต่ถ้าเป็น attribute ที่ใน HTML มีชื่อคั่นด้วย - หรือมากกว่า 1 พยางค์ เช่น `tab-index` หรือ `onclick` ก็จะถูกเปลี่ยนเป็น camelCase คือ `tabIndex` และ `onClick` แต่ `class` จะถูกเปลี่ยนเป็น `className` ครับ

```jsx
export const Button = (
  <button id="my-button" tabIndex={1} className="button"></button>
);
```

การเรียกใช้ event ต่าง ๆ เช่น `onClick` หรือ `onKeyDown` ก็สามารถใช้ arrow function หรือ สร้างเป็น function แยกก็ได้ครับ

```jsx
const isCat = true;

const onKeyDown = () => {
  console.log("key down");
};

export const Button = (
  <button
    id="my-button"
    tabIndex={1}
    onClick={() => console.log("clicked")}
    onKeyDown={onKeyDown}
  >
    {isCat ? "Cat" : "Dog"}
  </button>
);
```

การสร้าง JSX เราสามารถสร้างในไฟล์ได้ 3 นามสกุลไฟล์

1. .js
2. .jsx
3. .tsx สำหรับการเขียน TypeScript

ที่จริงแล้ว Web Browser ของเราทำงานได้กับแค่ HTML และ JavaScript เท่านั้น ทำให้ไม่สามารถเข้าใจ JSX ได้ แต่ในเบื้องหลัง JSX ของเราจะถูกแปลงให้เป็น React ที่เป็น JavaScript ธรรมดาก่อน แล้วจึงนำไปให้ browser อ่านต่อนั่นเองครับ

สรุปแล้ว JSX คือฟีเจอร์ที่ทำให้เราสามารถใช้ JavaScript เพื่อสร้าง HTML ที่มีความ interactive สูง maintain ง่าย และ scale ได้ง่ายครับ
