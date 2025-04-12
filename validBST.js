/* THis is 1 of need to revisit this after some time => 3/5

🧠 Validate Binary Search Tree
Goal: Determine if a binary tree is a valid BST.

✅ BST Rules:
Left subtree values must be strictly less than the current node.

Right subtree values must be strictly greater than the current node.

This rule must apply recursively to all nodes in the tree.

🛠️ Approach:
Use recursive DFS with min–max bounds.

At each node:

Check if its value is within the allowed range.

Recursively validate left and right subtrees with updated bounds.

📦 Time & Space Complexity:
Time: O(n), where n is the number of nodes.

Space: O(h), where h is the height of the tree (due to recursion stack).



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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function valid (node, left, right) {
         if (!node) return true;
 
         if (!(node.val > left && node.val < right)) return false;
 
        return (valid(node.left, left, node.val) &&
         valid(node.right, node.val, right));
    }
 
    return valid(root, -Infinity, Infinity)
 };