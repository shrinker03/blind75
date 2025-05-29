/* Level = 1/5 => Do it one more time

🧠 Problem: Word Break
Leetcode: 139
Category: Dynamic Programming, String

🔍 Problem Summary:
Given a string s and a list of words wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.

💡 Approach (Bottom-Up DP):

Use dp[i] to track if s[0..i-1] can be broken successfully

Base case: dp[0] = true (empty string is valid)

For each i, check all j < i:

If dp[j] is true and s[j..i-1] is in the dictionary → set dp[i] = true

🧩 Time Complexity: O(n²)
📦 Space Complexity: O(n)


*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true; // empty string is always breakable

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};