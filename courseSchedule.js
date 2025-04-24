/* Level => 3/5 => Need to definitely solve it again


🔍 Problem Summary:
You are given numCourses and a list of prerequisite pairs. Return true if you can finish all courses, i.e., no cycles exist in the graph.

💡 Approach:

Represent courses as a directed graph (adjacency list).

Use DFS to detect cycles.

Maintain a Set for the current DFS path (to detect cycles).

Once processed, clear the node’s list to mark it visited (memoization).

🔄 Key Logic:

js
Copy
Edit
if (set.has(course)) return false; // cycle detected
if (map.get(course).length === 0) return true;
🧩 Time Complexity: O(V + E)
📦 Space Complexity: O(V + E)
Where V is number of courses, and E is number of prerequisites.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = new Map();
    const set = new Set();

    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }

   for (let [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }
   
    function dfs(course) {
        if (set.has(course)) return false;
        if (map.get(course) == []) return true;

        set.add(course);
        for (let preq of map.get(course)) {
            if (!dfs(preq)) return false;
        }
        set.delete(course);
        map.set(course, []);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
    
};