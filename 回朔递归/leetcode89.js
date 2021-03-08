//回溯递归
var grayCode = function (n) {
    let binary = new Array(n).fill(0)
    let set = new Set()

    let b2d = (binarys) => {
        let sum = 0
        binarys.forEach((item,idx,arr) => {
            sum += item * Math.pow(2,arr.length - idx - 1)
        });
        return sum
    }
    let result = [0], count = Math.pow(2, n)
    set.add(0)
    let backtrack = (binarys) => {
        if (result.length == count) {
            return true
        }
        for (let i = 0; i < binarys.length; i++) {
            let num = binarys[i]
            //取反
            if (num == 0) {
                binarys[i] = 1
                let curSum = b2d(binarys)
                if (set.has(curSum)) {
                    //已经有了不符合题意
                    //回滚状态继续下一个字符
                    binarys[i] = 0
                    continue
                } else {
                    //没有可以作为一个值
                    result.push(curSum)
                    set.add(curSum)
                    if (backtrack(binarys)) {
                        return false
                    }
                    //回滚状态继续下一个字符
                    binarys[i] = 0
                }
            } else {
                binarys[i] = 0
                let curSum = b2d(binarys)
                if (set.has(curSum)) {
                    //已经有了不符合题意
                    //回滚状态继续下一个字符
                    binarys[i] = 1
                    continue
                } else {
                    //没有可以作为一个值
                    result.push(curSum)
                    set.add(curSum)
                    if (backtrack(binarys)) {
                        return true
                    }
                    //回滚状态继续下一个字符
                    binarys[i] = 1
                }
            }
        }
        return false
    }
    backtrack(binary)
    return result
};

grayCode(2)



