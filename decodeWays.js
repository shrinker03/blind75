/* LEVEL - 0/5 => Need to solve it again

🧠 Problem: Decode Ways
Leetcode: 91
Category: Dynamic Programming, String

🔍 Problem Summary:
Given a string of digits s, return the number of ways to decode it using mapping:
'1' → 'A', '2' → 'B', ..., '26' → 'Z'.

💡 Approach (Bottom-Up DP):

Use two variables (dp1, dp2) to track previous results

At each character i, consider:

One-digit: valid if s[i] !== '0'

Two-digit: valid if 10 ≤ s[i-1..i] ≤ 26

Accumulate counts accordingly and slide the window

⏱ Time Complexity: O(n)
📦 Space Complexity: O(1)

*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] === '0') return 0;

    const n = s.length;
    let dp1 = 1; // Ways to decode up to i-2
    let dp2 = 1; // Ways to decode up to i-1

    for (let i = 1; i < n; i++) {
        let current = 0;

        // Check one-digit (non-zero)
        if (s[i] !== '0') {
            current += dp2;
        }

        // Check two-digit valid number (10–26)
        const twoDigit = parseInt(s.slice(i - 1, i + 1));
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += dp1;
        }

        // Slide the window
        dp1 = dp2;
        dp2 = current;
    }

    return dp2;
};