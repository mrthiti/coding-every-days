import fn from "../src/sort-an-array/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Sort an array", () => {
  const largeArr = new Array(999843).fill(0).map((it, i) => i + 1)

  const testCases = [
    {
      inputs: { nums: [5, 2, 3, 1] },
      expectResult: [1, 2, 3, 5],
    },
    {
      inputs: { nums: [5, 1, 1, 2, 0, 0] },
      expectResult: [0, 0, 1, 1, 2, 5],
    },
    {
      inputs: { nums: largeArr },
      expectResult: largeArr,
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
