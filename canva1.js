/*
 * Complete the 'maxLength' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 */

function maxLength(a, k) {
  // Write your code here
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let sum = 0;
  let loops = 0;
  while (end < a.length) {
    if (a.length - start < maxLength) {
      break;
    }

    if (end - start + 1 < maxLength) {
      sum += a[end];
      end += 1;
      continue;
    }

    loops++;
    if (start === end) {
      sum = a[start];
    } else {
      sum += a[end];
    }
    console.log({ sum, start, end });

    if (sum <= k) {
      const length = end - start + 1;
      if (length > maxLength) {
        maxLength = length;
      }
      end += 1;
    } else {
      start += 1;
      end = start;
    }
  }
  console.log({ loops });
  return maxLength;
}

console.log(maxLength([3, 2, 1, 1, 3, 6, 7, 8, 9, 10], 4));
