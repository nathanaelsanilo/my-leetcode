/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let p1 = head; // fast
  let p2 = head; // slow

  while (p1 !== null && p1.next !== null) {
    p1 = p1.next.next;
    p2 = p2.next;

    if (p1 === p2) return true;
  }

  return false;
}
