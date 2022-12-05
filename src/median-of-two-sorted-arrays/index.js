/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export default function ({ nums1, nums2 }) {
  const len1 = nums1.length
  const len2 = nums2.length
  const maxLen = len1 + len2
  const medianNum = [0, 0]
  let a = 0
  let b = 0

  for (let i = 0; i <= Math.floor(maxLen / 2); i++) {
    if (nums1[a] < nums2[b] || b == len2) {
      medianNum.shift()
      medianNum.push(nums1[a++])
    } else {
      medianNum.shift()
      medianNum.push(nums2[b++])
    }
  }

  if (maxLen % 2 == 0) {
    return (medianNum[0] + medianNum[1]) / 2
  } else {
    return medianNum[1]
  }
}
