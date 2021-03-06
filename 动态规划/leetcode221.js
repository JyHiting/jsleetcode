//动态规划
//             +
//     @@@@@@@@+
//     @@@@@@@@+
//     @@@@@@@@+
// ------------=
var maximalSquare = function (matrix) {
    let dptable = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        let arr = new Array(matrix[0].length).fill(0)
        dptable[i] = arr
    }
    let maxLen = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            //matrix[i][j] == 0 长宽再长都行不成符合题意正方形
            if (matrix[i][j] == 1) {
                //初始情况
                //横竖一行的情况
                if (i == 0 || j == 0) {
                    dptable[i][j] = 1
                } else {
                    dptable[i][j] = Math.min(dptable[i - 1][j], dptable[i][j - 1], dptable[i - 1][j - 1]) + 1
                }
            }
            maxLen = Math.max(maxLen, dptable[i][j])
        }
    }
    return maxLen * maxLen
};
