/* Level => 4/5 => Good to recall again

🧠 Problem: Climbing Stairs
Leetcode: 70. Climbing Stairs
Category: Dynamic Programming (DP), Fibonacci Pattern

🔍 Problem Summary:
You can climb 1 or 2 steps at a time. Given n stairs, return the number of distinct ways to reach the top.

💡 Approach:

Dynamic Programming based on Fibonacci logic:

ways(n) = ways(n-1) + ways(n-2)

Use two variables (one, two) to track previous two results.

Update iteratively to save space (O(1) space).

🧩 Time Complexity: O(n)
📦 Space Complexity: O(1)



*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }

    return one;
    
};