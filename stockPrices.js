/*


🃏 Memory Card: Best Time to Buy and Sell Stock
Problem Summary: Find the maximum profit from buying and selling a stock once.

Approach: Use Sliding Window (Two Pointers).

Steps:

Start with left = 0 (buy) and right = 1 (sell).

If prices[left] < prices[right], calculate profit and update maxProfit.

If prices[right] is lower, move left = right (new buy point).

Always move right forward.

Time Complexity: O(n)

Space Complexity: O(1)

Edge Cases: No profit possible, decreasing prices, single-day prices.


*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = 1;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right]-prices[left])
        } else {
            left = right;
        }
        right+=1
    }

    return maxProfit;

};