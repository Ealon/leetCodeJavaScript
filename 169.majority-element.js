/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// * method 1
const majorityElement1 = function (nums) {
  const map = {};
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }

    // ? need to put this line here, covering the case
    // ? that length === 1
    if (map[num] > length / 2) {
      return num;
    }
  }
  return null;
};

// @lc code=start
const majorityElement = function (nums) {
  const map = {};
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }

    // ? need to put this line here, covering the case
    // ? that length === 1
    if (map[num] > length / 2) {
      return num;
    }
  }
  return null;
};
// @lc code=end
