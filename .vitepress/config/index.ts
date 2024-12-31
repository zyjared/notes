import { resolve } from 'node:path'
import { defineConfigWithSidebar } from '@zyjared/vitepress-sidebar'
// import { defineConfig } from 'vitepress'
import { demoifyPlugin } from '../plugins/vitePluginDemoify'
import { nav } from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfigWithSidebar({
  srcDir: 'pages',
  srcExclude: ['**/code/'],
  outDir: '.vitepress/dist',
  cacheDir: '.vitepress/cache',
  assetsDir: 'assets',
  title: '应风',
  description: '应风的博客',

  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'favicon.png', type: 'image/png' }],
  ],
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/avatar.png',
    // siteTitle: false,

    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyjared/notes' },
    ],

    footer: {},

    editLink: {
      pattern: 'https://github.com/zyjared/notes/edit/main/pages/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选择',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上切换',
              navigateDownKeyAriaLabel: '向下切换',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭',
            },
          },
        },
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换为浅色模式',
    darkModeSwitchTitle: '切换为深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outlineTitle: '目录',
    outline: 'deep',
    externalLinkIcon: true,
  },

  markdown: {
    math: true,
    container: {
      infoLabel: '信息',
      noteLabel: '注意',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详情',
      importantLabel: '重要',
      cautionLabel: '警告',
    },
  },

  vite: {
    plugins: [
      demoifyPlugin({
        includes: ['pages/examples/**/code/*.vue'],
        outpath: '../docs',
      }),
    ],

    resolve: {
      alias: [
        {
          find: '@src',
          replacement: resolve('src'),
        },

      ],
    },
  },
})
