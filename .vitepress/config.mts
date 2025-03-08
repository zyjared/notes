import { defineConfigWithSidebar } from '@zyjared/vitepress-sidebar'
import { mergeConfig } from 'vitepress'
import { config } from './preset/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithSidebar(mergeConfig(
  config,
  {
    srcDir: 'pages',
    title: '应风',
    description: '应风的笔记本',
    head: [
      ['link', { rel: 'icon', href: 'favicon.png', type: 'image/png' }],
    ],
    themeConfig: {
      nav: [
        {
          text: '碎片',
          link: '/rough/',
        },
        {
          text: '前端',
          items: [
            {
              text: 'CSS 示例',
              link: '/examples/css/docs/',
            },
            {
              text: 'MDN',
              link: 'https://developer.mozilla.org/zh-CN/',
            },
          ],
        },
        {
          text: '书签',
          items: [
            {
              text: 'Java',
              link: 'https://dev.java/learn/',
            },
            {
              text: 'C',
              link: 'https://zh.cppreference.com/w/首页',
            },
            {
              text: 'Python',
              link: 'https://docs.python.org/zh-cn/3/',
            },
            {
              text: 'Rust',
              link: 'https://kaisery.github.io/trpl-zh-cn/',
            },
          ].sort((a, b) => a.text.length - b.text.length),
        },
      ],
      logo: '/favicon.png',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zyjared' },
      ],
      editLink: {
        pattern: 'https://github.com/zyjared/notes/edit/main/pages/:path',
      },
    },
  },
))
