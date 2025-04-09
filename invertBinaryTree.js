/* Level - 5/5 => Good to skip but can be done again

🧠 Memory Card: Invert Binary Tree
📝 Problem Summary
Invert a binary tree — swap every left and right child node recursively.
(Also known as mirroring the tree.)

🔁 Pattern
DFS + Recursion

Visit each node.

Swap its children.

Recur on the new left and right.

🧩 Approach
If the node is null, return null.

Swap its left and right child.

Recursively call invertTree() on both children.

Return the root.

⏱️ Time Complexity:
O(n) — Every node is visited once.

🗃️ Space Complexity:
O(h) — Call stack height (h = tree height).
Worst case: O(n) (skewed tree), Best case: O(log n) (balanced tree).


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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};