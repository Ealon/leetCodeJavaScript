/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// x wrong-answer e.g. s="]"
// const isValid = function (s) {
//   const stack = [];
//   // const reg = /\(|\)|\[|\]|\{|\}/;
//   const reg = /\(|\[|\{/;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     // char is (, [ or {
//     if (reg.test(char)) {
//       stack.push(char);
//     }
//     const { length } = stack;
//     if (
//       (char === ')' && stack[length - 1] === '(') ||
//       (char === ']' && stack[length - 1] === '[') ||
//       (char === '}' && stack[length - 1] === '{')
//     ) {
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// };
// x wrong-answer

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s === '') return true;

  const stack = [];
  const reg = /\(|\)|\[|\]|\{|\}/;
  // const reg = /\(|\[|\{/;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const { length } = stack;
    if (
      (char === ')' && stack[length - 1] === '(') ||
      (char === ']' && stack[length - 1] === '[') ||
      (char === '}' && stack[length - 1] === '{')
    ) {
      stack.pop();
      continue; // * important
    }

    if (reg.test(char)) {
      stack.push(char);
      continue;
    }

    return false; // ? assuming there are no other characters than brackets
  }
  return stack.length === 0;
};
// @lc code=end

const test = '()';
console.log(isValid(test));
