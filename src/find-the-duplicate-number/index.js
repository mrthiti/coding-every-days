/**
 * @param {number[]} nums
 * @return {number}
 */
export default function ({ nums }) {
  const temp = {}
  for (it of nums) {
    if (temp[it]) {
      return it
    }
    temp[it] = true
  }
}
