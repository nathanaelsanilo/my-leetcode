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

function getIntersectionNode(headA, headB) {
  let pointerA = headA; // starting point A
  let pointerB = headB; // starting point B

  // iterate until we pointerA intersected with pointerB
  while (pointerA !== pointerB) {
    if (pointerA !== null) {
      pointerA = pointerA.next;
    } else {
      // change direction of pointerA to headB
      // if pointerA have completed the cycle of linked list A
      pointerA = headB;
    }

    // doing the same thing like pointerA
    // instead for pointerB
    if (pointerB !== null) {
      pointerB = pointerB.next;
    } else {
      pointerB = headA;
    }
  }

  // return result
  if (pointerA === pointerB) return pointerA;

  return null;
}
