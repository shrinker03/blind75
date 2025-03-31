/*

📝 Problem Summary
Given a string s and an integer k, find the length of the longest substring containing the same letter after replacing at most k characters.

🛠️ Approach: Sliding Window + Frequency Map
Expand the right pointer (right): Track character frequencies in a Map.

Check if the window is valid:

(window size) - (max frequency character count) <= k

If valid → Update result.

If invalid → Shrink the left pointer (left) until valid.

Update max substring length.

💡 Key Insights
(Window Size) - (Max Frequency Character Count) = Number of Replacements Needed

If replacements exceed k, move left forward to shrink the window.

Only max frequency matters—we don’t care about individual letters, just the most frequent one.

🕒 Complexity Analysis
Time: O(N), each character is processed at most twice (right expands, left shrinks).

Space: O(26) ≈ O(1), since we only store English letters.

*/


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const map = new Map();
    let result = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while ((right - left + 1) - Math.max(...map.values()) > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++
        }

        result = Math.max(result, right - left + 1)
    }

    return result

};










