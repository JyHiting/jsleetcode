/**
 * @param {number} c
 * @return {boolean}
 */
//最开始想到的双指针超时
//因为有个点还需要剪枝掉
var judgeSquareSum = function (c) {
    let left = 0, right = c
    while (left <= right) {
        let sum = Math.pow(left, 2) + Math.pow(right, 2)
        if (sum == c) {
            return true
        } else if (sum > c) {
            right--
        } else {
            left++
        }
    }
    return false
};

var judgeSquareSum = function (c) {
    // 取floor不取floor铁定要超了c
    //这里对right的可能情况要剪枝掉已经不可能会出结果的枚举情况
    let left = 0, right = Math.floor(Math.sqrt(c))
    while (left <= right) {
        let sum = Math.pow(left, 2) + Math.pow(right, 2)
        if (sum == c) {
            return true
        } else if (sum > c) {
            right--
        } else {
            left++
        }
    }
    return false
};

