/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function ({ nums, target }) {
  const s = {}
  for (let i = 0; i < nums.length; i++) {
    const twoNum = target - nums[i]
    if (twoNum in s) {
      return [s[twoNum], i]
    }
    s[nums[i]] = i
  }
}
