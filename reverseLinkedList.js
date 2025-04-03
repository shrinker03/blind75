
/* Level : 4 / 5 => Good to revisit

🃏 Memory Card: Reverse a Linked List
📝 Problem Summary
Given the head of a singly linked list, reverse the list and return the new head.

🔍 Approach
✅ Iterative Two-Pointer Approach

Use two pointers: prev (stores reversed part) and current (traverses the list).

Store current.next in nextNode (to avoid losing reference).

Reverse current.next to point to prev.

Move prev and current forward.

Return prev (new head).

✅ Recursive Approach

Base case: If head is null or only one node, return head.

Recursively reverse the rest of the list.

Make head.next.next = head to reverse pointers.

Set head.next = null (to avoid cycles).

⏳ Complexity Analysis
Time Complexity: O(N) (Visit each node once)

Space Complexity: O(1) (Iterative) / O(N) (Recursive due to call stack)

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
};