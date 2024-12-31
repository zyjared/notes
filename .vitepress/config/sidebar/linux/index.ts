import type { DefaultTheme } from 'vitepress'
import { sidebarUrlBuilder } from '../_utils'

const sidebar: DefaultTheme.SidebarMulti = {
  '/linux/': linux(),
}

function linux(): DefaultTheme.SidebarItem[] {
  const { buildLink: link } = sidebarUrlBuilder('/linux/')
  return [
    { text: 'apt', link: link('apt') },
    { text: 'ufw', link: link('ufw') },
  ]
}

export default sidebar
