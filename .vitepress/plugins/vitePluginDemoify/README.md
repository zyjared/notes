# vite-plugin-demoify

将 `.vue` 文件转换为 vitepress 使用的 `.md` 文件。

> 需要将 `.vue` 文件放在[源目录](https://vitepress.dev/zh/guide/routing#source-directory)。

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({

  vite: {
    plugins: [
      demoifyPlugin({
        // 需要转换的文件，相对于 process.cwd()
        includes: ['pages/examples/**/*.vue'], //

        // 输出位置，相对于原 .vue 文件
        outpath: '../docs',

      // transform(ctx) { ... }
      })
    ],
  },

  // ...
})
```
