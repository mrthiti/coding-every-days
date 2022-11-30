export const prepareInputsTestCaseText = (inputs) => {
  let inputStringArr = []
  for (const it in inputs) {
    const toStringValue =
      typeof inputs[it] == "object" ? JSON.stringify(inputs[it]) : inputs[it]

    inputStringArr.push(`${it}=${toStringValue}`)
  }

  return inputStringArr.join(", ")
}

export const prepareExpectTestCaseText = (expectResult) => {
  return typeof expectResult == "object"
    ? JSON.stringify(expectResult)
    : expectResult
}
