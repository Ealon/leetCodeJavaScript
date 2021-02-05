/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  const { length } = nums;

  if (length === 0) return [];

  if (length === 1) return [String(nums[0])];

  const res = [];
  let range = nums[0];
  for (let i = 1; i < length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      range =
        range === nums[i - 1] ? String(range) : `${range}->${nums[i - 1]}`;
      res.push(range);
      range = nums[i];
    }
  }
};
// @lc code=end
