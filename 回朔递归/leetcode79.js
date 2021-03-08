//通过此题折腾我一直提交不成功我发现，不能用全局变量来保存结果
//这样的话提交不成功，比如我在exist上面定义一个var result保存结果
//然后返回就一直提交不成功，修改后则可以，浪费时间
var exist = function (board, word) {
    let status = new Array(board.length)
    for (let i = 0; i < status.length; i++) {
        let arr = new Array(board[0].length).fill(-1)
        status[i] = arr
    }

    var result = false
    for (let i = 0; i < status.length; i++) {
        for (let j = 0; j < status[0].length; j++) {
            const ele = board[i][j]
            if (ele == word[0]) {
                status[i][j] = 0
                if (helper(status, board, i, j, word,1)) {
                    return true
                }
                status[i][j] = -1
            }
        }
    }
    return result
};

function helper(status,board,i,j,word,curIdx) {
    
    if (curIdx >= word.length) {
        //递归退出
        return true
    }
    let letter = word[curIdx]
    for (let k = 0; k < 4; k++) {
        //上，右，下，左
        if (k == 0) {
            if (check(status, board,i - 1, j,letter)) {
                status[i - 1][j] = 0
                if (helper(status, board, i - 1, j, word, ++curIdx)) {
                    return true
                }
                --curIdx
                status[i - 1][j] = -1
            }
        } else if (k == 1) {
            if (check(status, board,i, j + 1,letter)) {
                status[i][j + 1] = 0
                if (helper(status, board, i, j + 1, word, ++curIdx)) {
                    return true
                }
                --curIdx
                status[i][j + 1] = -1
            }
        } else if (k == 2) {
            if (check(status, board,i + 1, j,letter)) {
                status[i + 1][j] = 0
                if (helper(status, board, i + 1, j, word, ++curIdx)) {
                    return true
                }
                --curIdx
                status[i + 1][j] = -1
            }
        } else { 
            if (check(status, board,i, j-1,letter)) {
                status[i][j - 1] = 0
                if (helper(status, board, i, j - 1, word, ++curIdx)) {
                    return true
                }
                --curIdx
                status[i][j - 1] = -1
            }
        }
    }
}
function check(status,board, i, j,letter) {
    //判断是否越界
    if (i < 0 || i >= status.length) {
        return false
    }
    if (j < 0 || j >= status[0].length) {
        return false
    }
    if (status[i][j] == -1 && board[i][j] == letter) {
        return true
    } else {    
        return false
    }

}


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
exist(board, word)
