import path from 'node:path'
import fs from 'fs-extra'

export function removeMdFile(file: string) {
  fs.removeSync(file)
}
