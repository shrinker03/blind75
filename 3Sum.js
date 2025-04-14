/* Level => 2/5 => Need to definitely solve this again
Three Sum 🃏
Problem:
Find all unique triplets in an array nums that sum up to 0.

Approach:

Sort the Array: This helps efficiently handle duplicates and enables the two-pointer technique.

Iterate with i: Loop from 0 to nums.length - 2 (since we need triplets).

Skip Duplicates: If nums[i] === nums[i - 1], continue to the next iteration.

Two-Pointer Technique:

Set p1 = i + 1 (left) and p2 = nums.length - 1 (right).

If nums[i] + nums[p1] + nums[p2] === 0, store the triplet and move both pointers while skipping duplicates.

If sum < 0, increase p1; if sum > 0, decrease p2.

Return Unique Triplets: Avoid duplicate triplets using sorted elements comparison.

Time Complexity: O(n²)

Sorting: O(n log n)

Two-pointer search for each i: O(n), making the overall complexity O(n²).

Space Complexity: O(1) (excluding the output array).

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let p1 = i + 1, p2 = nums.length - 1;

        while (p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];

            if (sum === 0) {
                result.push([nums[i], nums[p1], nums[p2]]);

                while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++; // Skip duplicates
                while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--; // Skip duplicates

                p1++;
                p2--;
            } else if (sum < 0) {
                p1++; // Increase sum
            } else {
                p2--; // Decrease sum
            }
        }
    }

    return result;
};
