import type { DefaultTheme } from 'vitepress'
import css from './css'

const sidebar: DefaultTheme.SidebarMulti = {
  '/examples/css/': css(),
}

export default sidebar
