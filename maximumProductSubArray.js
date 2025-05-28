/* Level = 3/5 => Need to give one more try


🧠 Problem: Maximum Product Subarray
Leetcode: 152
Category: Dynamic Programming, Prefix/Suffix Product

🔍 Problem Summary:
Given an array nums, find the contiguous subarray with the largest product.

💡 Approach:

Track two running products:

pre: prefix (left to right)

suf: suffix (right to left)

Reset to 1 if any becomes 0 (since multiplication resets)

At each step, take the max(pre, suf) and update the result

✨ Key Insight:

Product sign flips with negatives → need both directions to catch max subarray

0 resets the product → treat as a restart point

🧩 Time Complexity: O(n)
📦 Space Complexity: O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let suf = 1;
    let pre = 1;
    let ans = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (pre === 0) {
            pre = 1;
        }
        if (suf === 0) {
            suf = 1;
        }

        pre = pre * nums[i];
        suf = suf * nums[nums.length - i - 1];

        ans = Math.max(ans, Math.max(pre, suf))
    }

    return ans;
};