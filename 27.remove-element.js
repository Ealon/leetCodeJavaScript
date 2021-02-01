/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * ? two-pointers
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  // ? always remember edge case
  const length = nums.length;
  if (length === 0) {
    return 0;
  }
  let index = 0;
  for (let i = 0; i < length; i++) {
    if (val === nums[i]) {
      continue;
    }

    nums[index++] = nums[i];
  }

  // nums.length = index;
  return index;
};
// @lc code=end

const input = [1, 2, 2, 3, 0, 4, 2, 5, 6, 2, 8, 2];
console.log(removeElement(input, 2));
