/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let pivot = 0;
  while (start <= end) {
    pivot = Math.floor((start + end) / 2);
    if (array[pivot] === value) {
      return pivot;
    }
    if (value < array[pivot]) {
      end = pivot - 1;
    } else if (value > array[pivot]) {
      start = pivot + 1;
    } else {
      return 0;
    }
  }
  return 0;
}

module.exports = findIndex;
