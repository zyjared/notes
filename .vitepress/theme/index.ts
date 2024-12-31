import type { Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/vue3'

import DefaultTheme from 'vitepress/theme'
import Layout from './layout/Layout.vue'
import './styles/main.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    // @ts-expect-error-error
    if (!import.meta.env.SSR) {
      app.use(Particles, {
        init: async (engine: Engine) => {
          return await loadSlim(engine)
        },
      })
    }
  },
}
