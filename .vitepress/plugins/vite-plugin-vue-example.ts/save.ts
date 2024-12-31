import path from 'node:path'
import fs from 'fs-extra'

export function saveCode(code: string, file: string) {
  fs.ensureDirSync(path.resolve(file, '../'))

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, code)
    return true
  }

  const content = fs.readFileSync(file, 'utf-8')
  if (content !== code) {
    fs.writeFileSync(file, code)
    return true
  }

  return false
}
