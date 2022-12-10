import fn from "../src/longest-palindromic-substring/index.js"
import {
  prepareInputsTestCaseText,
  prepareExpectTestCaseText,
} from "../utils/testUtils.js"

describe("Longest Palindromic Substring", () => {
  const testCases = [
    {
      inputs: { s: "babad" },
      expectResult: "aba",
    },
    {
      inputs: { s: "cbbd" },
      expectResult: "bb",
    },
    {
      inputs: { s: "abdgpepgdlmki" },
      expectResult: "dgpepgd",
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
