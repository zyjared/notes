import path from 'node:path'
import { generateCodeGroup } from './template'

export function transformCodeToMd(code: string, source: string, file: string) {
  const templatePath = relativePath(source, file)
  const group = generateCodeGroup(code)
  return `
<script setup>
import Code from '${templatePath}'
</script>

# ${path.basename(file, path.extname(file))}

## 效果

<Code />

## 源码

::: code-group
${group}
:::
`
}

function relativePath(source: string, file: string) {
  const p = path.relative(path.dirname(file), source)
    .split(path.sep)
    .join('/')

  return p.startsWith('.') ? p : `./${p}`
}
