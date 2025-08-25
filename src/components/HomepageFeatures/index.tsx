import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "เนื้อหาบทความ",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        สามารถเลือกอ่านเนื้อหาบทความได้ ไม่ว่าจะเป็นพื้นฐาน JavaScript, React
        และ Next.js ได้ที่เว็บนี้เลย
        <br />
        <br />
        <Link
          className="button button--primary button--lg"
          to="/docs/category/javascript-101"
        >
          อ่านเลย
        </Link>
      </>
    ),
  },
  {
    title: "คลิปวิดีโอ",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        รับชมคลิปวิดีโอพื้นฐาน JavaScript, React และ Next.js ได้ทาง Youtube ช่อง
        wwDev เลย
        <br />
        <br />
        <a
          target="_blank"
          className="button button--secondary button--lg"
          href="https://www.youtube.com/@wwDev.typing"
        >
          Youtube
        </a>
      </>
    ),
  },
  {
    title: "สนับสนุน",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        สนับสนุนผมได้ด้วยการกดไลก์คลิปวิดีโอ, ติดตาม, แสดงความคิดเห็น
        หรือเลี้ยงชานมไข่มุกผมซักหนึ่งแก้ว
        <br />
        <br />
        <a href="https://ko-fi.com/F1F71JX51B" target="_blank">
          <img
            height="36"
            src="https://storage.ko-fi.com/cdn/kofi5.png?v=6"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            border="0"
            alt="เลี้ยงชานมไข่มุก"
          />
        </a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
