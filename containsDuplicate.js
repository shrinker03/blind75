
/*

**Problem:** Given an array, determine if any element appears more than once.

**Brute Force:** Compare every pair using two nested loops. **Time Complexity: O(n²)**

**Hint for Optimization:**
- Can we track seen elements efficiently?
- Do we need to store indices, or just check for presence?

**Pattern Recognition:**
- If we need **quick lookups** → **Use a hash map or hash set**.
- A **Hash Set** is more space-efficient when only existence matters.

**Optimized Approach:**
- **Use a Hash Set for O(1) lookups.**
- **Time Complexity: O(n)**, **Space Complexity: O(n)**

**Common Use Cases for Hash Sets:**
- Checking for duplicates.
- Finding unique elements in a collection.
- Efficient membership testing.


*/


const containsDuplicate = function(nums) {
    const seen = new Set();
     for (const num of nums) {
         if (seen.has(num)) return true;
         seen.add(num);
     }
     return false;
 };