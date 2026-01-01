// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站基础信息
  title: 'Kerrigen Timo Docs',
  tagline: 'Kerrigan study notebook',
  favicon: 'img/favicon.ico', // 浏览器标签页图标

  // GitHub Pages 关键配置
  url: 'https://liuxuyang08.github.io',
  baseUrl: '/mydoc/', // 你的仓库名
  
  // 遇到死链时不报错，只警告（防止部署失败）
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 语言设置
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // 禁用博客功能
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 导航栏配置
      navbar: {
        title: 'Kerrigen Timo Docs', // 左上角网站标题
        logo: {
          alt: 'My Logo',
          src: 'img/logo.png', // 这里对应 static/img/logo.png
        },
        items: [
          // 左侧链接
          {
            // --- 核心修改处 ---
            // 这里必须填文档头部的 id (jquery-notes)，而不是文件名
            to: '/docs/jquery/jquery-notes', 
            label: '学习笔记',
            position: 'left',
          },
          // 右侧链接
          {
            href: 'https://github.com/liuxuyang08/mydoc', // 指向你的 GitHub 仓库
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页脚配置
      footer: {
        style: 'dark',
        links: [], // 清空了杂乱的链接，保持干净
        copyright: `Copyright © ${new Date().getFullYear()} Kerrigen Timo. Built with Docusaurus.`,
      },

      // 代码高亮主题
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
      },

      // 顶部公告栏
      announcementBar: {
        id: 'welcome',
        content:
          '⭐️ 欢迎来到 Kerrigen Timo 的个人知识库！',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;
