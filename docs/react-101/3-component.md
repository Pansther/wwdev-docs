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

## Component

เป็นชิ้นส่วน UI ชิ้นนึงที่สามารถนำไป Reuse ได้ โดยอาจจะมีขนาดเล็กมาก ๆ หรือใหญ่มากก็ได้เช่นกัน

Component ที่จริงแล้วก็เหมือนฟังก์ชันปกติทั่วไปของ JavaScript ครับ แตกต่างตรงที่ว่าฟังก์ชันทั่วไปเราจะส่งค่าออกเป็น String, Boolean หรือ Object ใช่ไหมครับ แต่ใน Component เราจะส่งค่าออกเป็น **JSX** แบบนี้ครับ

```tsx
const normalFunction = () => {
  return "Hello, World!";
};

const MyComponent = () => {
  return <div>Hello, World!</div>;
};
```

การสร้าง Component จะเหมือนกับการสร้างฟังก์ชันตามปกติเลยครับ นั่นคือใช้ Keyword Function หรือ Arrow Function ก็ได้ แต่ Parameters จะมี**แค่ 2 ตัวเท่านั้น** ได้แก่

1. Props
2. Ref

```tsx
const MyComponent = (props, ref) => {
  return (
    <div>
      <div>Hello, World!</div>
      <div>wwDev React</div>
    </div>
  );
};
```

เดี๋ยวเราจะลงรายละเอียดของ 2 ตัวนี้ในคลิปถัด ๆ ไปนะครับ

:::info[React Version 19]

เพิ่มเติมสำหรับ React Version 19 เป็นต้นไปจะเหลือ **Parameters แค่ตัวเดียว** เพราะ Ref จะไม่แยกออกมาแต่จะถูกรวมไว้ใน Props เลยครับ
[อ่านเพิ่มเติม](https://react.dev/blog/2024/12/05/react-19#improvements-in-react-19)

:::

---

## การสร้าง Component

มีข้อกำหนด 2 ข้อ ได้แก่

1. ตั้งชื่อให้ตัวอักษรตัวแรกเป็นภาษาอังกฤษตัวพิมพ์ใหญ่เท่านั้น
2. สามารถส่ง JSX ออกได้เพียงตัวเดียวเท่านั้น

ซึ่งเป็นเรื่องปกติของฟังก์ชันอยู่แล้วที่ส่งค่าออกได้เพียงตัวเดียว ถ้าเป็นฟังก์ชันทั่วไปเราสามารถครอบ Object หรือ Array ก็จะทำให้ส่งค่าออกไปหลายตัวได้ ส่วนของ Component เราจะครอบด้วย **React Fragment** หรือเขียนย่อ เป็น Tag เปล่า `<></>` แบบนี้แทน และแน่นอนว่าเราสามารถสร้างเงื่อนไขในการส่งค่าออกไปได้เหมือนกับฟังก์ชันปกติด้วยครับ

```tsx
export const MyFunctionComponent = (props) => {
  if (props.isOpen) return <>Open</>;

  return <React.Fragment>Hello World</React.Fragment>;

  // หรือแบบสั้น ๆ

  return <>Hello World</>;
};
```

ที่จริงแล้วใน React เราสามารถสร้าง Component ได้ 2 แบบ คือ

1. Function Component
2. Class Component

ทั้ง 2 แบบเป็น Component เหมือนกัน สามารถนำไปใช้งานได้ไม่แตกต่างกันเลย แต่จะ**ต่างกันในตอนสร้าง Component** โดยที่การสร้าง Component ทั้ง 2 แบบมีรายละเอียดและเทคนิคในการสร้างที่แตกต่างกันไปครับ

### Function Component

เราสามารถใช้ React Hook ได้ เช่น การสร้าง State ด้วย `useState` หรือ การเข้าถึง React Lifecycle ผ่าน `useEffect` เป็นต้น

```tsx
// ตัวอย่าง Function Component
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

### Class Component

เราจะเข้าถึง State ผ่าน `this.state` หรือ เข้าถึง React Lifecycle ผ่าน `componentDidMount` เป็นต้นครับ

```tsx
// ตัวอย่าง Class Component
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

แต่ในปัจจุบันนิยมการเขียนแบบ Function Component มากกว่าครับ

ถ้าเพื่อน ๆ คนไหนยังไม่คุ้นชินกับคำแปลก ๆ ก่อนหน้านี้ไม่ต้องกังวลนะครับ เดี๋ยวเราจะไปคุยกันในตอนถัด ๆ ไปแน่นอนครับ
