/*

📌 Memory Card: Encode and Decode Strings
Problem Summary:
Convert an array of strings into a single string (encode) and retrieve the original array (decode) while handling edge cases like empty strings and special characters.

Approach:
Encoding:

Prefix each string with its length followed by a delimiter (#).

Join all encoded strings into one.

Decoding:

Read the length prefix before #, extract the substring, and repeat.

Edge Cases Considered:
Empty strings ("") in input.

Strings containing special characters like # and numbers.

Long or variable-length strings.

Complexity Analysis:
Time Complexity: O(n), where n is the total length of all strings.

Space Complexity: O(n), storing the encoded and decoded strings.

*/



class Codec {
    encode(strs) {
        return strs.map(str => str.length + '#' + str).join('');
    }

    decode(s) {
        let i = 0, res = [];
        while (i < s.length) {
            let j = i;
            while (s[j] !== '#') j++; // Find delimiter
            let length = parseInt(s.substring(i, j)); // Extract length
            res.push(s.substring(j + 1, j + 1 + length)); // Extract string
            i = j + 1 + length; // Move to the next encoded string
        }
        return res;
    }
}

// Usage:
const codec = new Codec();
const encoded = codec.encode(["hello", "world"]);
console.log(encoded); // Example Output: "5#hello5#world"
console.log(codec.decode(encoded)); // Output: ["hello", "world"]
