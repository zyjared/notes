import path from 'node:path'

export function relPath(from: string, to: string) {
  const p = path.relative(path.dirname(from), to).replaceAll(path.sep, '/')
  return p.startsWith('.') ? p : `./${p}`
}
