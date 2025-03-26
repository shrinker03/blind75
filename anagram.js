/* *** Level => 4/5 *** => Good to revisit

**Problem:** Check if two strings are anagrams (contain the same characters in the same frequency).

**Brute Force:** Sort both strings and compare. **Time Complexity: O(n log n)**

**Hint for Optimization:**
- Can we track character frequencies instead of sorting?
- Can we process both strings in a single pass?

**Pattern Recognition:**
- If we need **frequency counting** → **Use a hash map**.
- If removing matched elements, **decrement counts** and remove when zero.

**Optimized Approach:**
- **Use a single Hash Map to count occurrences in O(n).**
- Increment for `s`, decrement for `t`, and check if all counts reach zero.
- **Time Complexity: O(n)**, **Space Complexity: O(1)** (since we store at most 26 letters).

**Common Use Cases for Hash Maps:**
- Counting occurrences of elements.
- Comparing frequencies of characters or words.
- Detecting anagrams, permutations, or palindromes.


*/


const isAnagram = function(s, t) {

    // mine intution using 2 hashMap => Speed: 80%, space: 32%

    // if (s.length !== t.length) return false;

    // const hashMap = new Map();
    // const newHashMap = new Map()


    // for (let i = 0; i < s.length; i++) {
    //     if (hashMap.has(s[i])) {
    //         hashMap.set(s[i], hashMap.get(s[i]) + 1)
    //     } else {
    //         hashMap.set(s[i], 1)
    //     }
    // }

    // for (let i = 0; i < t.length; i++) {
    //     if (newHashMap.has(t[i])) {
    //         newHashMap.set(t[i], newHashMap.get(t[i]) + 1)
    //     } else {
    //         newHashMap.set(t[i], 1)
    //     }
    // }

    // for (let [key, val] of hashMap) {
    //     if (!newHashMap.get(key) || val !== newHashMap.get(key)) {
    //         return false
    //     }
    // }

    // return true;


    // more optimal solution => speed: 76%, space: 72%
    if (s.length !== t.length) return false;

    const hashMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i]) + 1)
        } else {
            hashMap.set(s[i], 1)
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!hashMap.has(t[i])) {
            return false
        } else {
            hashMap.set(t[i], hashMap.get(t[i]) - 1)
            if (hashMap.get(t[i]) === 0) {
                hashMap.delete(t[i])
            }
        }
    }

    return hashMap.size === 0

};