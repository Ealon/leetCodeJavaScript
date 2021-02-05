/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// * brute-force
const nextGreaterElement = function (nums1, nums2) {
  const { length: length1 } = nums1;
  const { length: length2 } = nums2;
  const res = [];
  for (let i = 0; i < length1; i++) {
    const num = nums1[i];
    res[i] = -1;
    for (let j = nums2.indexOf(num) + 1; j < length2; j++) {
      if (nums2[j] > num) {
        res[i] = nums2[j];
        break;
      }
    }
  }
  return res;
};
// @lc code=end

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
