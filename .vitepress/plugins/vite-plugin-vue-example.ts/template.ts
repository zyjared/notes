export function generateCodeGroup(code: string) {
  const details: [string, string][] = [
    ['style', 'css'],
    ['template', 'html'],
    ['script', 'ts'],
  ]

  return parseCodeByText(code, details)
}

function parseCodeByText(content: string, details: [string, string][]) {
  const codes = details.reduce((acc, tag) => (
    {
      ...acc,
      [tag[0]]: matchAllTags(content, tag[0]).map(code => code.code).join('\n'),
    }
  ), {})

  return details
    .map(tag => codes[tag[0]] ? `\`\`\`${tag[1]}\n${codes[tag[0]]}\n\`\`\`` : '')
    .filter(Boolean)
    .join('\n\n')
}

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

function matchAllTags(content: string, tag: string) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi')
  const matches: CodeInfo[] = []
  let match: RegExpExecArray | null

  do {
    match = regex.exec(content)

    if (match) {
      const startLine = lineCount(content.slice(0, match.index))
      const endLine = startLine + lineCount(match[0])
      let code = match[1]

      // 如果是标签
      if (/^\s+</.test(code)) {
        const match = code.match(/(\r?\n)(\s+)</)
        const spaceNum = match ? match[2].length : 0
        if (spaceNum > 0) {
          const regex = new RegExp(`(\\r?\\n)(\\s{${spaceNum}})`, 'g')
          code = code.replace(regex, '\n')
        }
      }

      matches.push({
        code: code.trim(),
        start: match.index,
        end: match.index + match[0].length,
        startLine,
        endLine,
      })
    }
  } while (match)

  return matches
}

function lineCount(content: string) {
  let count = 0
  for (const ch of content) {
    if (ch === '\n')
      count++
  }
  return count
}
