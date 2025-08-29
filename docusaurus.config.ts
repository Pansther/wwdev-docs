import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "wwDev Documents",
  tagline: "รวมเอกสารความรู้การพัฒนาเว็บไซต์ด้วย React",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docswwdev.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pansther", // Usually your GitHub org/user name.
  projectName: "wwdev-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "th",
    locales: ["th"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/og_image.png",
    navbar: {
      title: "wwDev",
      logo: {
        alt: "wwDev",
        src: "img/logo.JPG",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "บทความ",
        },
        {
          href: "https://github.com/Pansther",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.youtube.com/@wwDev.typing",
          label: "Youtube",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "เอกสาร",
          items: [
            {
              label: "บทความ",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "เพิ่มเติม",
          items: [
            {
              href: "https://github.com/Pansther",
              label: "GitHub",
              position: "right",
            },
            {
              href: "https://www.youtube.com/@wwDev.typing",
              label: "Youtube",
              position: "right",
            },
            {
              href: "https://www.ko-fi.com/wwdev",
              label: "Ko-Fi",
              position: "right",
            },
            {
              href: "https://medium.com/@werawit.srklw",
              label: "Medium",
              position: "right",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} wwDev.typing. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ["docusaurus-plugin-sass"],
};

export default config;
