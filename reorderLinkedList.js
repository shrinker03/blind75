/*


🧠 Memory Card: Reorder Linked List
Problem:
Rearrange a linked list L0 → L1 → … → Ln
into L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
Do this in-place.

💡 Key Insight:
Split list in half → reverse 2nd half → merge both.

🔁 Pattern:
Two Pointers + Reverse Linked List + Merge Lists

🧩 Approach:
Find the middle using slow & fast pointers.

Reverse second half of the list.

Merge the first and reversed second halves.

🧠 Why It Works:
Reordering alternates from front and back.

Reversing 2nd half brings Ln, Ln-1… next to L0.

Merging interleaves both halves.

⏱️ Time Complexity:
O(n) – Each step traverses the list once.

🗃️ Space Complexity:
O(1) – In-place, no extra list used.


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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) { // this loop is to find the second half
        slow = slow.next;
        fast = fast.next.next
    }

    let second = slow.next;
    let prev = null;
    slow.next = null;
    
    while(second) { // this loop is to reverse the second half
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp
    }

    let first = head;
    second = prev;

    while (second) {
        temp1 = first.next;
        temp2 = second.next;
        first.next = second
        second.next = temp1;
        first = temp1
        second = temp2
    }
    
};