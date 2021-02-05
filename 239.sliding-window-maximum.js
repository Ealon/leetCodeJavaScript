/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// ? trial 1 - failed
const maxSlidingWindow1 = function (nums, k) {
  if (k === 1) return nums;

  const { length } = nums;
  const res = [];
  for (let i = 0; i < length - k + 1; i++) {
    // let max = -Infinity;
    let max = -nums[i];
    // for (let j = 0; j < k; j++) {
    for (let j = 1; j < k; j++) {
      const digit = nums[i + j];
      if (digit > max) {
        max = digit;
      }
    }
    res.push(max);
  }
  return res;
};
// ? trial 1 - failed

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums;

  const { length } = nums;
  const res = [];
  for (let i = 0; i < length - k + 1; i++) {
    let max = -Infinity;
    for (let j = 0; j < k; j++) {
      const digit = nums[i + j];
      if (digit > max) {
        max = digit;
      }
    }
    res.push(max);
  }
  return res;
};
// @lc code=end
