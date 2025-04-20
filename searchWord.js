/* Level = 1/5 => Need to definitely solve it again

🧠 Problem: Given a 2D board and a word, check if the word exists in the grid by sequentially adjacent letters (no cell reused).
👣 Approach: Backtracking with DFS

🛠️ Steps:

For each cell in board:

Start DFS if board[i][j] === word[0]

In DFS:

Base case: if idx === word.length, return true

Check bounds, match, and visited (use Set to track path)

Explore all 4 directions (up, down, left, right)

Backtrack: remove cell from path after recursion

🧠 Trick: Use Set to track visited cells via row,col keys

⏱️ Time Complexity: O(m * n * 4^L)
📦 Space Complexity: O(L) where L = word.length (recursion depth)

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const path = new Set();

    function dfs(r, c, idx) {
        if (idx === word.length) return true;

        const key = `${r},${c}`;

        if (
            r < 0 || c < 0 || r >= rows || c >= cols ||
            word[idx] !== board[r][c] ||
            path.has(key)
        ) return false;

        path.add(key);

        const res = (
            dfs(r + 1, c, idx + 1) ||
            dfs(r - 1, c, idx + 1) ||
            dfs(r, c + 1, idx + 1) ||
            dfs(r, c - 1, idx + 1)
        );

        path.delete(key);
        return res;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}; 