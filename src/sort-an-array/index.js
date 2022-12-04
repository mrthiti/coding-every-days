/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function ({ nums }) {
  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  function heap(i, len) {
    let max = i
    let left = i * 2 + 1
    let right = i * 2 + 2

    if (left < len && nums[left] > nums[max]) max = left
    if (right < len && nums[right] > nums[max]) max = right

    if (i != max) {
      swap(i, max)
      heap(max, len)
    }
  }

  const mid = Math.floor(nums.length / 2)

  for (let i = mid; i >= 0; i--) {
    heap(i, nums.length)
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    swap(0, i)
    heap(0, i)
  }

  return nums
}
