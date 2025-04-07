/* Level => 4 / 5 => Would be good to give it a try once again

🧠 Memory Card: Detect Cycle in a Linked List
Problem:
Given a linked list, determine if it contains a cycle.

✅ Key Insight:
Use two pointers (slow and fast).
If there's a cycle, they will eventually meet inside the loop.

🔁 Pattern:
Floyd’s Tortoise and Hare
(Two Pointer / Fast & Slow Pointer)

🧩 Approach:
Initialize two pointers: slow = head, fast = head.

Move slow by 1 step, fast by 2 steps.

If slow === fast at any point → cycle exists.

If fast reaches null → no cycle.

🧠 Why It Works:
If there's a loop, fast pointer "laps" the slow one.
No loop means fast pointer hits null.

⏱️ Time Complexity:
O(n) – Every node is visited at most twice.

🗃️ Space Complexity:
O(1) – No extra space used.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }
    
    return false;
};