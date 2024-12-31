import antfu from '@antfu/eslint-config'

// https://github.com/antfu/eslint-config
export default antfu(
  {
    typescript: true,
    vue: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
)
