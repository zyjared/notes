import type { DefaultTheme } from 'vitepress'
import { sidebarUrlBuilder } from '../_utils'

export default function css(): DefaultTheme.SidebarItem[] {
  const { buildLink: link } = sidebarUrlBuilder('/examples/css/docs/')
  return [
    { text: '转盘', link: link('转盘') },
    { text: '计数器', link: link('计数器') },
    { text: '宽高相等', link: link('宽高相等') },
    { text: 'clamp 函数', link: link('clamp 函数') },
    { text: '滚动吸附', link: link('滚动吸附') },
    { text: '毛玻璃', link: link('毛玻璃') },
    { text: '容器阴影', link: link('容器阴影') },
    { text: 'border 渐变', link: link('border 渐变') },
    { text: 'border 动画', link: link('border 动画') },
    { text: '渐变色旋转', link: link('渐变色旋转') },
    { text: '文字渐变', link: link('文字渐变') },
    { text: '段落渐隐', link: link('段落渐隐') },
    { text: 'focus-within', link: link('focus-within') },
    { text: 'clip-path', link: link('clip-path') },
  ].sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))
}
