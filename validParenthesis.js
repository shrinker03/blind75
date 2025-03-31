/*

:
📝 Memory Card: Valid Parentheses
Problem Summary
Check if a given string of brackets (()[]{}) is valid.

Valid conditions:

Open brackets must be closed by the same type of bracket.

Open brackets must be closed in the correct order.

Every close bracket must have a matching open bracket.

💡 Approach: Stack
Use a stack to store opening brackets.

Traverse the string:

If the character is an opening bracket ((, {, [), push it to the stack.

If the character is a closing bracket (), }, ]):

Pop from the stack and check if it matches the corresponding opening bracket.

If it doesn't match or the stack is empty, return false.

At the end, the stack should be empty for a valid string.



*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {'}' : '{', ']' : '[', ')': '('}
    const stack = []

    for (let i = 0; i < s.length; i++) {
        // handle close
        if (map[s[i]]) {
            if(stack.pop() !== map[s[i]]) return false;
        } else{
            stack.push(s[i])
        }
    }
    return stack.length === 0;
};