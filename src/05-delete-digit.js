/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = '';
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    let sum = '';
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    if (max < sum) {
      max = sum;
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
