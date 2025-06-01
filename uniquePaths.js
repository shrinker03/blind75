/* Level => 3/5 => Would be good to solve again

🔍 Problem Summary:
Given an m x n grid, count how many unique paths exist from the top-left to the bottom-right corner by only moving right or down.

💡 Approach (Bottom-Up DP):

Use a 2D dp table where dp[i][j] = number of ways to reach cell (i, j)

Base case: first row & column = 1 (only one way to move)

Transition:
dp[i][j] = dp[i-1][j] + dp[i][j-1]

🧩 Time Complexity: O(m × n)
📦 Space Complexity: O(m × n) (or O(n) with 1D array)

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]
};