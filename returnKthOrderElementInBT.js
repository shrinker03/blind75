/*

🃏 Flashcard: Kth Smallest Element in a BST
Problem:
Find the k-th smallest element in a Binary Search Tree.

Approach:
Use in-order traversal (left ➝ root ➝ right) since it gives elements in sorted order in a BST. Track visited nodes until you reach the k-th one.

Key Point:

In-order traversal of a BST gives values in ascending order.

Keep a counter while traversing; stop when you reach the k-th smallest.

Time Complexity:

✅ Average: O(H + k), where H is the height of the tree

🔻 Worst-case: O(n) if the tree is skewed

Space Complexity:

O(H) for recursion stack

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // recursive
    function inOrder(node) {
        if (!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)];
    }

    const sorted = inOrder(root);
    return sorted[k - 1];
};