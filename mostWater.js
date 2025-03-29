/*

Problem Summary:
Given an array where each index represents a vertical line with a certain height, find two lines that can hold the most water when combined with the x-axis.

Approach:
Two-Pointer Technique:

Place one pointer at the beginning (left) and another at the end (right).

Calculate the area: width * minHeight.

Update maxWater if the new area is larger.

Move the pointer pointing to the shorter height inward to explore a potentially larger container.

Repeat until left meets right.

Edge Cases Considered:
Very small arrays (less than 2 elements).

Cases where all elements are the same height.

Arrays with decreasing or increasing heights.

Complexity Analysis:
Time Complexity: O(n) – Each element is processed at most once.

Space Complexity: O(1) – Only a few variables are used.

*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};


// loop theough the array
// if i is greater than startPoint then startPoint = i
// if i is less than greater startPoint then endPoint = i;
// return the square from startPoint and a index of height till endpoint as a end index - 1