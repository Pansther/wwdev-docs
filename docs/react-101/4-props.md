---
sidebar_position: 5
title: "Props คืออะไร ?"
pubDate: 2025-08-15
description: "
Props ย่อมากจาก properties เป็นตัวแปรที่รับค่ามาจาก Parent Component เมื่อ Props เปลี่ยนแปลง Component จะเกิดการ Re-render และแสดงผลด้วย Props ล่าสุดครับ
"
author: "wwDev"
image: "/images/blog/react/4/1.jpg"
tags: ["javascript", "typescript", "js", "ts", "react"]
---

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/b46BRDlWiNc?si=4y5ey0C-Hay3Hacz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

จากตอนที่แล้วเราคุยกันเรื่อง Component กันไป ผมมีพูดถึง Props ไว้ด้วยใช่ไหมครับว่าเป็น 1 ใน Parameters ของ Component

> Props ย่อมาจาก Properties

เป็นตัวแปรที่รับค่ามาจาก Parent Component เมื่อ Props เปลี่ยนแปลง Component จะเกิดการ Re-render และแสดงผลด้วย Props ล่าสุด

Props เป็น Object ตัวนึงที่ด้านในมีค่าเป็นอะไรก็ได้ จะเป็น String, Boolean หรือ ฟังก์ชันก็ได้ ขึ้นอยู่กับเราเป็นคนกำหนด นอกจากนี้ทุก Component ของ React จะมี Props พิเศษที่ชื่อว่า Children ติดมาด้วย และมีการส่งค่าที่พิเศษกว่าคนอื่น แต่ก็ยังคงเป็นค่าอะไรก็ได้เช่นกัน

```tsx
const Button = ({ id, children }: ButtonProps) => {
  return <button id={id}>{children}</button>;
};
```

การส่งค่า Props เราสามารถเขียนได้เหมือนกับการเรียกใช้ HTML Attribute เลยครับ คือ ใส่ Key และ Value ลงไปใน JSX แบบนี้ ส่วน Props Children เราจะต้องส่งเข้าไปด้านในของ JSX แทน

```tsx
const Parent = () => {
  // ส่ง id และ children เข้าไปใน Button
  return <Button id="btn-1">Hello World</Button>;
};
```

ข้อจำกัดของ Props คือเป็นการส่งค่าทางเดียว และมีค่าเป็น Read Only แปลว่าถึงเราจะเปลี่ยนค่า Props ใน Child Component ค่าจริง ๆ ที่ถูกส่งมาจาก Parent Component ก็จะยังคงเป็นค่าเดิม

แต่ก็ใช่ว่า Child จะไม่มีทางส่งค่าให้ Parent เสมอไป เราสามารถใช้ Callback เพื่อช่วยแก้ปัญหาได้

ถ้าผมมีค่าอยู่ใน Child และผมอยากส่งค่าให้ Parent ผมจะกำหนด Props เป็น Callback แบบนี้ เมื่อมีการคลิกขึ้น จะทำให้ Callback ทำงาน และส่งค่ากลับไปที่ Parent ได้นั่นเอง

```tsx
const Button = ({ id, children, onClick }: ButtonProps) => {
  return (
    // ส่งค่า id เข้าไปใน onClick
    <button id={id} onClick={() => onClick?.(id)}>
      {children}
    </button>
  );
};

const Parent = () => {
  const onClickButton = (id: string) => {
    // id >> btn-1
    console.log("id >> ", id);
  };

  return (
    <Button id="btn-1" onClick={onClick}>
      Hello World
    </Button>
  );
};
```

เนื่องจาก Component เทียบเท่าได้กับฟังก์ชัน ส่วน Props ก็เทียบเท่ากับ Parameters ทำให้เราสามารถใช้ TypeScript เพื่อกำหนดได้ว่า Props ของเราจะมีค่าเป็นอะไรบ้าง จำเป็นหรือไม่ที่จะส่งค่ามา หากส่งค่าไม่ถูกต้อง ก็จะขึ้น Error เป็นสีแดงแบบนี้

![error](/images/blog/react/4/2.png)

ช่วยให้โอกาสเกิดบัคของเราลดลงไปด้วย หากเรามี Props ที่เป็น Optional ก็ยังใส่ Default Value ได้เหมือนฟังก์ชันทั่วไปด้วย

```tsx
interface ButtonProps {
  id: string;
  onClick?: (id: string) => void;
  children?: React.ReactNode;
}

const Button = ({ id, children, onClick }: ButtonProps) => {
  return (
    <button id={id} onClick={() => onClick?.(id)}>
      {children}
    </button>
  );
};

const MyComponent = () => {
  const hello = (id: string) => {
    console.log(`Hello, World! from ${id}`);
  };

  return (
    <div>
      <Button id="btn-1" onClick={hello}>
        Button 1
      </Button>
      <Button id="btn-2" onClick={hello}>
        Button 2
      </Button>
    </div>
  );
};
```

สรุปแล้ว Props ก็คือ Object ตัวนึงที่ใช้ส่งค่าจาก Parent Component ไปยัง Child Component เมื่อ Props มีการเปลี่ยนแปลง Child Component ก็จะมีการ Re-render เพื่อแสดงผลด้วย Props ล่าสุดนั่นเอง
