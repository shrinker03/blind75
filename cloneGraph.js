/*

🔍 Problem Summary:
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node has a val and a list of neighbors.

💡 Approach:

Use DFS to traverse and clone nodes.

Use a Map to track already cloned nodes (to avoid cycles and re-cloning).

Base case: return null if input node is null.

For each neighbor, recursively clone and push into the clone’s neighbors.

🧩 Time Complexity: O(N)
📦 Space Complexity: O(N)
Where N is the number of nodes in the graph.

*/

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const map = new Map();

    function dfs(curr) {
        if (map.has(curr)) {
            return map.get(curr);
        }

        const copy = new _Node(curr.val);
        map.set(curr, copy);

        for (let neighbor of curr.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    }

    return dfs(node);
};