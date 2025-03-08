import type { Theme as ThemeType } from 'vitepress'
import { loadSlim } from '@tsparticles/slim'

import Particles from '@tsparticles/vue3'
import Layout from './Layout.vue'

import './style.css'

export default {
  Layout,
  async enhanceApp({ app }) {
    // @ts-expect-error-error
    if (!import.meta.env.SSR) {
      app.use(Particles, {
        init: async (engine) => {
          return await loadSlim(engine)
        },
      })
    }
  },
} as ThemeType
