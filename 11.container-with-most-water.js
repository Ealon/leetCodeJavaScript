/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// ! ------ original version ------
// const maxArea = function (height) {
//   if (height.length === 2) {
//     const minHeight = Math.min(...height);
//     return minHeight;
//   }

//   let start = 0;
//   let end = height.length - 1;
//   let maxArea = 0;
//   let indexes = [start, end]; // end, start
//   while (end > start) {
//     let area = (end - start) * Math.min(height[start], height[end]);
//     if (area > maxArea) {
//       maxArea = area;
//       indexes = [start, end];
//     }

//     console.log({
//       start: height[start],
//       end: height[end],
//       area,
//       maxArea,
//     });

//     if (height[start] >= height[end]) {
//       end--;
//       continue;
//     }

//     start++;
//   }
//   return maxArea;
// };
// ! ------ original version ------

/**
 * @param {number[]} height
 * @return {number}
 */
// ! ------ improved version ------
// @lc code=start
const maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  while (end > start) {
    const width = end - start;
    let minHeight = 0;
    if (height[start] >= height[end]) {
      minHeight = height[end];
      end--;
    } else {
      minHeight = height[start];
      start++;
    }

    const area = width * minHeight;
    if (area > maxArea) {
      maxArea = area;
    }
  }
  return maxArea;
};
// @lc code=end
// ! ------ improved version ------

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const height2 = [1, 1]; // 1
const height3 = [4, 3, 2, 1, 4]; // 16
const height4 = [1, 2, 1]; // 2
const height5 = [1, 2, 4, 3]; // 4
const height6 = [1, 3, 2, 5, 25, 24, 5]; // 24

console.log(maxArea(height1));
