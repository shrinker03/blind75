/*

🧠 Problem: Find all unique combinations of candidates that sum to target (each number can be used unlimited times)
👣 Approach: Backtracking

🛠️ Steps:

Use helper backtrack(sum, index)

Base cases:

sum > target: return (prune path)

sum === target: push a copy of path to result

Loop from index to end:

Choose candidates[i], add to path

Recurse with sum + candidates[i] (note: reuse allowed → i)

Backtrack (pop from path)

⏱️ Time Complexity: O(2^t) where t = target (approximate upper bound)
📦 Space Complexity: O(t) for recursion and path depth

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    const path = [];

    function backtrack(sum, index) {
        if (sum > target) return;

        if (sum === target) {
            result.push([...path]);
            return;
        }


        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(sum + candidates[i], i);
            path.pop();
        }
    }

    backtrack(0, 0);
    return result;
};