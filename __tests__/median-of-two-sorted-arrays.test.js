import fn from "../src/median-of-two-sorted-arrays/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Median of Two Sorted Arrays", () => {
  const testCases = [
    {
      inputs: { nums1: [1, 3], nums2: [2] },
      expectResult: 2.0,
    },
    {
      inputs: { nums1: [1, 2], nums2: [3, 4] },
      expectResult: 2.5,
    },
    {
      inputs: {
        nums1: [14, 15, 17, 99, 999],
        nums2: [3, 4, 13, 1500, 4000, 4500],
      },
      expectResult: 17,
    },
  ]

  for (const testCase of testCases) {
    const { inputs, expectResult } = testCase

    let inputText = prepareInputsTestCaseText(inputs)
    let expectText = prepareExpectTestCaseText(expectResult)

    test(`imput: ${inputText} | expect: ${expectText}`, () => {
      expect(fn(inputs)).toStrictEqual(expectResult)
    })
  }
})
