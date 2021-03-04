/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dptable = new Array(m)
    for (let i = 0; i < dptable.length; i++) {
        let arr = new Array(n)
        dptable[i] = arr
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                dptable[0][j] = 1
            } else {
                if (j == 0) {
                    dptable[i][0] = 1
                } else {
                    dptable[i][j] = dptable[i - 1][j] + dptable[i][j - 1]
                }
            }
        }
    }
    return dptable[m - 1][n - 1]
};