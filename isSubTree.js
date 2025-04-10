/* Level - 4/5 : Can give it a try once more

🧠 Flash Card: Subtree of Another Tree
Problem:
Check if subRoot is a subtree of root.

Approach:

Use recursion to compare root and subRoot.

Helper isSameTree() checks for full tree equality.

Traverse root and compare each subtree with subRoot.

Key Conditions:

If subRoot is null → ✅ true

If root is null → ❌ false

If root.val === subRoot.val, check isSameTree()

Otherwise, check root.left or root.right

Time: O(m * n) in worst case
Space: O(h) recursion stack (tree height)

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    
    function isSameTree(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2 || t1.val !== t2.val) return false;

        if (isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)) return true;
    }

    if (isSameTree(root, subRoot)) return true;

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};