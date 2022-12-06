/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
export default function ({ arr }) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.pop()
      arr.splice(i, 0, 0)
      i++
    }
  }
}
