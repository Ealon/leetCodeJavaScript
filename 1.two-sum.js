/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) { // index must be >= 0
      return [comp[nums[i]], i]; 
    }
    // store needed value as key, first index as value
    // then if a new element matches this value, return 
    // the "index as value" and new element's index
    comp[target - nums[i]] = i; 
    console.log(comp);
  }
};
// @lc code=end

const test = [2, 3, 4, 5, 7, 8, 9];
console.log(twoSum(test, 10));
