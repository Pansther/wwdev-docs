---
sidebar_position: 4
title: "Component คืออะไร ?"
pubDate: 2025-08-13
description: "
component เป็นชิ้นส่วน ui ชิ้นนึงที่สามารถนำไป reuse ได้ โดยอาจจะมีขนาดเล็กมาก ๆ หรือใหญ่มากก็ได้เช่นกัน
"
author: "wwDev"
image: "/images/blog/react/3/1.jpeg"
tags: ["javascript", "typescript", "js", "ts", "react"]
---

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JYdrs9oAyKU?si=fPzByiaca4kzhbEV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

Component เป็นชิ้นส่วน ui ชิ้นนึงที่สามารถนำไป reuse ได้ โดยอาจจะมีขนาดเล็กมาก ๆ หรือใหญ่มากก็ได้เช่นกัน

Component ที่จริงแล้วก็เหมือนฟังก์ชันปกติทั่วไปของ JavaScript ครับ แตกต่างตรงที่ว่าฟังก์ชันทั่วไปเราจะส่งค่าออกเป็น string, booelan หรือ object ใช่ไหมครับ แต่ใน Component เราจะส่งค่าออกเป็น JSX แบบนี้ครับ

```tsx
const normalFunction = () => {
  return "Hello, World!";
};

const MyComponent = () => {
  return <div>Hello, World!</div>;
};
```

การสร้าง Component จะเหมือนกับการสร้างฟังก์ชันตามปกติเลยครับ นั่นคือใช้ keyword function หรือ arrow function ก็ได้ แต่ parameters จะมีแค่ 2 ตัวเท่านั้นครับ คือ

1. props
2. ref

```tsx
const MyComponent2 = (props, ref) => {
  return (
    <>
      <div>Hello, World!</div>
      <div>wwDev React</div>
    </>
  );
};
```

เดี๋ยวเราจะลงรายละเอียดของ 2 ตัวนี้ในคลิปถัด ๆ ไปนะครับ เพิ่มเติมสำหรับ react version 19 เป็นต้นไปจะเหลือ parameters แค่ตัวเดียว เพราะ ref จะไม่แยกออกมาแต่จะถูกรวมไว้ใน props เลยครับ

มีข้อกำหนดคือ ต้องตั้งชื่อให้ตัวอักษรตัวแรกเป็นภาษาอังกฤษตัวพิมพ์ใหญ่เท่านั้น และเราสามารถส่ง JSX ออกได้เพียงตัวเดียวเท่านั้น

ซึ่งเป็นเรื่องปกติของฟังก์ชันอยู่แล้วที่ส่งค่าออกได้เพียงตัวเดียว ถ้าเป็นฟังก์ชันทั่วไปเราสามารถครอบ object หรือ array ก็จะทำให้ส่งค่าออกไปหลายตัวได้ ส่วนของ Component เราจะครอบด้วย **React Fragment** หรือเขียนย่อ เป็น tag เปล่า (\<\>\<\/\>) แบบนี้แทน และแน่นอนว่าเราสามารถสร้าง condition ในการ return ได้เหมือนกับฟังก์ชันปกติด้วยครับ

```tsx
export const MyFunctionComponent = (props) => {
  if (props.isOpen) return <>Open</>;

  return <>Hello World</>;
};
```

ที่จริงแล้วใน React เราสามารถสร้าง Component ได้ 2 แบบ คือ

1. Function component
2. Class component

ทั้ง 2 แบบเป็น Component เหมือนกัน สามารถนำไปใช้งานได้ไม่แตกต่างกันเลย แต่จะต่างกันในตอนสร้าง Component ครับ

```tsx
export class MyClassComponent extends React.Component<void, MyState> {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  componentDidMount(): void {
    this.setState({
      message: "Hello, World!",
    });
  }

  render(): React.ReactNode {
    return <>{this.state.message}</>;
  }
}
```

การสร้าง Component ทั้ง 2 แบบมีรายละเอียดและเทคนิคในการสร้างที่แตกต่างกันไปครับ

function Component เราสามารถใช้ hook ได้ เช่น การสร้าง state ด้วย useState หรือ การเข้าถึง react lifecycle ผ่าน useEffect เป็นต้น แต่ class Component เราจะเข้าถึง state ผ่าน this.state หรือ เข้าถึง react lifecycle ผ่าน componentDidMount เป็นต้นครับ

```tsx
interface MyState {
  message: string;
}

export const MyFunctionComponent = () => {
  const [state, setState] = useState<MyState>({
    message: "",
  });

  useEffect(() => setState({ message: "Hello, World!" }), []);

  return <>{state.message}</>;
};
```

แต่ในปัจจุบันนิยมการเขียนแบบ function Component มากกว่าครับ

ถ้าเพื่อน ๆ คนไหนยังไม่คุ้นชินกับคำแปลก ๆ ก่อนหน้านี้ไม่ต้องกังวลนะครับ เดี๋ยวเราจะไปคุยกันในตอนถัด ๆ ไปแน่นอนครับ
