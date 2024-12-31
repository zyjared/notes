import path from 'node:path'
import fs from 'fs-extra'

export function cleanup(resolveFiles: Set<string>, outpath: string) {
  const dirmap: Record<string, Set<string>> = {}

  resolveFiles.forEach((source: string) => {
    const { savedir, file } = getPathMap(source, outpath)
    const s = dirmap[savedir] || (dirmap[savedir] = new Set())
    s.add(file)
  })

  const savedirs = Object.keys(dirmap)
  for (let i = 0; i < savedirs.length; i++) {
    const savedir = savedirs[i]
    if (!fs.existsSync(savedir)) {
      continue
    }

    fs.readdirSync(savedir).forEach((file) => {
      const filepath = path.join(savedir, file)
      if (file !== 'index.md' && !dirmap[savedir].has(filepath)) {
        fs.removeSync(filepath)
      }
    })
  }
}

export function getPathMap(source: string, outpath: string) {
  const savedir = path.resolve(source, '../', outpath)
  const file = path.join(savedir, `${path.basename(source, '.vue')}.md`)

  return { savedir, file, source }
}
