import type { Plugin } from 'vitepress'
import type { TransformOptions } from './transform'
import fg from 'fast-glob'
import fs from 'fs-extra'
import { error, success } from './log'
import { cleanup, getPathMap } from './prepare'
import { saveCode } from './save'
import { transformCodeToMd } from './transform'

interface Options {
  /**
   * 需要转换成示例的文件夹或文件
   */
  includes: string[]
  /**
   * 相对存储位置，相对于 .vue 文件
   *
   * @default 'docs'
   */
  outpath?: string

  transform?: (ctx: TransformOptions) => string
}

interface HandleMdFileOptions {
  file: string
  source: string
  server?: any
  silent?: boolean
  type?: 'add' | 'unlink' | 'change'
  transform?: (ctx: TransformOptions) => string
}

function handleMdFile(options: HandleMdFileOptions) {
  const { file, source, type, silent, transform } = options

  let res = true

  if (type === 'unlink') {
    fs.removeSync(file)
    !silent && error(`delete ${source}`)
  }
  else {
    const code = fs.readFileSync(source, 'utf-8')
    const transformedCode = transformCodeToMd({ code, source, file }, transform)

    res = saveCode(transformedCode, file)
    res && !silent && success(`➜ ${file}`)
  }

  return res
}

export function demoifyPlugin(options: Options): Plugin {
  const { outpath = 'docs', includes } = options

  const resolveFiles = new Set(fg.globSync(includes, {
    absolute: true,
  }))

  const handleFileIfMatch = (options: Omit<HandleMdFileOptions, 'file' | 'code'>) => {
    options.source = options.source.replace(/\\/g, '/')
    const { source, type } = options

    if (type === 'add') {
      resolveFiles.add(source)
    }

    if (!(source.endsWith('.vue') && (resolveFiles.has(source)))) {
      return
    }

    handleMdFile({
      ...options,
      ...getPathMap(source, outpath),
    })

    if (type === 'unlink') {
      resolveFiles.delete(source)
    }
  }

  return {
    name: 'vite-plugin-demoify',
    async buildStart() {
      await cleanup(resolveFiles, outpath)
      resolveFiles.forEach((source: string) => {
        handleMdFile({ ...getPathMap(source, outpath), type: 'add', silent: true })
      })
    },

    configureServer(server) {
      const types = ['add', 'unlink', 'change'] as const
      types.forEach((type) => {
        server.watcher.on(type, source => handleFileIfMatch({ server, source, type }))
      })
    },
  }
}
