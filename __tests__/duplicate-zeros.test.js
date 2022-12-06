import fn from "../src/duplicate-zeros/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Duplicate Zeros", () => {
  const testCases = [
    {
      inputs: { arr: [1, 0, 2, 3, 0, 4, 5, 0] },
      expectResult: [1, 0, 0, 2, 3, 0, 0, 4],
    },
    {
      inputs: { arr: [1, 2, 3] },
      expectResult: [1, 2, 3],
    },
  ]

  for (const testCase of testCases) {
    const { inputs, expectResult } = testCase

    let inputText = prepareInputsTestCaseText(inputs)
    let expectText = prepareExpectTestCaseText(expectResult)

    test(`imput: ${inputText} | expect: ${expectText}`, () => {
      fn(inputs)
      expect(inputs.arr).toStrictEqual(expectResult)
    })
  }
})
