/* Level => 4/5 => If done previous question, this can be skipped

🧠 Problem: Count Substrings (Palindromic)
Leetcode: 647. Palindromic Substrings
Category: Expand Around Center, String

🔍 Problem Summary:
Given a string s, return the number of palindromic substrings in it. A substring is palindromic if it reads the same forward and backward.

💡 Approach:

For each index i in the string, expand around:

Single center (odd-length palindromes)

Double center (even-length palindromes)

Count and accumulate valid expansions

🧩 Time Complexity: O(n²)
📦 Space Complexity: O(1)



*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0;

    function countPalindrom(left, right, s) {
        let res = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            res += 1;
            left -= 1;
            right += 1;
        }
        return res;
    }

    for (let i = 0; i < s.length; i++) {
        res += countPalindrom(i, i, s); //odd
        res += countPalindrom(i, i + 1, s); //even
    }

    return res;

};