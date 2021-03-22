/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//遍历暴力解法
var setZeroes = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let ele = matrix[i][j]
            if (ele === 0) {
                for (let m = 0; m < matrix[0].length; m++) {
                    if (matrix[i][m] != 0) {
                        matrix[i][m] = "K"
                    }
                }
                for (let n = 0; n < matrix.length; n++) {
                    if (matrix[n][j]  != 0) {
                        matrix[n][j] = "K"
                    }
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "K") {
                matrix[i][j] = 0
            }
        }
    }
    console.log("88");
};

setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ])