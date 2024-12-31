import path from 'node:path'
import { matchAllTags } from './match'
import { relPath as relativePath } from './path'

export interface TransformOptions {
  source: string
  file: string
  code: string

  templatePath: string

  utils: {
    relativePath: typeof relativePath
    getCodeGroup: typeof getCodeGroup
  }
}

export function transformCodeToMd(options: Omit<TransformOptions, 'utils' | 'templatePath'>, transform: (ctx: TransformOptions) => string = defaultTransform) {
  const { source, file } = options
  const templatePath = relativePath(file, source)
  return transform({
    ...options,
    templatePath,
    utils: { relativePath, getCodeGroup },
  })
}

function defaultTransform(options: TransformOptions) {
  const { templatePath, file, code } = options
  const codeGroup = getCodeGroup(code)
  const title = path.basename(file, path.extname(file))

  return getDefaultTemplate({ templatePath, title, codeGroup })
}

function getDefaultTemplate(opts: Record<'templatePath' | 'title' | 'codeGroup', string>) {
  const { templatePath, title, codeGroup } = opts
  return [
    '<script setup>',
    `import Code from '${templatePath}'`,
    '</script>',
    '',
    `# ${title}`,
    '',
    '## 效果',
    '',
    '<Code />',
    '',
    '## 源码',
    '',
    ':::code-group',
    codeGroup,
    ':::',
  ].join('\n')
}

/**
 * `grupMap`:
 * - `{ style: 'css' }` css 代码
 * - `{ style: 'css [样式]' }` css 代码，文件名为 '样式'
 */
function getCodeGroup(content: string, groupMap: Partial<Record<'style' | 'template' | 'script', string>> = {}) {
  const maps = {
    style: 'css [style]',
    template: 'html [template]',
    script: 'typescript [script]',
    ...groupMap,
  }
  const codes = Object.entries(maps).reduce((acc, [k, _v]) => (
    {
      ...acc,
      [k]: matchAllTags(content, k).map(code => code.code).join('\n'),
    }
  ), {})

  return Object.entries(maps)
    .map(([k, v]) => codes[k] ? `\`\`\`${v}\n${codes[k]}\n\`\`\`` : '')
    .filter(Boolean)
    .join('\n\n')
}
