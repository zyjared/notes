import type { DefaultTheme } from 'vitepress'
import api from './api'
import learn from './learn'

const sidebar: DefaultTheme.SidebarMulti = {
  '/java/learn/': learn(),
  '/java/api/': api(),
}

export default sidebar
