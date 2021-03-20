/**
 * @param {number} n
 * @return {number}
 */

//背包问题
var numSquares = function (n) {
    let dptable = [0]//表示正整数i符合题意的最小数量
    for (let i = 0; i <= n; i++) {//0到n的正整数
        for (let j = 1; j * j <= i; j++) {//在正整数i的时候可以选择的平方数
            if (dptable[i]) {
                dptable[i] = Math.min(dptable[i - j * j] + 1, dptable[i])
            } else {
                dptable[i] = dptable[i - j * j] + 1
            }
        }
    }
    return dptable[n]
};

numSquares(12)