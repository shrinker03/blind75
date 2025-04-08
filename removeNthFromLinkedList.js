/* Level - 4/5:- Good to revisit sometime in future

🧠 Memory Card: Remove N-th Node From End of List
Problem:
Remove the n-th node from the end of a singly linked list.

💡 Key Insight:
Use a dummy node and two pointers.
Keep a gap of n between slow and fast pointers.

🧩 Approach:
Create a dummy node pointing to head.

Move fast pointer n + 1 steps ahead.

Move both slow and fast until fast hits null.

Remove slow.next node.

🧠 Why It Works:
Gap of n ensures slow is just before the node to delete.

Dummy handles edge cases like removing the head node.

⏱️ Time Complexity:
O(n) – Single pass through the list.

🗃️ Space Complexity:
O(1) – In-place.



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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head); // dummy handles edge case like removing head
    let slow = dummy;
    let fast = dummy;

    // Move fast pointer n+1 steps ahead so there's a gap of n nodes
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove the nth node from end
    slow.next = slow.next.next;

    return dummy.next;
};