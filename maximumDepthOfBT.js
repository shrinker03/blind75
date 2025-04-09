/* Level - 5/5 => Good to skip but can be done for fun

🧠 Memory Card: Maximum Depth of Binary Tree
📝 Problem Summary
Given the root of a binary tree, return its maximum depth — the number of nodes along the longest path from the root down to a leaf.

🔁 Pattern
Depth-First Search (DFS) + Recursion

🧩 Approach
Base case: if root is null, return 0.

Recursively compute the depth of the left and right subtrees.

Return 1 + max(leftDepth, rightDepth).

✅ Example:
makefile
Copy
Edit
Input:
     1
    / \
   2   3
  /
 4

Output: 3
⏱️ Time Complexity:
O(n) — Each node is visited once.

🗃️ Space Complexity:
O(h) — Height of the tree (due to recursion stack).
Worst case: O(n) (skewed tree), Best case: O(log n) (balanced tree).

💡 Key Insight:
Maximum depth = 1 (current node) + max depth of left and right subtrees.
Perfect use case for post-order traversal (process children first, then parent).



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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let level = 1;
    
    level += Math.max(maxDepth(root.left), maxDepth(root.right));
    return level;
    
};