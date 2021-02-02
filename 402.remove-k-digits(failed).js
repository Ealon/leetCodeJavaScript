/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const { length } = num;
  if (length === k) return '0';

  if (k > length / 2) return num.slice(k - length);

  // else
  const result = []; // the minimum possible number after removing k digits, i.e. the result
  for (let i = 0; i < length && result.length < length - k; i++) {
    const digit = num[i];
    console.log(digit, result);
    const len = result.length;
    if (len === 0) {
      result.push(digit);
      continue;
    }
    if (result[len - 1] <= digit) {
      result.push(digit);
      continue;
    }
    if (result[len - 1] > digit) {
      result.pop();
      result.push(digit);
      continue;
    }
  }
  console.log(result);
  return (+result.join('')).toString();
};
// @lc code=end

// * idea as below
// ? [] 1432219, k=7
// ? [1] 1 432219, k=6
// ? [1,4] 1 4 32219, k=5
// ? [1,3] 14 3 2219, k=5
// ? [1,2] 143 2 219, k=5
// ? [1,2,2] 1432 2 19, k=4
// ? [1,2,1] 14322 1 9, k=4
// ? [1,2,1,9] 143221 9, k=3

// console.log(removeKdigits('1432219', 3));
console.log(removeKdigits('10200', 1));
// ? [] 10200, k=5
// ? [1] 1 0200, k=4
// ? [0] 1 0 200, k=4 
// ? [0,2] 10 2 00, k=3
// ? [0,0] 102 0 0, k=3
// ? [0,0,0] 1020 0, k=2
