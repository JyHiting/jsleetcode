/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//数据是有规律的的找一个好的搜索点可以减枝调很多数据
//根据数据规律斜着比较
var searchMatrix = function (matrix, target) {
    let i = 0, j = matrix[0].length - 1
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] > target) {
            j--
        } else if (matrix[i][j] < target) {
            i++
        } else {
            return true
        }
    }
    return false
};

searchMatrix([[-1, 3]], 1)