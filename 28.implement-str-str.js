/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  if (haystack === '') {
    return -1;
  }
};
// @lc code=end

const haystackInput = 'apple';
const needleInput = 'pl';
console.log(strStr(haystackInput, needleInput));
