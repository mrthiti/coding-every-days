import fn from "../src/find-the-duplicate-number/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Find the Duplicate Number", () => {
  const testCases = [
    { inputs: { nums: [1, 3, 4, 2, 2] }, expectResult: 2 },
    { inputs: { nums: [3, 1, 3, 4, 2] }, expectResult: 3 },
    { inputs: { nums: [3, 1, 4, 4, 2] }, expectResult: 4 },
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
