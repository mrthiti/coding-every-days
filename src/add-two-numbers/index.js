export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function ({ l1, l2 }) {
  let result = null
  let headL1 = l1
  let headL2 = l2
  let headResult = null
  let carry = 0
  while (headL1 || headL2) {
    let valL1 = headL1?.val || 0
    let valL2 = headL2?.val || 0
    let sum = valL1 + valL2 + carry

    if (!result) {
      result = new ListNode(sum % 10)
      headResult = result
    } else {
      headResult.next = new ListNode(sum % 10)
      headResult = headResult.next
    }

    carry = Math.floor(sum / 10)
    headL1 = headL1?.next
    headL2 = headL2?.next

    if (!headL1?.next && !headL2?.next && carry != 0) {
      headResult.next = new ListNode(carry)
    }
  }

  return result
}
