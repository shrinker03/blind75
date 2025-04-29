/* Level - 3/5 => Solve again

🧠 Problem: House Robber
Leetcode: 198. House Robber
Category: Dynamic Programming (DP)

🔍 Problem Summary:
You are given a list of non-negative integers representing money in houses. You cannot rob two adjacent houses. Find the maximum amount of money you can rob without alerting the police.

💡 Approach:

Use two variables:

rob1 = max loot till house i-2

rob2 = max loot till house i-1

At each house, choose between:

Robbing current + rob1

Skipping current = rob2

Update: temp = max(rob1 + nums[i], rob2)

🧩 Time Complexity: O(n)
📦 Space Complexity: O(1)



*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;

    for (i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i]+rob1, rob2);
        rob1 = rob2;
        rob2 = temp
    }
    return rob2;
};