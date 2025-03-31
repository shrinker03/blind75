/* Level : 2/5 => Need to give it a try again

🧠 Memory Card for "Longest Substring Without Repeating Characters"
🔹 Problem Summary
Find the length of the longest substring in a given string s without repeating characters.

🔹 Approach
✅ Sliding Window with Set

Expand the right pointer to add characters.

If a duplicate is found, shrink the window by moving the left pointer forward until the duplicate is removed.

Track the max substring length dynamically.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let left = 0;
    let longest = 0;
 
     for (let right = 0; right < s.length; right++) {
         while (charSet.has(s[right])) {
             charSet.delete(s[left]);
             left++;
         }
         charSet.add(s[right]);
         longest = Math.max(longest, right - left + 1);
     }
 
     return longest;
 };
 