/* *** Level => 4/5 *** => Good to revisit

**Problem:** Given an array of strings, group anagrams together.

**Brute Force:** Compare every string with every other using an anagram check. **Time Complexity: O(n²)**

**Hint for Optimization:**
- Can we transform each word into a key that represents its anagram group?
- Can we use a hash map to store grouped anagrams?

**Pattern Recognition:**
- If words are anagrams, they will have the **same sorted order**.
- If words are anagrams, they will have the **same character frequency**.

**Optimized Approaches:**
1. **Sort each word and use it as a key in a hash map.**
   - Time Complexity: **O(nk log k)** (sorting each word of length k)
2. **Use a frequency array (O(k)) as a key instead of sorting.**
   - Time Complexity: **O(nk)** (faster for longer words)

**Common Use Cases for Hash Maps:**
- Grouping elements based on unique transformations.
- Detecting anagrams, permutations, or similar patterns.
- Efficiently categorizing unordered data.

*/



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!map.has(sortedStr)) {
            map.set(sortedStr, [])
        }

        map.get(sortedStr).push(str)
    }

    return Array.from(map.values())
    
};

