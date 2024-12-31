import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
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
]
