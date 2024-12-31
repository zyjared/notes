import type { Plugin } from 'vitepress'
import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import { error, success } from '../utils/log'
import { cleanup, getPathMap } from './prepare'
import { removeMdFile } from './remove'
import { saveCode } from './save'
import { transformCodeToMd } from './transform'

interface Options {
  /**
   * 哪些文件或文件夹需要转换成示例
   */
  includes: string[]
  /**
   * 存储位置，默认在同级的 docs 文件夹
   */
  outpath?: string
}

interface HandleMdFileOptions {
  file: string
  source: string
  server?: any
  silent?: boolean
  type?: 'add' | 'unlink' | 'change'
}

function handleMdFile(options: HandleMdFileOptions) {
  const { file, source, type, silent } = options

  let res = true

  if (type === 'unlink') {
    removeMdFile(file)
    !silent && error(`delete ${source}`)
  }
  else {
    const code = fs.readFileSync(source, 'utf-8')
    const transformedCode = transformCodeToMd(code, source, file)

    res = saveCode(transformedCode, file)
    res && !silent && success(`➜ ${file}`)
  }

  //   if (res && server) {
  //     server.ws.send({
  //       type: 'full-reload',
  //       path: `*`,
  //     })
  //   }

  return res
}

export default function examplePlugin(options: Options): Plugin {
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
    name: 'vue-to-example',
    buildStart() {
      cleanup(resolveFiles, outpath)
      resolveFiles.forEach((source: string) => {
        handleMdFile({ ...getPathMap(source, outpath), type: 'add', silent: true })
      })
    },

    configureServer(server) {
      const opts = {
        outpath,
        server,
      }

      server.watcher.on(
        'add',
        source => handleFileIfMatch({ ...opts, source, type: 'add' }),
      )
      server.watcher.on(
        'unlink',
        source => handleFileIfMatch({ ...opts, source, type: 'unlink' }),
      )
      server.watcher.on(
        'change',
        source => handleFileIfMatch({ ...opts, source, type: 'change' }),
      )
    },
  }
}
