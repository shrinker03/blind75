/*

🧠 Problem: Generate all permutations of a list of numbers
👣 Approach: Backtracking

🛠️ Steps:

Use a helper function backtrack(path, used)

Base case: if path.length === nums.length, push a copy to result

Iterate through nums:

Skip if already used[i]

Mark used[i] = true, add to path, recurse

After recursion, undo: path.pop(), used[i] = false

⏱️ Time Complexity: O(n × n!)
📦 Space Complexity: O(n!) (result + call stack + used array)

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function backtrack (path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i])
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false))

    return result;
    
};