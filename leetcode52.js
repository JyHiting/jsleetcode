var totalNQueens = function(n) {
    let arr = new Array(n)
    for (let i = 0; i < arr.length; i++) {
        let tmpArr = new Array(n).fill('.')
        arr[i] = tmpArr
    }
    let result = helper(0, arr, 0)
    return result
};

function helper(result,arr,row) {
    
    let rowArr = arr[row]
    for (let i = 0; i < rowArr.length; i++) {
        let isCan = check(arr, row, i)
        if (isCan) {
            //找到一个
            arr[row][i] = 'Q'
            if (row == rowArr.length - 1) {
                //找到一个结果
                result++
            } else {
                result = helper(result, arr, row+1)
            }
            arr[row][i] = '.'
        }
    }
    return result
}

//判断行，列，斜线是否满足
function check(arr, eleI, eleJ) {

    let isCanPass = true
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            
            if (eleI == i && eleJ == j) {
                //自己跳过
                continue
            } else { 
                if (eleI == i) {
                    //校验行
                    //同一行找到一个Q，不满足
                    if (arr[i][j] == 'Q') {
                        return false
                    }
                }else if(eleJ == j) {
                    //校验列
                    if (arr[i][j] == 'Q') {
                        return false
                    }
                } else if (i < eleI) {
                    //校验斜线条件
                    if (eleI-i == eleJ-j) {
                        if (arr[i][j] == 'Q') {
                            return false
                        }
                    }else if (eleI-i == j-eleJ) {
                        if (arr[i][j] == 'Q') {
                            return false
                        }
                    }  
                }else if (i > eleI) {
                    if (i - eleI == eleJ - j) {
                        if (arr[i][j] == 'Q') {
                            return false
                        }
                    }else if (i - eleI == j - eleJ) {
                        if (arr[i][j] == 'Q') {
                            return false
                        }
                    }
                }
            }
        }
    }
    return isCanPass
}

totalNQueens(4)