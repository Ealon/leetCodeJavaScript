/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (46.58%)
 * Likes:    1916
 * Dislikes: 1473
 * Total Accepted:    802.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) {
    return false;
  }
  return parseInt(`${x}`.split('').reverse().join('')) === x;
};

// TIPS: it works, but inefficient
// const isPalindrome = x => {
//   if (x < 0) {
//     return false;
//   }

//   let original = x;
//   let newX = 0;
//   let reminder = 0;

//   while (original / 10 >= 1) {
//     reminder = original % 10;
//     newX += reminder;
//     newX *= 10;
//     original = (original - reminder) / 10;
//     console.log(newX, original);
//   }
//   newX += original % 10;
//   console.log(newX);
//   return newX === x;
// };

// @lc code=end
