/*

**Problem:** Find two numbers in an array that sum up to a given target and return their indices.

**Brute Force:** Use two nested loops to check all pairs. **Time Complexity: O(n²)**

**Hint for Optimization:**
- Can we reduce checking duplicate pairs?
- Can we store seen numbers to avoid looping again?

**Pattern Recognition:**
- If we need **quick lookups** → **Use a hash map**.
- Store seen numbers while iterating.
- Check if `target - currentNum` exists in the hash map.

**Optimized Approach:**
- **Use a Hash Map (Dictionary) for O(1) lookups.**
- **Time Complexity: O(n)**, **Space Complexity: O(n)**

**Common Use Cases for Hash Maps:**
- Finding pairs with a given sum.
- Checking for duplicates quickly.
- Storing previous computations (DP/memoization).

*/




const twoSum = function (nums, target) {
    // Brute force approach
    // const output = []
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             output.push(i, j);
    //         }
    //     }
    // }
    // return output;

    // Better Approach
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] !== undefined) {
            return [hashMap[target - nums[i]], i]
        } else {
            hashMap[nums[i]] = i
        }
    }
};

