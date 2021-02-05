/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      maxProfit += profit;
    }
  }
  return maxProfit;
};
// @lc code=end
