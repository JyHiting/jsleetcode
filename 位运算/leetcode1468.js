/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {

    let result = start + 2 * 0
    for (let i = 1; i < n; i++) {
        result ^= start + 2 * i
    }
    return result
};