import path from 'node:path'
import fs from 'fs-extra'

export async function cleanup(resolveFiles: Set<string>, outpath: string) {
  const dirmap: Record<string, Set<string>> = {}

  resolveFiles.forEach((source: string) => {
    const { savedir, file } = getPathMap(source, outpath)
    if (!dirmap[savedir]) {
      dirmap[savedir] = new Set()
    }
    dirmap[savedir].add(file)
  })

  const savedirs = Object.keys(dirmap).filter(fs.existsSync)

  for (const savedir of savedirs) {
    const files = await fs.readdir(savedir)
    await Promise.all(files.map(async (file) => {
      const filepath = path.resolve(savedir, file)
      if (file !== 'index.md' && !dirmap[savedir].has(filepath)) {
        await fs.remove(filepath)
      }
    }))
  }
}

export function getPathMap(source: string, outpath: string) {
  const savedir = path.resolve(source, '../', outpath)
  const file = path.join(savedir, `${path.basename(source, '.vue')}.md`)

  return { savedir, file, source }
}
