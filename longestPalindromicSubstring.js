/* Level = 2/5 => Definitely need to solve this again

🧠 Problem: Longest Palindromic Substring
Leetcode: 5. Longest Palindromic Substring
Category: Expand Around Center, String

🔍 Problem Summary:
Given a string s, return the longest palindromic substring in it.

💡 Approach:

Loop through each index i in the string

Expand around center:

Odd length: center at i

Even length: center between i and i+1

At each expansion, update result if the current palindrome is longer

🧩 Time Complexity: O(n²)
📦 Space Complexity: O(1)


*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    let resLength = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        while (l >=0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > resLength) {
                res = s.slice(l, r+1);
                resLength = r - l + 1
            }
            l -= 1;
            r += 1;
        }

        l = i;
        r = i+1;

        while (l >=0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > resLength) {
                res = s.slice(l, r+1);
                resLength = r - l + 1
            }
            l -= 1;
            r += 1;
        }
    }

    return res;
    
};