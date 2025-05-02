/* Level => 3/5 Solve it again

🧠 Flash Card: Binary Tree Level Order Traversal
Problem:
Return the level-order traversal of a binary tree (i.e., from top to bottom, left to right).

Approach:

Use a queue (BFS)

Push root to queue

For each level:

Track number of nodes (q.length)

Process and push children of each node

Store each level’s values in res

Why it works:

BFS naturally visits nodes level by level.

Time Complexity: O(n)
Space Complexity: O(n) (queue and result array)

📚 Useful for printing trees, solving problems like zigzag traversal, level sums, etc.


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    q = [];
    q.push(root);

    while(q.length) {
        const qLength = q.length;
        const level = [];

        for (let i = 0; i < qLength; i++) {
            let node = q.shift();
            if (node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        if (level.length) {
            res.push(level)
        }
    }

    return res;
};