import fn from "../src/longest-substring-without-repeating-characters/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Longest Substring Without Repeating Characters", () => {
  const testCases = [
    {
      inputs: { s: "abcabcbb" },
      expectResult: 3,
    },
    {
      inputs: { s: "bbbbb" },
      expectResult: 1,
    },
    {
      inputs: { s: "pwwkew" },
      expectResult: 3,
    },
    {
      inputs: { s: "dvdf" },
      expectResult: 3,
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
