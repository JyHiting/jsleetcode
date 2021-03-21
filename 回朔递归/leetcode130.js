/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let helper = (i, j) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            //数组越界，不合法数据
            return
        }
        if (board[i][j] === 'X' || board[i][j] == -1) {
            return
        }
        //记录已经访问过
        board[i][j] = -1
        //开始向四周检查
        helper(i, j - 1)
        helper(i - 1, j)
        helper(i, j + 1)
        helper(i + 1, j)
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if ((i == 0) || (j == 0) || (i == board.length - 1) || (j == board[0].length - 1)) {
                //四周边界
                if (board[i][j] === 'O') {
                    helper(i, j)
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == -1) {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X'
            }
        }
    }
};

solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]])