/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
      continue;
    }

    if (i === 1) {
      res.push([1, 1]);
      continue;
    }

    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    row.push(1);
    res.push(row);
  }
  return res;
};
// @lc code=end
