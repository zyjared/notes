import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const config = defineConfig({
  srcDir: '.',
  outDir: '.vitepress/dist',
  cacheDir: '.vitepress/cache',
  assetsDir: 'assets',
  title: 'zyjared',
  description: 'zyjared',
  lang: 'zh-CN',
  head: [
    // ['link', { rel: 'icon', href: 'favicon.png', type: 'image/png' }],
  ],
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/favicon.png',
    // siteTitle: false,

    socialLinks: [
    //   { icon: 'github', link: 'https://github.com/zyjared' },
    ],

    footer: {
      message: [
        '3D Model from',
        '<a href="https://sketchfab.com/slang107123456789" target="_blank" title="seth the yutyrannus">seth</a>',
        'on',
        '<a href="https://sketchfab.com" target="_blank">Sketchfab</a>',

        // vitepress
        '<span class="vp-footer-separator">·</span>',
        'Built with',
        '<a href="https://vitepress.dev" target="_blank">VitePress</a>',
      ].join(' '),
      copyright: 'Copyright © 2024-present zyjared',
    },

    editLink: {
      pattern: 'https://github.com/zyjared/vitepress-theme/edit/main/pages/:path',
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
})
