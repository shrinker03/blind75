/* Level : 3/5

🃏 Memory Card: Merge Two Sorted Linked Lists
📝 Problem Summary
You're given two sorted singly linked lists, list1 and list2.
Your task is to merge them into one sorted linked list, and return its head.

🔍 Approach: Iterative Merge with Dummy Node
Create a dummy node to build the new list.

Use a tail pointer to track the end of the merged list.

Compare the values of list1 and list2.

Append the smaller node to tail.next.

Move the pointer of the list from which the node was taken.

Continue until one list is fully traversed.

Attach the remaining part of the other list.

Return dummy.next (actual head of the merged list).

⏳ Complexity Analysis
Time Complexity: O(n + m)
(You visit every node from both lists once.)

Space Complexity: O(1)
(No extra memory used; you just relink nodes.)

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * } [...l1, ...l2].sort((a, b) => a - b)
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next
    }

    if (list1) {
        tail.next = list1
    }
    if (list2) {
        tail.next = list2
    }
    return dummy.next;
};