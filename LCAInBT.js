/* Level : 3/5 : Definitely need to visit after some time

🧠 Flash Card: Lowest Common Ancestor of a BST
Problem:
Find the lowest common ancestor (LCA) of two nodes p and q in a Binary Search Tree.

Approach:

Use BST property:

If both p and q are greater than current → move right

If both are less → move left

Else → current node is the LCA

Why it works:

The first node where p and q split in direction is their lowest common ancestor.

Time Complexity: O(h)
Space Complexity: O(1) (Iterative version)

🌲 Works only for BSTs, not generic binary trees.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;
    
    while (current) {
        if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } else if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } else {
            return current;
        }
    }
};