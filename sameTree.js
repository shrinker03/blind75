/*

🧠 Memory Card: Same Tree
📝 Problem Summary
Given two binary trees p and q, determine if they are structurally identical and have equal node values.

🔁 Pattern
Depth-First Search (DFS) + Recursion

🧩 Approach
If both nodes are null → return true.

If one is null and the other isn't, or values differ → return false.

Recursively check:

isSameTree(p.left, q.left)

isSameTree(p.right, q.right)

Return true only if both subtrees match.

✅ Example:
js
Copy
Edit
p:    1        q:    1
     / \            / \
    2   3          2   3
// Output: true
⏱️ Time Complexity:
O(n) — where n is the number of nodes in the smaller tree.

🗃️ Space Complexity:
O(h) — due to recursion stack (h = height of the tree).

💡 Key Insight:
This is a classic tree comparison using DFS recursion.

Both structure and values must match exactly.


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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};