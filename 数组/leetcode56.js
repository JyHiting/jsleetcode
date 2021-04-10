// var merge = function (intervals) {
//     intervals.sort((arr1, arr2) => { 
//         return arr1[0] - arr2[0]
//     })
//     //结果数组是一个栈，栈顶永远是可能要合并的元素
//     let result = []
//     intervals.forEach((ele,idx,arr) => {
//         if (idx == 0) {
//             result.push(ele)
//         } else { 
//             let curArrStart = ele[0]
//             let curArrEnd = ele[1]
//             let preArr = result[result.length - 1]
//             let preArrStart = preArr[0]
//             let preArrEnd = preArr[1]
//             if (preArrEnd >= curArrStart) {
//                 //前后有重合，还需判断是包含还是重合部分
//                 if (curArrEnd <= preArrEnd) {
//                     //包含关系
//                     //do nothing
//                 } else { 
//                     //重合部分
//                     let newArr = [preArrStart, curArrEnd]
//                     result.pop()
//                     result.push(newArr)
                    
//                 }
//             } else { 
//                 //没重合
//                 flag = idx
//                 result.push(ele)
//             }
//         }
//     });
//     return result
// };

// merge([[1,4],[0,2],[3,5]])


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//数组先按starti排序
//然后遍历数组
//比较当前元素的start和上一个元素的end
//start > end 压入一个结果进行下一个
//start <= end 有交集记录此时的交集left
//开始遍历找不相交的right 然后压入结果继续
var merge = function (intervals) {
    if (intervals.length < 2) {
        return intervals
    }
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    let result = [], idx = 1,preEle = intervals[0]

    while (idx < intervals.length) {
        if (intervals[idx][0] > preEle[1]) {
            result.push(preEle)
            preEle = intervals[idx]
        } else {
            preEle = [preEle[0],Math.max(intervals[idx][1], preEle[1])]
        }
        idx ++
    }
    result.push(preEle)
    return result
};

merge([[1,4],[4,5]])