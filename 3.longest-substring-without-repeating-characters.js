/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const { length } = s;

  if (length < 1) return length; // * length is 1 or 0

  // else
  const cache = {};
  let start = 0;
  let longest = 1;
  for (let i = 0; i < length; i++) {
    const char = s[i];
    // ? cache[char] can be 0
    if (cache[char] !== undefined && cache[char] >= start) {
      const currentLength = i - start;
      if (currentLength > longest) {
        longest = currentLength;
      }
      start = cache[char] + 1;
      cache[char] = i;
    } else {
      cache[char] = i;
    }
    // console.log(cache, start);
  }
  const finalSubLength = length - start;
  longest = finalSubLength > longest ? finalSubLength : longest;
  return longest;
};
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'));
