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

  // if (k > length / 2) return num.slice(k - length); // * 10020, 3 => 00

  // else
  const res = [];
  for (let i = 0; i < length; i++) {
    const digit = num[i];
    // * cannot use 'if' instead of 'while', e.g.'12340, 4'
    while (k > 0 && res.length > 0 && digit < res[res.length - 1]) {
      // res.length = res.length - 1; // ? equivalent to next line
      res.pop();
      console.log(k, res);
      k--;
    }
    res.push(digit);
    console.log(res);
  }

  res.length = res.length - k;
  return (+res.join('')).toString();
};
// @lc code=end

// * idea as below
// ? [] 1432219
// ? [1] (1)432219
// ? [1,4] 1(4)32219
// ? [1,3] 14(3)2219, 4 is removed, k = 1
// ? [1,2] 143(2)219, 3 is removed, k = 2
// ? [1,2,2] 1432(2)19, 2 is removed, k = 3

console.log(removeKdigits('32541', 2));
// console.log(removeKdigits('10200', 1));

// ? [] 112
// ? [1] 1 12
// ? [1,1] 1 1 2
// ? [1,1,2] 11 2, no digits are removed, k = 0
