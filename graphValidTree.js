/* Level - 4/5 => Can be skipped if recall

🧠 Problem: Graph Valid Tree
Platform: LintCode / LeetCode 261
Category: Graph, DFS, Cycle Detection, Connectivity

🔍 Problem Summary:
Given n nodes and a list of undirected edges, return true if the graph is a valid tree (i.e., connected and acyclic).

💡 Approach:

Use DFS to check for cycles and connectivity.

Track visited nodes in a Set.

Use prev to avoid false-positive cycles from undirected edges.

After DFS, check if all nodes were visited (visited.size === n).

✅ Conditions for a valid tree:

No cycles → detect during DFS

Fully connected → ensure all nodes are visited from node 0

🧩 Time Complexity: O(n + e)
📦 Space Complexity: O(n + e)
Where n is number of nodes, e is number of edges

*/

export class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    validTree(n, edges) {
      // write your code here
      const visited = new Set();
      const adjacent = {};
  
      for (let i = 0; i < n; i++) {
        adjacent[i] = [];
      }
  
      for (let [n1, n2] of edges) {
        adjacent[n1].push(n2);
        adjacent[n2].push(n1);
      };
  
      function dfs (node, prev) {
        if (visited.has(node)) return false;
        visited.add(node);
        for (let i = 0; i < adjacent[node].length; i++) {
          if (adjacent[node][i] === prev) {
            continue;
          }
          if (!dfs(adjacent[node][i], node)) return false;
        }
        return true;
      }
  
      return dfs(0, -1) && n === visited.size;
    }
  }