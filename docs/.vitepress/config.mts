import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "wwDev Docs",
    description: "wwDev Documents",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Examples", link: "/markdown-examples" },
      ],

      // sidebar: [
      //   {
      //     text: "Examples",
      //     items: [
      //       { text: "Markdown Examples", link: "/markdown-examples" },
      //       { text: "Runtime API Examples", link: "/api-examples" },
      //     ],
      //   },
      // ],

      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],

      search: {
        provider: "local",
      },
    },
  }),
  {
    documentRootPath: "docs",
  },
);
