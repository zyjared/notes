export function countCharacters(text: string) {
  const chineseCount = (text.match(/[\u4E00-\u9FA5]/g) || []).length
  const englishCount = text.length - chineseCount
  return chineseCount * 2 + englishCount
}
