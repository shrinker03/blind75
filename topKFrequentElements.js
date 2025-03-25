
/*

**Problem:** Find the top K most frequent elements in an array.

**Brute Force:** Count frequencies and sort all elements. **Time Complexity: O(n log n)**

**Hint for Optimization:**
- Can we avoid sorting all elements?
- Can we store frequencies and retrieve the top K efficiently?

**Pattern Recognition:**
- If we need **frequency counting** → **Use a hash map**.
- If we need **quick access to top K elements** → **Use a heap (priority queue) or bucket sort**.

**Optimized Approaches:**
1. **Sorting + Hash Map:** Store frequencies, sort by count, return top K. (**O(n log k)**)
2. **Bucket Sort:** Group numbers by frequency in an array and extract top K. (**O(n)**)

**Common Use Cases for Frequency Counting:**
- Finding most common elements in a dataset.
- Implementing ranking or leaderboard systems.
- Optimizing data retrieval based on occurrence.

*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0])
};
