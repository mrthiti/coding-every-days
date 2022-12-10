/**
 * @param {string} s
 * @return {string}
 */
export default function ({ s }) {
  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    const len1 = expand(s, i, i)
    const len2 = expand(s, i, i + 1)
    const maxLen = Math.max(len1, len2)

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2)
      end = i + Math.floor(maxLen / 2)
    }
  }

  return s.substring(start, end + 1)
}

function expand(s, left, right) {
  const len = s.length
  let l = left
  let r = right
  while (l >= 0 && r < len && s[l] == s[r]) {
    l--
    r++
  }

  return r - l - 1
}
