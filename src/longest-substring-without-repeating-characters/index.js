/**
 * @param {string} s
 * @return {number}
 */
export default function ({ s }) {
  const len = s.length
  const lastIndexs = {}
  let result = 0
  let i = 0
  let j = 0

  while (i < len && j < len) {
    i = Math.max(lastIndexs[s[j]] || 0, i)
    result = Math.max(result, j - i + 1)
    lastIndexs[s[j]] = ++j
  }

  return result
}
