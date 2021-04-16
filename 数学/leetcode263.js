/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) {
        return false
    }
    [2, 3, 5].forEach((item, idx) => {
        //如果n可以被2，3，5整除就不停的去除，直到n中无2，3，5因子，如果此时n为1就为符合题意的结果
        while (n % item == 0) {
            n = n / item
        }
    });
    //不等1的话还有其它因子不符合题意
    return n === 1
};