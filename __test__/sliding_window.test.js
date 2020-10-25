const {
  solution1,
  solution2,
  solution2Improved,
} = require('../sliding_window');

const input = [120, 89, 0, 100, 20, 200, 56, 0, 0, 180, 38, 75];
const target = 280;

it('It should work correctly.', () => {
  expect(solution1(input, target)).toEqual([100, 20, 200]);
  // expect(solution2(input, target)).toEqual([100, 20, 200]);
  expect(solution2Improved(input, target)).toEqual([100, 20, 200]);
});
