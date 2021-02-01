/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * ? two-pointers (actually 3)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const length = nums.length;
  if (length === 0) {
    return 0;
  }

  let index = 0;
  let i = 0;
  let j = 1;
  while (j < length) {
    if (nums[i] === nums[j]) {
      j++;
      continue;
    }

    // * nums[i] !== nums[j]
    nums[++index] = nums[j];
    i = j;
    j++;
  }

  return index + 1;
};
// @lc code=end
