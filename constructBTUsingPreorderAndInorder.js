/* Level : 3/5 => Need to revisit this after sometime looks like 1of

📘 Flashcard: Construct Binary Tree from Preorder and Inorder Traversals
🧠 Problem Statement
Given two arrays:​

preorder: the preorder traversal of a binary tree​

inorder: the inorder traversal of the same tree​

Reconstruct the original binary tree.​

🔍 Key Concepts

Preorder Traversal: Visits nodes in the order: Root → Left → Right.​

Inorder Traversal: Visits nodes in the order: Left → Root → Right.​

The first element in the preorder array is always the root of the tree. In the inorder array, elements to the left of the root belong to the left subtree, and elements to the right belong to the right subtree.​

🛠️ Approach

Identify the root node from the first element of the preorder array.​

Find the index of this root in the inorder array.​

Recursively build the left subtree using the corresponding segments of preorder and inorder arrays.​

Recursively build the right subtree using the remaining segments.​

⏱️ Time & Space Complexity

Time Complexity: O(n), where n is the number of nodes.​

Space Complexity: O(n), due to the recursion stack and storage used for the tree.​

💡 Optimization Tip
To improve efficiency, use a hashmap to store the indices of elements in the inorder array. This allows for O(1) access when finding the root's index, reducing the overall time complexity.


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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const mid = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};