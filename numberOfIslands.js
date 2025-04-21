/*

🧠 Problem: Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically.

🔍 Approach: DFS + In-place modification

👣 Steps:

Loop through every cell in the grid

When a '1' is found:

Increment island count

Start DFS to mark the entire island (change '1' to '0')

DFS explores all 4 directions: up, down, left, right

💡 Trick: Modify the grid directly to mark visited land (set '1' → '0')

⏱️ Time Complexity: O(m * n)
📦 Space Complexity: O(m * n) in worst case due to recursion stack

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rowLength = grid.length;
    const columnLength = grid[0].length;
    let islandsLength = 0;

    function dfs (r, c) {
        if (r < 0 || r >= rowLength || c < 0 || c >= columnLength || grid[r][c] !== '1') return;
        if (grid[r][c] === '1') {
            grid[r][c] = '0';
            dfs(r+1, c);
            dfs(r, c+1);
            dfs(r-1, c);
            dfs(r, c - 1);
        }
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (grid[i][j] === '1') {
                islandsLength += 1;
                dfs(i, j);
            }
        }
    }

    return islandsLength;
    
};