const input = [120, 89, 0, 100, 20, 200, 56, 0, 0, 180, 38, 75];
const target = 280;

const solution1 = (arr, target) => {
  for (let i = 1; i <= arr.length; i += 1) {
    for (let j = 0; j + i <= arr.length; j++) {
      const subArr = arr.slice(j, j + i);
      const subArrSum = subArr.reduce((acc, cur) => acc + cur);
      console.log(subArr, subArrSum);

      if (subArrSum > target) {
        return subArr;
      }
    }
  }

  return arr.slice(start, length);
};

const solution2 = (arr, target) => {
  let sum = Infinity;
  let length = Infinity;
  let startIndex = 0;

  let start = 0;
  let end = 0;
  while (start <= end && end < arr.length) {
    const subArr = arr.slice(start, end + 1);
    const subArrSum = subArr.reduce((acc, cur) => acc + cur);
    if (subArrSum > target) {
      if (end - start + 1 < length && subArrSum < sum) {
        length = end - start + 1;
        sum = subArrSum;
        startIndex = start;
        console.log(start, end, length);
      }
      start += 1;
    } else {
      end += 1;
    }
  }
  return arr.slice(startIndex, startIndex + length);
};

const solution2Improved = (arr, target) => {
  let sum = arr[0],
    length = Infinity,
    startIndex = 0;

  for (let start = 0, end = 0; start <= end && end < arr.length; ) {
    console.log(sum);
    if (sum > target) {
      if (end - start + 1 < length) {
        length = end - start + 1;
        startIndex = start;
        console.log(start, end, length);
      }
      sum -= arr[start];
      start += 1;
    } else {
      end += 1;
      sum += arr[end];
    }
  }
  return arr.slice(startIndex, startIndex + length);
};

console.log(solution2Improved(input, target));
// solution2(input, target);
