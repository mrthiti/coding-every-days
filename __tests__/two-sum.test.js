import fn from "../src/two-sum/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Two Sum", () => {
  const testCases = [
    {
      inputs: { nums: [2, 7, 11, 15], target: 9 },
      expectResult: [0, 1],
    },
    {
      inputs: { nums: [3, 2, 4], target: 6 },
      expectResult: [1, 2],
    },
    {
      inputs: { nums: [3, 3], target: 6 },
      expectResult: [0, 1],
    },
    {
      inputs: { nums: [3, 3, 20, 44], target: 47 },
      expectResult: [1, 3],
    },
    {
      inputs: { nums: [100, 55, 3, 88, 9], target: 109 },
      expectResult: [0, 4],
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
