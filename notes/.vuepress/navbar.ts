import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: 'Home', link: '/' , icon: "home"},
  { text: '学习', link: '/study/' ,icon: "note"},
  { text: 'Java', link: '/java/' },
  { text: 'Linux', link: '/linux/' },
  { text: '脚本', link: '/script/' },
  { text: '工具', link: '/tools/' },
  { text: '源码', link: '/source_code/' },
  { text: 'Git', link: '/git/' },
  { text: '日常', link: '/daily/' },
  { text: '其他', link: '/other/' },
  { text: 'DownGit', link: 'https://git.xulc.workers.dev/' },
  // "/",
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
