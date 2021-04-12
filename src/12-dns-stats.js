/**
 * Given an array of arr, return the object with the appearances of the DNS.
 *
 * @param {Array} arr
 * @return {Object}
 *
 * @example
 * arr = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arr = domains.slice(0);
  for (let i = 0; i < arr.length; i++) {
    let domain = '';
    while (arr[i]) {
      const index = arr[i].lastIndexOf('.');
      if (index !== -1) {
        domain += arr[i].slice(index);
        arr[i] = arr[i].slice(0, index);
      } else {
        domain += `.${arr[i]}`;
        arr[i] = false;
      }
      if (result[domain]) {
        result[domain]++;
      } else {
        result[domain] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
