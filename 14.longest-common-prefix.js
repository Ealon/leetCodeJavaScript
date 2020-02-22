/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.66%)
 * Likes:    2007
 * Dislikes: 1664
 * Total Accepted:    640.9K
 * Total Submissions: 1.8M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  const { length } = strs;
  if (length === 0) {
    return '';
  }
  if (length === 1) {
    return strs[0];
  }

  let prefix = strs[0];
  for (let i = 1; prefix.length && i < strs.length; ) {
    if (strs[i].startsWith(prefix)) {
      i += 1;
      continue;
    } else {
      prefix = prefix.substr(0, prefix.length - 1);
    }
  }
  return prefix;
};
// @lc code=end
