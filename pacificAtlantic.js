/*

🧠 Flash Card – Pacific Atlantic Water Flow
❓ Problem
Given a matrix heights representing heights of land cells, water can flow from a cell to another if the next cell is equal or lower in height.
You need to find all cells from which water can flow to both the Pacific and Atlantic oceans.

Pacific touches the top and left edges.

Atlantic touches the bottom and right edges.

✅ Core Idea / Approach
Use DFS or BFS starting from ocean borders inward, not the other way around!

Mark all cells reachable by Pacific and Atlantic oceans separately.

The result is the intersection of the two reachability sets.

🔁 Steps
Create two sets: pacific, atlantic for reachable cells.

Run DFS from:

Top & Left edges → mark for Pacific.

Bottom & Right edges → mark for Atlantic.

For each cell:

If it's in both sets → add to result.

🧩 Key Insight
Reverse the thinking: simulate water flowing in from oceans (not out from each cell).

Use DFS with non-decreasing path condition (next >= current).

🛠️ Complexity
Time: O(m * n) – Each cell is visited at most twice (once for each ocean).

Space: O(m * n) – For visited sets and recursion stack.



*/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const paci = {};
    const atlan = {};

    const result = [];

    function dfs(r, c, visit, prevHeight) {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            visit[`${r},${c}`] ||
            heights[r][c] < prevHeight
        ) return;
        visit[`${r},${c}`] = true;
        dfs(r + 1, c, visit, heights[r][c]);
        dfs(r - 1, c, visit, heights[r][c]);
        dfs(r, c + 1, visit, heights[r][c]);
        dfs(r, c - 1, visit, heights[r][c]);
    }

    for (let i = 0; i < cols; i++) {
        dfs(0, i, paci, heights[0][i]);
        dfs(rows - 1, i, atlan, heights[rows - 1][i])
    };

    for (let i = 0; i < rows; i++) {
        dfs(i, 0, paci, heights[i][0]);
        dfs(i, cols - 1, atlan, heights[i][cols - 1])
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (paci[`${i},${j}`] && atlan[`${i},${j}`]) {
                result.push([i, j])
            }
        }
    }

    return result;

};