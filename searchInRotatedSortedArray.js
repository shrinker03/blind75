
/* Level - 3 / 5 => Good to solve again

📝 Problem Summary
Given a rotated sorted array and a target, find its index.

If not found, return -1.

Must run in O(log N) time.

🔍 Approach (Binary Search)
Find the Midpoint:

mid = Math.floor((left + right) / 2)

Check if nums[mid] === target, return mid.

Identify Sorted Half:

If nums[left] ≤ nums[mid] → Left half is sorted

Else → Right half is sorted

Decide Search Direction:

If left half is sorted:

If nums[left] ≤ target < nums[mid] → Search left.

Else → Search right.

If right half is sorted:

If nums[mid] < target ≤ nums[right] → Search right.

Else → Search left.

Repeat Until left > right

If target is found → return index.

If not → return -1.

🛠 Complexity Analysis
Time Complexity: O(log N) (Binary search)

Space Complexity: O(1) (No extra space)


*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) { // left is sorted
                right = mid - 1 // search left
            } else {
                left = mid + 1; // search right
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }
    }
  
    return -1; // Target not found
    
};