/*

🃏 Memory Card: Find Minimum in Rotated Sorted Array
📝 Problem Summary
Given a rotated sorted array of unique integers, find the minimum element in O(log N) time.

💡 Approach
Use binary search to locate the minimum.

If nums[left] < nums[right], the subarray is already sorted—return nums[left].

Otherwise, find the midpoint:

If nums[mid] >= nums[left], the minimum must be in the right half.

Else, the minimum is in the left half.

Update res with the smallest encountered element.

🔹 Steps
Initialize left = 0, right = nums.length - 1, and res = nums[0].

Perform binary search until left <= right.

If nums[left] < nums[right], update res and exit (sorted subarray).

Compute mid = Math.floor((left + right) / 2).

Update res = min(res, nums[mid]).

Adjust left or right based on comparison.

⏳ Complexity
Time: O(log N) (binary search).

Space: O(1) (constant space).

⚠️ Edge Cases
✔️ Already sorted array.
✔️ Array with only 1 element.
✔️ Minimum at nums[mid].
✔️ Large input sizes.

*/




/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let res = nums[0];

    while (l <= r) {
        if (nums[l] < nums[r]) {
            res = Math.min(res, nums[l])
            break;
        }
        let m = Math.floor((l + r) / 2); res = Math.min(res, nums[m]);

        if (nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return res;
};
