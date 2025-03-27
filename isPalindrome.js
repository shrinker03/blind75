/*

Optimal Approach:

Use Two Pointers: One starts from the left (p1), and the other from the right (p2).

Skip Non-Alphanumeric Characters: Move the pointers inward until valid characters are found.

Compare Characters: If at any point they don't match, return false.

Continue Until Pointers Meet: If all comparisons pass, return true.

Time Complexity: O(n) (Each character is processed at most once.)

Space Complexity: O(1) (Only a few extra variables are used.)

*/


/**
 * @param {string} s
 * @return {boolean}
 */

const isCharAlphaNumeric = char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')

var isPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;

    while (p1 < p2) {
        while(p1 < p2 && !isCharAlphaNumeric(s[p1])) {
            p1++;
        }
        while(p1 < p2 && !isCharAlphaNumeric(s[p2])) {
            p2--;
        }
        if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
            return false;
        }

        p1++;
        p2--;

    }
    return true
};
