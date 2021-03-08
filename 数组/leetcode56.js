var merge = function (intervals) {
    intervals.sort((arr1, arr2) => { 
        return arr1[0] - arr2[0]
    })
    //结果数组是一个栈，栈顶永远是可能要合并的元素
    let result = []
    intervals.forEach((ele,idx,arr) => {
        if (idx == 0) {
            result.push(ele)
        } else { 
            let curArrStart = ele[0]
            let curArrEnd = ele[1]
            let preArr = result[result.length - 1]
            let preArrStart = preArr[0]
            let preArrEnd = preArr[1]
            if (preArrEnd >= curArrStart) {
                //前后有重合，还需判断是包含还是重合部分
                if (curArrEnd <= preArrEnd) {
                    //包含关系
                    //do nothing
                } else { 
                    //重合部分
                    let newArr = [preArrStart, curArrEnd]
                    result.pop()
                    result.push(newArr)
                    
                }
            } else { 
                //没重合
                flag = idx
                result.push(ele)
            }
        }
    });
    return result
};

merge([[1,4],[0,2],[3,5]])