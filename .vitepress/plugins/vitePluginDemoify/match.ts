interface CodeInfo {
  /**
   * 字符串的起始位置
   */
  start: number
  /**
   * 字符串的结束位置
   */
  end: number
  /**
   * 起始行号
   */
  startLine: number
  /**
   * 结束行号
   */
  endLine: number
  code: string
}

export function matchAllTags(content: string, tag: string) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi')
  const matches: CodeInfo[] = []
  let match: RegExpExecArray | null

  do {
    match = regex.exec(content)

    if (match) {
      const startLine = lineCount(content.slice(0, match.index))
      const endLine = startLine + lineCount(match[0])

      matches.push({
        code: fromatCode(match[1]),
        start: match.index,
        end: match.index + match[0].length,
        startLine,
        endLine,
      })
    }
  } while (match)

  return matches
}

/**
 * 去除多余的空格
 */
function fromatCode(code: string) {
  if (!/^\s+</.test(code))
    return code.trim()

  const match = code.match(/(\r?\n)(\s+)</)
  const spaceNum = match ? match[2].length : 0

  if (spaceNum === 0)
    return code.trim()

  const regex = new RegExp(`(\\r?\\n)(\\s{${spaceNum}})`, 'g')
  return code.replace(regex, '\n').trim()
}

function lineCount(content: string) {
  let count = 0
  for (const ch of content) {
    if (ch === '\n')
      count++
  }
  return count
}
