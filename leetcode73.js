/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//笨思路，两次扫描
//第一次：扫描哪些要被设置为0，其中我用字母X代表这个地方的横竖也要置为0，用字母O表示接下来要置为0
//第二次：根据字母O的状态置换为0
var setZeroes = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0 || matrix[i][j] === 'X') {
                //行
                for (let k = 0; k < matrix[0].length; k++) {
                    if (matrix[i][k] == 0 || matrix[i][k] === 'X') {
                        matrix[i][k] = 'X'
                    } else {
                        matrix[i][k] = 'O'
                    }
                }
                //列
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] == 0 || matrix[k][j] === 'X') {
                        matrix[k][j] = 'X'
                    } else {
                        matrix[k][j] = 'O'
                    }
                }
                matrix[i][j] = 'O'
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 'O') {
                matrix[i][j] = 0
            }
        }
    }
};

setZeroes(
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ])