//回溯
//回溯有个特点就是我们写的代码利用递归去解决问题
//这些递归有个相似的特点，基本都是下面的模板：
//1，在当前集合中做出决策选出元素，加入我们的path结果集合（这是一次递归所做的事情）
//2，递归进行下一次操作，在下一个集合中，继续决策选符合条件的要素
//3，每一次递归结束弹出上次放入path的结果（还原上下文），本次递归调用的任务完成
var solveNQueens = function (n) {
    let arr = new Array(n)
    for (let i = 0; i < arr.length; i++) {
        let tmpArr = new Array(n).fill('.')
        arr[i] = tmpArr
    }
    let result = []
    helper(result, arr, 0)
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
                //组合符合题意的格式
                let tmpResult = []
                for (let i = 0; i < arr.length; i++) {
                    let tmpArr = arr[i]
                    tmpResult.push(tmpArr.join(''))
                }
                result.push(tmpResult)
            } else {
                helper(result, arr, row+1)
            }
            arr[row][i] = '.'
        }
    }
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

solveNQueens(4)
