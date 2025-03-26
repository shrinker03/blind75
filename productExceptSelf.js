
/* **** Proeficiency: 3/5 **** => Need to revisit after sometime

**Problem:** Given an array `nums`, return an output array where `output[i]` is the product of all elements except `nums[i]`.

**Brute Force:** Compute the product for each index by iterating over the array. **Time Complexity: O(n²)**

**Hint for Optimization:**
- Can we avoid recomputing products multiple times?
- Can we use prefix and suffix products to achieve `O(n)` time?

**Pattern Recognition:**
- If we need **product of all elements except one**, compute **prefix and suffix products**.
- If avoiding division, maintain separate **prefix and suffix accumulators**.

**Optimized Approach:**
1. **First Pass (Left to Right):** Compute prefix products.
2. **Second Pass (Right to Left):** Multiply suffix products into the result.
3. **Time Complexity: O(n)**, **Space Complexity: O(1)** (excluding output array).

**Common Use Cases for Prefix/Suffix Multiplication:**
- Finding cumulative products/sums efficiently.
- Avoiding redundant calculations in large datasets.
- Optimizing problems that require exclusions or shifting transformations.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};

