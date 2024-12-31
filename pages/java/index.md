<script setup lang="ts">
const toc = [
    { text: '语言基础', link: './learn/' },
    // { text: '掌握 API', link: './api/' },
    // { text: '工具链', link: './工具链/' },
    // { text: 'JDBC', link: './JDBC/' },
    // { text: 'Web', link: './web/' },
    // { text: '基础设计模式', link: './基础设计模式/' },
    // { text: 'Spring', link: './spring/' },
]

</script>

# JAVA 学习笔记

## 链接

<div style="display: flex; flex-flow: row wrap; gap: .75rem;">
  <LinkBar v-for="item in toc" :key="item.href" v-bind="item" />
</div>

## 文档源

<LinkBar icon="/assets/logos/java.svg" text="Learn Java" link="https://dev.java/learn/" />

::: tip
以我翻阅时能回想起或者能够直接得到示例代码为目的，所以该笔记会省略一些和其他语言共通的内容或者一些细节。如果是首次学习 Java，建议直接阅读推荐文档。

学习时，以文档源为主（包括笔记的目录结构），如果有翻阅其他文档，会在相关文档中添加链接。
:::
