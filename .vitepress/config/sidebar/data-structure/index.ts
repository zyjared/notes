import type { DefaultTheme } from 'vitepress'
import { sidebarUrlBuilder } from '../_utils'

const sidebar: DefaultTheme.SidebarMulti = {
  '/data-structure/': dataStructure(),
}

function dataStructure(): DefaultTheme.SidebarItem[] {
  const { base, buildBase, buildLink } = sidebarUrlBuilder('/data-structure/')
  return [
    {
      text: '说明',
      link: buildLink('README'),
    },
    {
      text: '数据结构术语',
      link: buildLink('terminology'),
    },
    {
      text: '时间复杂度',
      link: buildLink('time-complexity'),
    },
    {
      text: '空间复杂度',
      link: buildLink('space-complexity'),
    },
    {
      text: '线性结构',
      base: buildBase('linear-structure'),
      collapsed: false,
      items: [
        {
          text: '线性表',
          link: 'linear-list',
        },
        {
          text: '栈',
          link: 'stack',
        },
        {
          text: '队列',
          link: 'queue',
        },
        {
          text: '串',
          link: 'string',
        },
      ],
    },
    {
      text: '数组',
      link: `${base}array`,
    },
    {
      text: '广义表',
      link: `${base}generalized-list`,
    },
    {
      text: '树形结构',
      base: buildBase('tree-structure'),
      collapsed: false,
      items: [
        {
          text: '树',
          link: 'tree',
        },
        {
          text: '二叉树',
          link: 'binary-tree',
        },
        {
          text: '二叉搜索树',
          link: 'binary-search-tree',
        },
        {
          text: '平衡二叉树',
          link: 'balanced-binary-tree',
        },
        {
          text: 'B 树',
          link: 'B-tree',
        },
        {
          text: '堆',
          link: 'heap',
        },
        {
          text: '赫夫曼树',
          link: 'huffman-tree',
        },

        {
          text: '森林',
          link: 'forest',
        },
        {
          text: '回溯法和树的遍历',
          link: 'tree-traversal',
        },
      ],
    },
    {
      text: '图形结构',
      base: buildBase('graph-structure'),
      collapsed: false,
      items: [
        {
          text: '图',
          link: 'graph',
        },
        {
          text: '图的遍历',
          link: 'graph-traversal',
        },
        {
          text: '图的连通性',
          link: 'graph-connectivity',
        },
        {
          text: '有向无环图',
          link: 'directed-acyclic-graph',
        },
        {
          text: '最短路径',
          link: 'shortest-path',
        },
      ],
    },
  ]
}

export default sidebar
