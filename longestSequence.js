/*

**Problem:** Find the length of the longest consecutive sequence in an unsorted array.

**Brute Force:** Sort the array and check consecutive elements. **Time Complexity: O(n log n)**

**Hint for Optimization:**
- Can we avoid sorting and still find consecutive sequences efficiently?
- Can we track presence using a hash set for O(1) lookups?

**Pattern Recognition:**
- If we need **quick existence checks** → **Use a hash set**.
- If we need **to find sequence starts**, check when `num - 1` is missing.

**Optimized Approach:**
1. **Use a Hash Set for O(1) lookups.**
2. **Find sequence starts** (numbers where `num - 1` is missing).
3. **Expand sequences using `num + 1` while present in the set.**
4. **Time Complexity: O(n)**, **Space Complexity: O(n)**

**Common Use Cases for Hash Sets:**
- Finding missing or consecutive elements efficiently.
- Checking for presence in O(1) time.
- Optimizing problems that involve subsets or ordering constraints.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0; // Handle edge case
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            while(set.has(currentNum + 1)) { // Expand sequence
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }
    return longest
};