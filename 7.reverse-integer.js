/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   const negative = x < 0;
//   let result = negative ? -x : x;
//   result = String(result)
//     .split('')
//     .reverse()
//     .join('');
//   result = parseInt(result);
//   return negative ? -result : result;
// };

const reverse = x => {
  const limit = 2 ** 31;
  if (x > limit - 1 || x < -limit) {
    return 0;
  }

  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit - 1 || n < -limit ? 0 : n * k;
};
// @lc code=end
