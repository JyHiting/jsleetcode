/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    //只有一行就返回
    if (numRows == 1) {
        return s
    }
    let arr = []
    for (let i = 0; i < numRows; i++) {
        arr[i] = []
    }
    //down字符元素摆放方向开始向下
    let row = 0, col = 0, down = true
    for (let i = 0; i < s.length; i++) {

        arr[row][col] = s[i]
        if (down) {
            //向下摆元素
            if (row == numRows - 1) {
                //到底了开始向上走
                col++
                row--
                down = !down
            } else {
                row++
            }
        } else {
            //开始向上摆元素
            if (row == 0) {
                //到顶了开始向下走
                row++
                down = !down
            } else {
                row--
                col++
            }
        }
    }
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j]) {
                result += arr[i][j]
            }
        }
    }
    return result
};

